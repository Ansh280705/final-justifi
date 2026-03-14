// "use server";

// import { db } from "@/lib/prisma";
// import { auth } from "@clerk/nextjs/server";
// import { revalidatePath } from "next/cache";

// /**
//  * Sets the user's role and related information
//  */
// export async function setUserRole(formData) {
//   const { userId } = await auth();

//   if (!userId) {
//     throw new Error("Unauthorized");
//   }

//   // Find user in our database
//   const user = await db.user.findUnique({
//     where: { clerkUserId: userId },
//   });

//   if (!user) throw new Error("User not found in database");

//   const role = formData.get("role");

//   if (!role || !["CLIENT", "LAWYER"].includes(role)) {
//     throw new Error("Invalid role selection");
//   }

//   try {
//     // For client role - simple update
//     if (role === "CLIENT") {
//       await db.user.update({
//         where: {
//           clerkUserId: userId,
//         },
//         data: {
//           role: "CLIENT",
//         },
//       });

//       revalidatePath("/");
//       return { success: true, redirect: "/lawyers" };
//     }

//     // For lawyer role - need additional information
//     if (role === "LAWYER") {
//       const practiceArea = formData.get("practiceArea");
//       const phone = formData.get("phone");
//       const qualificationsRaw = formData.get("qualifications");
//       const qualifications = qualificationsRaw
//   ? JSON.parse(qualificationsRaw )
//   : [];

//       const experience = parseInt(formData.get("experience"), 10);
//       const credentialUrl = formData.get("credentialUrl");
//       const description = formData.get("description");

//       // Validate inputs
//       if (!practiceArea ||!phone ||!qualifications || !experience || !credentialUrl || !description) {
//         throw new Error("All fields are required");
//       }

//       await db.user.update({
//         where: {
//           clerkUserId: userId,
//         },
//         data: {
//           role: "LAWYER",
//           practiceArea,
//           phone,
//          qualifications,

//           experience,
//           credentialUrl,
//           description,
//           verificationStatus: "PENDING",
//         },
//       });

//       revalidatePath("/");
//       return { success: true, redirect: "/lawyer/verification" };
//     }
//   } catch (error) {
//     console.error("Failed to set user role:", error);
//     throw new Error(`Failed to update user profile: ${error.message}`);
//   }
// }

// /**
//  * Gets the current user's complete profile information
//  */
// export async function getCurrentUser() {
//   const { userId } = await auth();

//   if (!userId) {
//     return null;
//   }

//   try {
//     const user = await db.user.findUnique({
//       where: {
//         clerkUserId: userId,
//       },
//     });

//     return user;
//   } catch (error) {
//     console.error("Failed to get user information:", error);
//     return null;
//   }
// }

"use server";

import { db } from "@/lib/prisma";
import { auth, currentUser } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";
import { lawyerFormSchema } from "@/lib/schema";

export async function setUserRole(formData) {
  // Clerk's auth can be awaited to access user session in server actions
  const { userId } = await auth();

  if (!userId) {
    // In production this often happens immediately after a Clerk redirect
    // when the session cookie hasn't been propagated yet. Return a
    // structured response so the client can redirect to sign-in instead
    // of throwing an error that surfaces only as a digest in prod.
    console.warn(
      "Onboarding: unauthenticated setUserRole call — prompting sign-in"
    );
    return { success: false, redirect: "/sign-in?redirectTo=/onboarding" };
  }

  try {
    const role = formData.get("role")?.toString();
    if (!role || !["CLIENT", "LAWYER"].includes(role)) {
      throw new Error("Invalid role");
    }

    // 🔥 UPSERT USER (MAIN FIX)
    // Ensure we store the user's email (required by Prisma schema)
    const clerk = await currentUser();
    const email = clerk?.emailAddresses?.[0]?.emailAddress;

    if (!email) {
      console.warn(
        "Onboarding: Clerk did not return an email for user",
        userId
      );
      throw new Error("Missing email from authentication provider");
    }

    const user = await db.user.upsert({
      where: { clerkUserId: userId },
      update: {},
      create: {
        clerkUserId: userId,
        role: "CLIENT", // temporary default
        email,
      },
    });

    // ---------------- CLIENT ----------------
    if (role === "CLIENT") {
      await db.user.update({
        where: { clerkUserId: userId },
        data: { role: "CLIENT" },
      });

      revalidatePath("/");
      return { success: true, redirect: "/lawyers" };
    }

    // ---------------- LAWYER ----------------
    const rawLawyerData = {
      practiceArea: formData.get("practiceArea")?.toString(),
      phone: formData.get("phone")?.toString(),
      qualifications: formData.get("qualifications")?.toString(), // Will parse after validation or use string and parse
      experience: Number(formData.get("experience")),
      credentialUrl: formData.get("credentialUrl")?.toString(),
      description: formData.get("description")?.toString(),
      city: formData.get("city")?.toString(),
    };

    // Need to parse qualifications string to check in Zod if needed, 
    // but the schema expects a string for now based on what I saw earlier.
    // Let's check schema.js again. Ah, schema.js says qualifications is z.string().
    // So we are good.

    const validated = lawyerFormSchema.safeParse(rawLawyerData);

    if (!validated.success) {
      throw new Error(validated.error.errors[0].message);
    }

    const { practiceArea, phone, qualifications: qualificationsString, credentialUrl, description, experience, city } = validated.data;
    const qualifications = JSON.parse(qualificationsString || "[]");

    await db.user.update({
      where: { clerkUserId: userId },
      data: {
        role: "LAWYER",
        practiceArea,
        phone,
        qualifications,
        credentialUrl,
        description,
        experience,
        city,
        verificationStatus: "PENDING",
      },
    });

    revalidatePath("/");
    return { success: true, redirect: "/lawyer/verification" };
  } catch (error) {
    console.error("Onboarding Error:", error);
    return { success: false, error: error.message };
  }
}
export async function getCurrentUser() {
  const { userId } = await auth();

  if (!userId) {
    return null;
  }

  try {
    const user = await db.user.findUnique({
      where: {
        clerkUserId: userId,
      },
    });

    return user;
  } catch (error) {
    console.error("Failed to get user information:", error);
    return null;
  }
}
