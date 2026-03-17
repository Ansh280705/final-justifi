"use server";

import { db } from "@/lib/prisma";

/**
 * Get lawyers by practice area
 */
export async function getLawyersByPracticeArea(practiceArea) {
  try {
    const lawyers = await db.user.findMany({
      where: {
        role: "LAWYER",
        verificationStatus: "VERIFIED",
        practiceArea: practiceArea.split("%20").join(" "),
      },
      orderBy: {
        name: "asc",
      },
    });

    return { lawyers };
  } catch (error) {
    console.error("Failed to fetch lawyers by practice area:", error);
    return { error: "Failed to fetch lawyers" };
  }
}