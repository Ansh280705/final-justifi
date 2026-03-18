import { db } from "@/lib/prisma";
import { auditLogger } from "./auditLogger";
import { penaltyEngine } from "./penaltyEngine";

const GRACE_PERIOD_MINUTES = 15;

export const hearingAttendanceService = {
  /**
   * Called when a user attempts to join a hearing.
   */
  recordJoin: async (hearing_id, user_id, role) => {
    const hearing = await db.hearing.findUnique({
      where: { hearing_id }
    });

    if (!hearing) throw new Error("Hearing not found");

    const updateData = {};
    if (role === "plaintiff") {
      updateData.plaintiff_status = "present";
    } else if (role === "defendant") {
      updateData.defendant_status = "present";
    }

    await db.hearing.update({
      where: { hearing_id },
      data: updateData
    });

    auditLogger.logUserJoined(hearing.case_id, user_id);
    return { success: true };
  },

  /**
   * Monitor hearing attendance and mark absent if grace period passed.
   * This should be called by the scheduler or a specific trigger.
   */
  checkAttendance: async (hearing_id) => {
    const hearing = await db.hearing.findUnique({
      where: { hearing_id }
    });

    if (!hearing) return;

    const hearingStartTime = new Date(hearing.hearing_date);
    const now = new Date();
    const diffMinutes = (now - hearingStartTime) / (1000 * 60);

    if (diffMinutes > GRACE_PERIOD_MINUTES) {
      // Check plaintiff
      if (hearing.plaintiff_status === "pending") {
        await hearingAttendanceService.markAbsent(hearing, "plaintiff");
      }
      // Check defendant
      if (hearing.defendant_status === "pending") {
        await hearingAttendanceService.markAbsent(hearing, "defendant");
      }
    }
  },

  markAbsent: async (hearing, role) => {
    const updateData = {};
    if (role === "plaintiff") {
      updateData.plaintiff_status = "absent";
    } else if (role === "defendant") {
      updateData.defendant_status = "absent";
    }

    await db.hearing.update({
      where: { hearing_id: hearing.hearing_id },
      data: updateData
    });

    // In a real app, we would need the user_id and email for the participant.
    // For this demonstration, we assume we can fetch them from the case/dispute.
    const dispute = await db.dispute.findUnique({
      where: { id: hearing.case_id }
    });

    if (dispute) {
      const user_id = role === "plaintiff" ? dispute.userId : "opponent-id"; // Mock opponent ID
      const user_email = role === "plaintiff" ? dispute.complainantEmail : dispute.opponentEmail;
      
      await penaltyEngine.processAbsence(hearing.hearing_id, user_id, user_email);
    }
  }
};
