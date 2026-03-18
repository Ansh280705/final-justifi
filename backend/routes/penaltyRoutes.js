import { db } from "@/lib/prisma";

export const penaltyRoutes = {
  pay: async (penalty_id) => {
    return await db.penalty.update({
      where: { penalty_id },
      data: { status: "paid" }
    });
  }
};
