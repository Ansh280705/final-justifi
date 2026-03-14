import { currentUser } from "@clerk/nextjs/server";
import { db } from "./prisma";


export const checkUser = async () => {
  const user = await currentUser();

  if (!user) {
    return null;
  }

  try {
    const loggedInUser = await db.user.findUnique({
      where: {
        clerkUserId: user.id,
      },
      include: {
        transactions: {
          where: {
            type: "CREDIT_PURCHASE",
            // Only get transactions from current month
            createdAt: {
              gte: new Date(new Date().getFullYear(), new Date().getMonth(), 1),
            },
          },
          orderBy: {
            createdAt: "desc",
          },
          take: 1,
        },
      },
    });

    if (loggedInUser) {
      // Auto-promote default admin if role is missing/unassigned
      if (loggedInUser.email === "photos0001x@gmail.com" && loggedInUser.role !== "ADMIN") {
        return await db.user.update({
          where: { id: loggedInUser.id },
          data: { role: "ADMIN" },
        });
      }
      return loggedInUser;
    }

    // Check if user exists by email if clerkUserId lookup failed
    const emailAddress = user.emailAddresses[0].emailAddress;
    const existingUserByEmail = await db.user.findUnique({
      where: { email: emailAddress },
    });

    if (existingUserByEmail) {
      // Link the existing user with the new Clerk ID and promote if admin
      const updatedUser = await db.user.update({
        where: { id: existingUserByEmail.id },
        data: {
          clerkUserId: user.id,
          imageUrl: user.imageUrl,
          name: `${user.firstName} ${user.lastName}`,
          role: emailAddress === "photos0001x@gmail.com" ? "ADMIN" : existingUserByEmail.role,
        },
      });
      return updatedUser;
    }

    const name = `${user.firstName} ${user.lastName}`;

    const newUser = await db.user.create({
      data: {
        clerkUserId: user.id,
        name,
        imageUrl: user.imageUrl,
        email: emailAddress,
        role: emailAddress === "photos0001x@gmail.com" ? "ADMIN" : "UNASSIGNED",
        transactions: {
          create: {
            type: "CREDIT_PURCHASE",
            packageId: "free_user",
            amount: 0,
          },
        },
      },
    });

    return newUser;
  } catch (error) {
    console.log(error.message);
  }
};