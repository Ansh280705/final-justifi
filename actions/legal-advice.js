"use server";

import { db } from "@/lib/prisma";
import { currentUser } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";

export async function createLegalAdvice({
  caseId,
  caseSummary,
  legalPoints,
  instructions,
  caseHistory,
  followUpDate,
}) {
  const user = await currentUser();
  if (!user) throw new Error("Unauthorized");

  // Map Clerk → Prisma user
  const prismaUser = await db.user.findUnique({
    where: { clerkUserId: user.id },
  });

  if (!prismaUser) throw new Error("User not found");

  const legalCase = await db.legalCase.findUnique({
    where: { id: caseId },
  });

  if (!legalCase || legalCase.lawyerId !== prismaUser.id) {
    throw new Error("Not allowed");
  }

  const exists = await db.legalAdvice.findUnique({
    where: { caseId },
  });

  if (exists) throw new Error("Legal advice already submitted");

  const legalAdvice = await db.legalAdvice.create({
    data: {
      caseId,
      lawyerId: legalCase.lawyerId,
      clientId: legalCase.clientId,
      caseSummary,
      legalPoints,
      instructions,
      caseHistory,
      followUpDate: followUpDate ? new Date(followUpDate) : null,
    },
    include: {
      case: {
        include: {
          lawyer: {
            select: {
              id: true,
              name: true,
              practiceArea: true,
              qualifications: true,
            },
          },
          client: {
            select: {
              id: true,
              name: true,
            },
          },
        },
      },
    },
  });

  // ✅ Ensure lawyer practiceArea and qualifications have fallback values
  if (legalAdvice.case.lawyer) {
    legalAdvice.case.lawyer.practiceArea =
      legalAdvice.case.lawyer.practiceArea || "N/A";

    legalAdvice.case.lawyer.qualifications =
      legalAdvice.case.lawyer.qualifications?.length
        ? legalAdvice.case.lawyer.qualifications
        : ["N/A"];
  }

  // 🔁 refresh client legal advices page
  revalidatePath("/legal-advice");

  return legalAdvice;
}

export async function getClientLegalAdvices() {
  const user = await currentUser();
  if (!user) throw new Error("Unauthorized");

  const prismaUser = await db.user.findUnique({
    where: { clerkUserId: user.id },
  });

  if (!prismaUser) throw new Error("User not found");

  try {
    const legalAdvices = await db.legalAdvice.findMany({
      where: {
        clientId: prismaUser.id,
      },
      include: {
        case: {
          include: {
            lawyer: {
              select: {
                id: true,
                name: true,
                practiceArea: true,
                qualifications: true,
              },
            },
            client: {
              select: {
                id: true,
                name: true,
              },
            },
          },
        },
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    return { legalAdvices };
  } catch (error) {
    console.error("Failed to fetch legal advices:", error);
    return { error: "Failed to fetch legal advices" };
  }
}
