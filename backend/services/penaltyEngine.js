import { db } from "@/lib/prisma";
import { auditLogger } from "./auditLogger";
import { emailNotificationService } from "./emailNotificationService";

const PENALTY_CONFIG = {
  warning_after: 1,
  penalty_after: 2,
  escalation_after: 3,
  penalty_amount: 1000
};

export const penaltyEngine = {
  processAbsence: async (hearing_id, user_id, user_email) => {
    const hearing = await db.hearing.findUnique({
      where: { hearing_id }
    });

    if (!hearing) return;

    const newAbsences = hearing.absences + 1;

    // Update absences in hearing
    await db.hearing.update({
      where: { hearing_id },
      data: { absences: newAbsences }
    });

    auditLogger.logUserAbsent(hearing.case_id, user_id);

    if (newAbsences === PENALTY_CONFIG.warning_after) {
      // First absence → warning only
      await emailNotificationService.sendWarning(user_email, hearing.case_id);
    } else if (newAbsences === PENALTY_CONFIG.penalty_after) {
      // Second absence → monetary penalty
      const penalty = await db.penalty.create({
        data: {
          case_id: hearing.case_id,
          user_id: user_id,
          amount: PENALTY_CONFIG.penalty_amount,
          reason: "Missed Hearing",
          status: "pending"
        }
      });
      auditLogger.logPenaltyGenerated(hearing.case_id, user_id, PENALTY_CONFIG.penalty_amount);
      await emailNotificationService.sendPenalty(user_email, hearing.case_id, PENALTY_CONFIG.penalty_amount);
    } else if (newAbsences >= PENALTY_CONFIG.escalation_after) {
      // Third absence → escalation
      auditLogger.log("Case flagged for admin escalation", { case_id: hearing.case_id, user_id });
      // In a real app, you might update a flag on the case/dispute
      // await db.dispute.update(...)
    }
  }
};
