"use server";

import { db } from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";

const CREDIT_VALUE = 10; // $10 per credit total
// const PLATFORM_FEE_PER_CREDIT = 2; // $2 platform fee
// const DOCTOR_EARNINGS_PER_CREDIT = 8; // $8 to doctor
const PLATFORM_FEE_PERCENT = 0.03; // 3% Razorpay fee


/**
 * Request payout for all remaining credits
 */
export async function requestPayout(formData) {
  try {
    const { userId } = await auth();

    if (!userId) {
      throw new Error("Unauthorized");
    }

    const lawyer = await db.user.findUnique({
      where: {
        clerkUserId: userId,
        role: "LAWYER",
      },
    });

    if (!lawyer) {
      throw new Error("Lawyer not found");
    }

    const paypalEmail = formData.get("paypalEmail");

    if (!paypalEmail) {
      throw new Error("PayPal email is required");
    }

    // Check if lawyer has any pending payout requests
    const existingPendingPayout = await db.payout.findFirst({
      where: {
        lawyerId: lawyer.id,
        status: "PROCESSING",
      },
    });

    if (existingPendingPayout) {
      throw new Error(
        "You already have a pending payout request. Please wait for it to be processed."
      );
    }

    // Get lawyer's current credit balance
    const creditCount = lawyer.credits;

    if (creditCount === 0) {
      throw new Error("No credits available for payout");
    }

    if (creditCount < 1) {
      throw new Error("Minimum 1 credit required for payout");
    }

    const totalAmount = creditCount * CREDIT_VALUE;
const platformFee = totalAmount * PLATFORM_FEE_PERCENT;
const netAmount = totalAmount - platformFee;


    // Create payout request
    const payout = await db.payout.create({
      data: {
        lawyerId: lawyer.id,
        amount: totalAmount,
        credits: creditCount,
        platformFee,
        netAmount,
        paypalEmail,
        status: "PROCESSING",
      },
    });

    revalidatePath("/lawyer");
    return { success: true, payout };
  } catch (error) {
    console.error("Failed to request payout:", error);
    throw new Error("Failed to request payout: " + error.message);
  }
}

/**
 * Get lawyer's payout history
 */
export async function getLawyerPayouts() {
  try {
    const { userId } = await auth();

    if (!userId) {
      throw new Error("Unauthorized");
    }

    const lawyer = await db.user.findUnique({
      where: {
        clerkUserId: userId,
        role: "LAWYER",
      },
    });

    if (!lawyer) {
      throw new Error("Lawyer not found");
    }

    const payouts = await db.payout.findMany({
      where: {
        lawyerId: lawyer.id,
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    return { payouts };
  } catch (error) {
    throw new Error("Failed to fetch payouts: " + error.message);
  }
}

/**
 * Get lawyer's earnings summary
 */
export async function getLawyerEarnings() {
  try {
    const { userId } = await auth();

    if (!userId) {
      throw new Error("Unauthorized");
    }

    const lawyer = await db.user.findUnique({
      where: {
        clerkUserId: userId,
        role: "LAWYER",
      },
    });

    if (!lawyer) {
      throw new Error("Lawyer not found");
    }

    // Get all completed cases for this lawyer
    const completedCases = await db.legalCase.findMany({
      where: {
        lawyerId: lawyer.id,
        status: "COMPLETED",
      },
    });

    // Calculate this month's completed cases
    const currentMonth = new Date();
    currentMonth.setDate(1);
    currentMonth.setHours(0, 0, 0, 0);

    const thisMonthCases = completedCases.filter(
      (legalCase) => new Date(legalCase.createdAt) >= currentMonth
    );

    // Use lawyer's actual credits from the user model
    const totalEarnings =
  lawyer.credits * CREDIT_VALUE * (1 - PLATFORM_FEE_PERCENT);


    // Calculate this month's earnings
    const thisMonthEarnings =
  thisMonthCases.length * CREDIT_VALUE * (1 - PLATFORM_FEE_PERCENT);


    // Simple average per month calculation
    const averageEarningsPerMonth =
      totalEarnings > 0
        ? totalEarnings / Math.max(1, new Date().getMonth() + 1)
        : 0;

    // Get current credit balance for payout calculations
    const availableCredits = lawyer.credits;
const availablePayout =
  availableCredits * CREDIT_VALUE * (1 - PLATFORM_FEE_PERCENT);

    return {
      earnings: {
        totalEarnings,
        thisMonthEarnings,
        completedCases: completedCases.length,
        averageEarningsPerMonth,
        availableCredits,
        availablePayout,
      },
    };
  } catch (error) {
    throw new Error("Failed to fetch lawyer earnings: " + error.message);
  }
}