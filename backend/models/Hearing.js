import { db } from "@/lib/prisma";

export const HearingModel = {
  create: async (data) => {
    return await db.hearing.create({ data });
  },
  findById: async (id) => {
    return await db.hearing.findUnique({ where: { hearing_id: id } });
  },
  updateStatus: async (id, statusData) => {
    return await db.hearing.update({
      where: { hearing_id: id },
      data: statusData
    });
  }
};
