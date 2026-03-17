"use server";

import { db } from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";

export async function setAvailabilitySlots(formData) {
  const { userId } = await auth();

  if (!userId) {
    throw new Error("Unauthorized");
  }

  try {
    const lawyer = await db.user.findUnique({
      where: {
        clerkUserId: userId,
        role: "LAWYER",
      },
    });
    if (!lawyer) {
      throw new Error("Lawyer not found");
    }

    const startTime = formData.get("startTime");
    const endTime = formData.get("endTime");

    if (!startTime || !endTime) {
      throw new Error("Start time and end time are required");
    }
    if (startTime >= endTime) {
      throw new Error("Start time must be before end time");
    }

    // Simplified: Just create the new slot. Additive behavior.
    const newSlot = await db.availability.create({
      data: {
        lawyerId: lawyer.id,
        startTime: new Date(startTime),
        endTime: new Date(endTime),
        status: "AVAILABLE",
      },
    });

    revalidatePath("/lawyer");
    return { success: true, slot: newSlot };
  } catch (error) {
    console.error("Failed to set availability slots:", error);
    return { success: false, error: error.message };
  }
}
export async function getLawyerAvailability() {
  const { userId } = await auth();

  if (!userId) {
    throw new Error("Unauthorized");
  }

  try {
    const lawyer = await db.user.findUnique({
      where: {
        clerkUserId: userId,
        role: "LAWYER",
      },
    });

    if (!lawyer) {
      throw new Error("Lawyer not found");
    }

    const availabilitySlots = await db.availability.findMany({
      where: {
        lawyerId: lawyer.id,
      },
      orderBy: {
        startTime: "asc",
      },
    });

    return { slots: availabilitySlots };
  } catch (error) {
    throw new Error("Failed to fetch availability slots " + error.message);
  }
}

export async function deleteAvailability(slotId) {
  const { userId } = await auth();
  if (!userId) throw new Error("Unauthorized");

  try {
    const lawyer = await db.user.findUnique({
      where: { clerkUserId: userId, role: "LAWYER" },
    });
    if (!lawyer) throw new Error("Lawyer not found");

    // Check if slot belongs to lawyer and has no cases
    const slot = await db.availability.findUnique({
      where: { id: slotId },
    });

    if (!slot || slot.lawyerId !== lawyer.id) {
      throw new Error("Slot not found or not authorized");
    }

    if (slot.status !== "AVAILABLE") {
      throw new Error("Cannot delete a booked or blocked slot");
    }

    await db.availability.delete({
      where: { id: slotId }
    });

    revalidatePath("/lawyer");
    return { success: true };
  } catch (error) {
    console.error("Failed to delete availability:", error);
    return { success: false, error: error.message };
  }
}

export async function getLawyerCases() {
  const { userId } = await auth();

  if (!userId) {
    throw new Error("Unauthorized");
  }

  try {
    const lawyer = await db.user.findUnique({
      where: {
        clerkUserId: userId,
        role: "LAWYER",
      },
    });

    if (!lawyer) {
      throw new Error("Lawyer not found");
    }

    const cases = await db.legalCase.findMany({
      where: {
        lawyerId: lawyer.id,
        status: {
          in: ["SCHEDULED"],
        },
      },
      include: {
        client: true,
      },
      orderBy: {
        startTime: "desc",
      },
    });

    return { cases };
  } catch (error) {
    throw new Error("Failed to fetch cases " + error.message);
  }
}

export async function getRecentLawyerCases() {
  const { userId } = await auth();

  if (!userId) {
    throw new Error("Unauthorized");
  }

  try {
    const lawyer = await db.user.findUnique({
      where: {
        clerkUserId: userId,
        role: "LAWYER",
      },
    });

    if (!lawyer) {
      throw new Error("Lawyer not found");
    }

    const cases = await db.legalCase.findMany({
      where: {
        lawyerId: lawyer.id,
        status: {
          in: ["COMPLETED", "CANCELLED"],
        },
      },
      include: {
        client: true,
      },
      orderBy: {
        updatedAt: "desc",
      },
      take: 5,
    });

    return { cases };
  } catch (error) {
    throw new Error("Failed to fetch recent cases " + error.message);
  }
}

