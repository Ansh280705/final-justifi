"use server";

import { db } from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";

export async function createDispute(formData) {
  const { userId } = await auth();
  if (!userId) throw new Error("Unauthorized");

  try {
    const user = await db.user.findUnique({
      where: { clerkUserId: userId },
    });
    if (!user) throw new Error("User not found");

    const complainantName = formData.get("complainantName");
    const complainantEmail = formData.get("complainantEmail");
    const complainantPhone = formData.get("complainantPhone");
    const category = formData.get("category");
    const description = formData.get("description");

    if (!complainantName || !complainantEmail || !complainantPhone || !category || !description) {
      throw new Error("All fields are required");
    }

    const dispute = await db.dispute.create({
      data: {
        userId: user.id,
        complainantName,
        complainantEmail,
        complainantPhone,
        category,
        description,
        status: "INTAKE",
        aiQuestions: [],
      },
    });

    revalidatePath("/submit-dispute");
    return { success: true, disputeId: dispute.id };
  } catch (error) {
    console.error("Failed to create dispute:", error);
    return { success: false, error: error.message };
  }
}

export async function updateDisputeStatus(disputeId, newStatus) {
  const { userId } = await auth();
  if (!userId) throw new Error("Unauthorized");

  try {
    const dispute = await db.dispute.update({
      where: { id: disputeId },
      data: { status: newStatus },
    });
    return { success: true, dispute };
  } catch (error) {
    return { success: false, error: error.message };
  }
}

export async function saveAIQuestions(disputeId, questions) {
  try {
    await db.dispute.update({
      where: { id: disputeId },
      data: { aiQuestions: questions },
    });
    return { success: true };
  } catch (error) {
    return { success: false, error: error.message };
  }
}

export async function saveAIAnalysis(disputeId, analysis) {
  try {
    await db.dispute.update({
      where: { id: disputeId },
      data: { aiAnalysis: analysis, status: "ANALYZED" },
    });
    return { success: true };
  } catch (error) {
    return { success: false, error: error.message };
  }
}

export async function saveLegalNotice(disputeId, noticeText) {
  try {
    await db.dispute.update({
      where: { id: disputeId },
      data: { legalNotice: noticeText, status: "NOTICE_GENERATED" },
    });
    return { success: true };
  } catch (error) {
    return { success: false, error: error.message };
  }
}

export async function getDispute(disputeId) {
  try {
    // We allow public viewing of a specific dispute ID for the opponent interaction
    // In a production app, you'd use a unique secure token in the URL.
    const dispute = await db.dispute.findUnique({
      where: { id: disputeId },
      include: { user: true },
    });
    return { success: true, dispute };
  } catch (error) {
    return { success: false, error: error.message };
  }
}

export async function setOpponentInfo(disputeId, opponentName, opponentEmail) {
  try {
    await db.dispute.update({
      where: { id: disputeId },
      data: { opponentName, opponentEmail },
    });
    return { success: true };
  } catch (error) {
    return { success: false, error: error.message };
  }
}

export async function markResolved(disputeId, isOpponent = false) {
  try {
    const updateData = isOpponent ? { opponentResolved: true } : { userResolved: true };
    
    let dispute = await db.dispute.update({
      where: { id: disputeId },
      data: updateData,
    });

    if (dispute.userResolved && dispute.opponentResolved) {
      dispute = await db.dispute.update({
        where: { id: disputeId },
        data: { status: "RESOLVED", escalationNotes: "Both parties agreed to resolve the dispute." },
      });
    }

    revalidatePath(`/dispute/${disputeId}`);
    return { success: true, dispute };
  } catch (error) {
    return { success: false, error: error.message };
  }
}

export async function getUserDisputes() {
  const { userId } = await auth();
  if (!userId) throw new Error("Unauthorized");

  try {
    const user = await db.user.findUnique({
      where: { clerkUserId: userId },
    });
    if (!user) throw new Error("User not found");

    const disputes = await db.dispute.findMany({
      where: { userId: user.id },
      orderBy: { createdAt: "desc" },
    });
    return { success: true, disputes };
  } catch (error) {
    return { success: false, error: error.message };
  }
}

export async function escalateDispute(disputeId) {
  try {
    // Find an intern lawyer (for MVP, find any verified lawyer with low experience, or just pick one)
    const intern = await db.user.findFirst({
      where: { role: "LAWYER", verificationStatus: "VERIFIED" },
      orderBy: { experience: 'asc' } // The intern
    });

    if (!intern) {
      // If no intern, skip straight to senior if possible
      await db.dispute.update({
        where: { id: disputeId },
        data: { status: "ESCALATED_SENIOR", escalationNotes: "Escalated directly to senior (no interns available)." }
      });
      return { success: true, escalatedTo: "SENIOR" };
    }

    await db.dispute.update({
      where: { id: disputeId },
      data: { status: "ESCALATED_INTERN", internId: intern.id, escalationNotes: "Neither party agreed. Escalated to intern for mediation." },
    });

    revalidatePath(`/dispute/${disputeId}`);
    return { success: true, escalatedTo: "INTERN" };
  } catch (error) {
    return { success: false, error: error.message };
  }
}

export async function saveSettlementAgreement(disputeId, settlementDraft) {
  try {
    await db.dispute.update({
      where: { id: disputeId },
      data: { settlementDraft }
    });
    revalidatePath(`/dispute/${disputeId}`);
    return { success: true };
  } catch (error) {
    return { success: false, error: error.message };
  }
}
