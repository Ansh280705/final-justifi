"use server";

import { db } from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";

import { disputeFormSchema } from "@/lib/schema";

export async function createDispute(formData) {
  const { userId } = await auth();
  if (!userId) throw new Error("Unauthorized");

  const rawData = {
    complainantName: formData.get("complainantName"),
    complainantEmail: formData.get("complainantEmail"),
    complainantPhone: formData.get("complainantPhone"),
    category: formData.get("category"),
    description: formData.get("description"),
  };

  const validated = disputeFormSchema.safeParse(rawData);

  if (!validated.success) {
    throw new Error(validated.error.errors[0].message);
  }

  const { complainantName, complainantEmail, complainantPhone, category, description } = validated.data;

  try {
    const user = await db.user.findUnique({
      where: { clerkUserId: userId },
    });
    if (!user) throw new Error("User not found");

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
      include: { 
        user: true,
        intern: true,
        seniorLawyer: true,
      },
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

export async function triggerOpponentPenalty(disputeId) {
  const { userId } = await auth();
  if (!userId) throw new Error("Unauthorized");

  try {
    const dispute = await db.dispute.findUnique({
      where: { id: disputeId },
    });

    if (!dispute) throw new Error("Dispute not found");

    const newPenaltyCount = (dispute.opponentPenaltyCount || 0) + 1;
    let status = dispute.status;
    let escalationNotes = dispute.escalationNotes;

    if (newPenaltyCount >= 3) {
      status = "ESCALATED_SENIOR";
      escalationNotes = (escalationNotes ? escalationNotes + "\n" : "") + "Automatically escalated due to opponent non-responsiveness (3 penalties).";
    }

    const updatedDispute = await db.dispute.update({
      where: { id: disputeId },
      data: {
        opponentPenaltyCount: newPenaltyCount,
        lastPenaltyAt: new Date(),
        status,
        escalationNotes,
      },
    });

    // Trigger email notification
    await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/send-email`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        disputeId,
        type: "OPPONENT_PENALTY",
        penaltyCount: newPenaltyCount,
      }),
    });

    revalidatePath(`/dispute/${disputeId}`);
    return { success: true, dispute: updatedDispute };
  } catch (error) {
    console.error("Failed to trigger penalty:", error);
    return { success: false, error: error.message };
  }
}

export async function scheduleMediation(disputeId, date, time) {
  const { userId } = await auth();
  if (!userId) throw new Error("Unauthorized");

  try {
    const updatedDispute = await db.dispute.update({
      where: { id: disputeId },
      data: {
        preferredDate: new Date(date),
        preferredTime: time,
        status: "MEDIATION",
      },
    });

    // Trigger email notification with date and time
    await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/send-email`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        disputeId,
        type: "MEDIATION_INVITE",
        preferredDate: date,
        preferredTime: time,
      }),
    });

    revalidatePath(`/dispute/${disputeId}`);
    return { success: true, dispute: updatedDispute };
  } catch (error) {
    console.error("Failed to schedule mediation:", error);
    return { success: false, error: error.message };
  }
}

export async function escalateToSpecialist(disputeId) {
  console.log("escalateToSpecialist action start for disputeId:", disputeId);
  const { userId } = await auth();
  if (!userId) throw new Error("Unauthorized");

  try {
    const dispute = await db.dispute.findUnique({
      where: { id: disputeId },
    });

    if (!dispute) throw new Error("Dispute not found");
    console.log("Escalating dispute with category:", dispute.category);

    const category = dispute.category.toLowerCase();
    
    let specialist = await db.user.findFirst({
      where: {
        role: "LAWYER",
        verificationStatus: "VERIFIED",
        OR: [
          { practiceArea: { contains: category, mode: 'insensitive' } },
          { description: { contains: category, mode: 'insensitive' } }
        ]
      },
      orderBy: { experience: 'desc' }
    });

    if (!specialist) {
      console.log("No exact match specialist found, falling back to senior lawyer");
      specialist = await db.user.findFirst({
        where: { role: "LAWYER", verificationStatus: "VERIFIED" },
        orderBy: { experience: 'desc' }
      });
    }

    if (!specialist) {
      console.log("No available specialist found at all");
      throw new Error("No available specialist lawyers found.");
    }
    console.log("Found specialist:", specialist.name, "(ID:", specialist.id, ")");

    const updatedDispute = await db.dispute.update({
      where: { id: disputeId },
      data: {
        status: "ESCALATED_SENIOR",
        seniorLawyerId: specialist.id,
        escalationNotes: (dispute.escalationNotes ? dispute.escalationNotes + "\n" : "") + `Escalated to specialist lawyer ${specialist.name} (Expertise: ${specialist.practiceArea || 'General expertise'}).`
      },
    });
    console.log("Dispute successfully updated with specialist and new status:", updatedDispute.status);

    revalidatePath(`/dispute/${disputeId}`);
    return { success: true, dispute: updatedDispute, specialistName: specialist.name };
  } catch (error) {
    console.error("Backend error in escalateToSpecialist:", error);
    return { success: false, error: error.message };
  }
}
