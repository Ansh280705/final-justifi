import { db } from "@/lib/prisma";
import { hearingAttendanceService } from "../services/hearingAttendanceService";

export const hearingRoutes = {
  create: async (data) => {
    const { case_id, hearing_date, hearing_link } = data;
    return await db.hearing.create({
      data: {
        case_id,
        hearing_date: new Date(hearing_date),
        hearing_link,
      }
    });
  },

  join: async (data) => {
    const { hearing_id, user_id, role } = data;
    return await hearingAttendanceService.recordJoin(hearing_id, user_id, role);
  },

  upcoming: async (userId) => {
    // Logic to find hearings for cases associated with the user
    const userCases = await db.dispute.findMany({
      where: { userId },
      select: { id: true }
    });
    const caseIds = userCases.map(c => c.id);

    return await db.hearing.findMany({
      where: {
        case_id: { in: caseIds },
        hearing_date: { gt: new Date() }
      },
      orderBy: { hearing_date: "asc" }
    });
  },

  violations: async () => {
    const violations = await db.hearing.findMany({
      where: {
        OR: [
          { plaintiff_status: "absent" },
          { defendant_status: "absent" },
          { absences: { gt: 0 } }
        ]
      },
      include: {
        // In a real app, join with Dispute/User
      }
    });
    
    const penalties = await db.penalty.findMany({
      orderBy: { timestamp: "desc" }
    });

    return {
      cases_with_missed_hearings: violations,
      penalties_generated: penalties,
      // users_with_repeated_absences: ...
    };
  }
};
