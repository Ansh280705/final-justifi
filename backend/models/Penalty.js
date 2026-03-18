import { db } from "@/lib/prisma";

export const PenaltyModel = {
  create: async (data) => {
    return await db.penalty.create({ data });
  },
  findByUser: async (userId) => {
    return await db.penalty.findMany({ where: { user_id: userId } });
  },
  markAsPaid: async (id) => {
    return await db.penalty.update({
      where: { penalty_id: id },
      data: { status: "paid" }
    });
  }
};