export async function cancelCase(formData) {
  const { userId } = await auth();

  if (!userId) {
    throw new Error("Unauthorized");
  }

  try {
    const user = await db.user.findUnique({
      where: {
        clerkUserId: userId,
      },
    });

    if (!user) {
      throw new Error("User not found");
    }

    const caseId = formData.get("caseId");

    if (!caseId) {
      throw new Error("Case ID is required");
    }

    // Find the case with both client and lawyer details
    const legalCase = await db.legalCase.findUnique({
      where: {
        id: caseId,
      },
      include: {
        client: true,
        lawyer: true,
      },
    });

    if (!legalCase) {
      throw new Error("Case not found");
    }

    // Verify the user is either the lawyer or the client for this case
    if (legalCase.lawyerId !== user.id && legalCase.clientId !== user.id) {
      throw new Error("You are not authorized to cancel this case");
    }

    // Perform cancellation in a transaction
    await db.$transaction(async (tx) => {
      // Update the case status to CANCELLED
      await tx.legalCase.update({
        where: {
          id: caseId,
        },
        data: {
          status: "CANCELLED",
        },
      });

      // Always refund credits to client and deduct from lawyer
      // Create credit transaction for client (refund)
      await tx.creditTransaction.create({
        data: {
          userId: legalCase.clientId,
          amount: 1,
          type: "CASE_DEDUCTION",
        },
      });

      // Create credit transaction for lawyer (deduction)
      await tx.creditTransaction.create({
        data: {
          userId: legalCase.lawyerId,
          amount: -1,
          type: "CASE_DEDUCTION",
        },
      });

      // Update client's credit balance (increment)
      await tx.user.update({
        where: {
          id: legalCase.clientId,
        },
        data: {
          credits: {
            increment: 1,
          },
        },
      });

      // Update lawyer's credit balance (decrement)
      await tx.user.update({
        where: {
          id: legalCase.lawyerId,
          credits: { gte: 1 }
        },
        data: {
          credits: {
            decrement: 1,
          },
        },
      });
    });

    // Determine which path to revalidate based on user role
    if (user.role === "LAWYER") {
      revalidatePath("/lawyer");
    } else if (user.role === "CLIENT") {
      revalidatePath("/cases");
    }

    return { success: true };
  } catch (error) {
    console.error("Failed to cancel case:", error);
    return { success: false, error: error.message };
  }
}

/**
 * Add notes to an appointment
 */
export async function addCaseNotes(formData) {
  const { userId } = await auth();

  if (!userId) {
    throw new Error("Unauthorized");
  }

  try {
    const lawyer = await db.user.findUnique({
      where: {
        clerkUserId: userId,
        role: "LAWYER",
      },
    });

    if (!lawyer) {
      throw new Error("Lawyer not found");
    }

    const caseId = formData.get("caseId");
    const notes = formData.get("notes");

    if (!caseId || !notes) {
      throw new Error("Case ID and notes are required");
    }

    // Verify the case belongs to this lawyer
    const legalCase = await db.legalCase.findUnique({
      where: {
        id: caseId,
        lawyerId: lawyer.id,
      },
    });

    if (!legalCase) {
      throw new Error("Case not found");
    }

    // Update the case notes
    const updatedCase = await db.legalCase.update({
      where: {
        id: caseId,
      },
      data: {
        notes,
      },
    });

    revalidatePath("/lawyer");
    return { success: true, case: updatedCase };
  } catch (error) {
    console.error("Failed to add case notes:", error);
    return { success: false, error: error.message };
  }
}

/**
 * Mark an appointment as completed (only by lawyer after end time)
 */
export async function markCaseCompleted(formData) {
  const { userId } = await auth();

  if (!userId) {
    throw new Error("Unauthorized");
  }

  try {
    const lawyer = await db.user.findUnique({
      where: {
        clerkUserId: userId,
        role: "LAWYER",
      },
    });

    if (!lawyer) {
      throw new Error("Lawyer not found");
    }

    const caseId = formData.get("caseId");

    if (!caseId) {
      throw new Error("Case ID is required");
    }

    // Find the case
    const legalCase = await db.legalCase.findUnique({
      where: {
        id: caseId,
        lawyerId: lawyer.id, // Ensure case belongs to this lawyer
      },
      include: {
        client: true,
      },
    });

    if (!legalCase) {
      throw new Error("Case not found or not authorized");
    }

    // Check if case is currently scheduled
    if (legalCase.status !== "SCHEDULED") {
      throw new Error("Only scheduled cases can be marked as completed");
    }

    // Check if current time is after the case end time
    const now = new Date();
    const caseEndTime = new Date(legalCase.endTime);

    if (now < caseEndTime) {
      throw new Error(
        "Cannot mark case as completed before the scheduled end time"
      );
    }

    // Update the case status to COMPLETED
    const updatedCase = await db.legalCase.update({
      where: {
        id: caseId,
      },
      data: {
        status: "COMPLETED",
      },
    });

    revalidatePath("/lawyer");
    return { success: true, case: updatedCase };
  } catch (error) {
    console.error("Failed to mark case as completed:", error);
    return { success: false, error: error.message };
  }
}
