import { db } from "@/lib/prisma";

/**
 * Service to log system actions to the console and database (if a log model existed).
 * Per requirements, we will log to console and potentially a future audit table.
 */
export const auditLogger = {
  log: async (action, details = {}) => {
    const timestamp = new Date().toISOString();
    const logEntry = `[AUDIT LOG] ${timestamp} - ${action}: ${JSON.stringify(details)}`;
    console.log(logEntry);
    
    // In a production app, we would save this to an AuditLog table.
    // Since we are not allowed to modify existing schema beyond what was planned,
    // we stick to console logging as requested in the example logs.
  },

  logHearingReminder: (case_id, email) => {
    auditLogger.log("Hearing reminder email sent", { case_id, email });
  },

  logUserJoined: (case_id, user_id) => {
    auditLogger.log("User joined hearing", { case_id, user_id });
  },

  logUserAbsent: (case_id, user_id) => {
    auditLogger.log("User marked absent", { case_id, user_id });
  },

  logPenaltyGenerated: (case_id, user_id, amount) => {
    auditLogger.log("Penalty generated", { case_id, user_id, amount });
  },

  logPenaltyEmailSent: (user_id, amount) => {
    auditLogger.log("Penalty notification email sent", { user_id, amount });
  }
};
