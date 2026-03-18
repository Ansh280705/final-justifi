"use server"
import { db } from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";

/**
 * Get all cases for the authenticated client
 */
export async function getClientCases() {
  try {
    const { userId } = await auth();

    if (!userId) {
      throw new Error("Unauthorized");
    }

    const user = await db.user.findUnique({
      where: {
        clerkUserId: userId,
        role: "CLIENT",
      },
      select: {
        id: true,
      },
    });

    if (!user) {
      throw new Error("Client not found");
    }

    const cases = await db.legalCase.findMany({
      where: {
        clientId: user.id,
      },
      include: {
        lawyer: {
          select: {
            id: true,
            name: true,
            practiceArea: true,
            imageUrl: true,
          },
        },
      },
      orderBy: {
        startTime: "asc",
      },
    });

    return { cases };
  } catch (error) {
    console.error("Failed to get client cases:", error);
    return { error: "Failed to fetch cases" };
  }
}