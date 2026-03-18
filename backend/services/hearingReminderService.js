import { db } from "@/lib/prisma";
import { emailNotificationService } from "./emailNotificationService";
import { auditLogger } from "./auditLogger";

export const hearingReminderService = {
  /**
   * Scans upcoming hearings and sends reminders based on schedule:
   * 7 days, 3 days, 1 day, 1 hour.
   */
  scanAndSendReminders: async () => {
    const now = new Date();
    const upcomingHearings = await db.hearing.findMany({
      where: {
        hearing_date: { gt: now },
        // Only hearings that haven't been fully reminded (could use a bitmask or multiple fields, 
        // but prompt says use reminders_sent counter).
      }
    });

    for (const hearing of upcomingHearings) {
      const diffMs = hearing.hearing_date - now;
      const hoursRemaining = diffMs / (1000 * 60 * 60);
      const daysRemaining = hoursRemaining / 24;

      let shouldRemind = false;
      
      // Basic logic to decide if we should send a reminder based on counter
      // This is a simplified version of a more robust state machine.
      if (daysRemaining <= 7 && hearing.reminders_sent < 1) {
        shouldRemind = true;
      } else if (daysRemaining <= 3 && hearing.reminders_sent < 2) {
        shouldRemind = true;
      } else if (daysRemaining <= 1 && hearing.reminders_sent < 3) {
        shouldRemind = true;
      } else if (hoursRemaining <= 1 && hearing.reminders_sent < 4) {
        shouldRemind = true;
      }

      if (shouldRemind) {
        const dispute = await db.dispute.findUnique({ where: { id: hearing.case_id } });
        if (dispute) {
          // Send to both parties
          if (dispute.complainantEmail) {
            await emailNotificationService.sendHearingReminder(
              dispute.complainantEmail, 
              hearing.case_id, 
              hearing.hearing_date, 
              hearing.hearing_link
            );
          }
          if (dispute.opponentEmail) {
            await emailNotificationService.sendHearingReminder(
              dispute.opponentEmail, 
              hearing.case_id, 
              hearing.hearing_date, 
              hearing.hearing_link
            );
          }

          await db.hearing.update({
            where: { hearing_id: hearing.hearing_id },
            data: { reminders_sent: hearing.reminders_sent + 1 }
          });
        }
      }
    }
  }
};
