
"use server"
import { VerificationStatus } from "@/lib/generated/prisma";
import { db } from "@/lib/prisma";
import { deductCreditsForCase } from "./credit";
import { revalidatePath } from "next/cache";
import { Vonage } from "@vonage/server-sdk";
import { addDays, addMinutes, isBefore, endOfDay, format } from "date-fns";
import { auth } from "@clerk/nextjs/server";

// Initialize Vonage Video API client
// const vonage = new Vonage({
//   applicationId: process.env.VONAGE_APPLICATION_ID,      // Server-only
//   privateKey: process.env.VONAGE_PRIVATE_KEY.replace(/\\n/g, "\n"),            // Server-only
// });

if (!process.env.VONAGE_PRIVATE_KEY) {
  throw new Error("VONAGE_PRIVATE_KEY is missing in environment variables");
}

// const vonage = new Vonage({
//   applicationId: process.env.VONAGE_APPLICATION_ID,
//   privateKey: process.env.VONAGE_PRIVATE_KEY.replace(/\\n/g, "\n"),
// });
const VONAGE_PRIVATE_KEY = process.env.VONAGE_PRIVATE_KEY
  .replace(/\\n/g, "\n")
  .trim();

const vonage = new Vonage({
  applicationId: process.env.VONAGE_APPLICATION_ID,
  privateKey: VONAGE_PRIVATE_KEY,
});


export async function getLawyerById(lawyerId) {
  try {
    const lawyer = await db.user.findUnique({
      where: {
        id: lawyerId,
        role: "LAWYER",
        verificationStatus: "VERIFIED",
      },
    });

    if (!lawyer) {
      throw new Error("Lawyer not found");
    }

    return { lawyer };
  } catch (error) {
    console.error("Failed to fetch lawyer:", error);
    throw new Error("Failed to fetch lawyer details");
  }
}

export async function getAvailableTimeSlots(lawyerId) {

  const Slot_duration = 2;
  try {
    // Validate lawyer existence and verification
    const lawyer = await db.user.findUnique({
      where: {
        id: lawyerId,
        role: "LAWYER",
        verificationStatus: "VERIFIED",
      },
    });

    if (!lawyer) {
      throw new Error("Lawyer not found or not verified");
    }

    // Fetch a single availability record
    const availability = await db.availability.findFirst({
      where: {
        lawyerId: lawyer.id,
        status: "AVAILABLE",
      },
    });

    // if (!availability) {
    //   throw new Error("No availability set by lawyer");
    // }
    if (!availability) {
      return {
        days: [],
        message: "Lawyer has not set availability yet",
      };
    }
    // Get the next 4 days
    const now = new Date();
    const days = [now, addDays(now, 1), addDays(now, 2), addDays(now, 3)];

    // Fetch existing cases for the lawyer over the next 4 days
    const lastDay = endOfDay(days[3]);
    const existingCases = await db.legalCase.findMany({
      where: {
        lawyerId: lawyer.id,
        status: "SCHEDULED",
        startTime: {
          lte: lastDay,
        },
      },
    });

    const availableSlotsByDay = {};

    // For each of the next 4 days, generate available slots
    for (const day of days) {
      const dayString = format(day, "yyyy-MM-dd");
      availableSlotsByDay[dayString] = [];

      // Create a copy of the availability start/end times for this day
      const availabilityStart = new Date(availability.startTime);
      const availabilityEnd = new Date(availability.endTime);

      // Set the day to the current day we're processing
      availabilityStart.setFullYear(
        day.getFullYear(),
        day.getMonth(),
        day.getDate()
      );
      availabilityEnd.setFullYear(
        day.getFullYear(),
        day.getMonth(),
        day.getDate()
      );

      let current = new Date(availabilityStart);
      const end = new Date(availabilityEnd);

      while (
        isBefore(addMinutes(current, Slot_duration), end) ||
        +addMinutes(current, Slot_duration) === +end
      ) {
        const next = addMinutes(current, Slot_duration);

        // Skip past slots
        if (isBefore(current, now)) {
          current = next;
          continue;
        }

        const overlaps = existingCases.some((legalCase) => {
          const aStart = new Date(legalCase.startTime);
          const aEnd = new Date(legalCase.endTime);

          return (
            (current >= aStart && current < aEnd) ||
            (next > aStart && next <= aEnd) ||
            (current <= aStart && next >= aEnd)
          );
        });

        if (!overlaps) {
          availableSlotsByDay[dayString].push({
            startTime: current.toISOString(),
            endTime: next.toISOString(),
            formatted: `${format(current, "h:mm a")} - ${format(
              next,
              "h:mm a"
            )}`,
            day: format(current, "EEEE, MMMM d"),
          });
        }

        current = next;
      }
    }

    // Convert to array of slots grouped by day for easier consumption by the UI
    const result = Object.entries(availableSlotsByDay).map(([date, slots]) => ({
      date,
      displayDate:
        slots.length > 0
          ? slots[0].day
          : format(new Date(date), "EEEE, MMMM d"),
      slots,
    }));

    return { days: result };
  } catch (error) {
    console.error("Failed to fetch available slots:", error);
    throw new Error("Failed to fetch available time slots: " + error.message);
  }
}

export async function bookCase(formData) {
  const { userId } = await auth();
  if (!userId) throw new Error("Unauthorized");

  try {
    const client = await db.user.findUnique({
      where: { clerkUserId: userId, role: "CLIENT" },
    });
    if (!client) throw new Error("Client not found");

    const lawyerId = formData.get("lawyerId");
    const startTime = new Date(formData.get("startTime"));
    const endTime = new Date(formData.get("endTime"));
    const clientDescription = formData.get("description") || null;

    // New client info fields
    const clientName = formData.get("clientName");
    const clientPhone = formData.get("clientPhone");
    const clientAge = parseInt(formData.get("clientAge"));
    const clientGender = formData.get("clientGender");

    if (!lawyerId || !startTime || !endTime || !clientName || !clientPhone || !clientAge || !clientGender) {
      throw new Error("All fields are required");
    }

    if (!/^\d{10}$/.test(clientPhone)) {
      throw new Error("Invalid contact number. Must be exactly 10 digits.");
    }

    // Check if the lawyer exists and is verified
    const lawyer = await db.user.findUnique({
      where: {
        id: lawyerId,
        role: "LAWYER",
        verificationStatus: "VERIFIED",
      },
    });

    if (!lawyer) {
      throw new Error("Lawyer not found or not verified");
    }

    // Check if the client has enough credits (1 credit per case)
    if (client.credits < 1) {
      throw new Error("Insufficient credits to book a case");
    }

    // Check if the requested time slot is available
    const overlappingCase = await db.legalCase.findFirst({
      where: {
        lawyerId: lawyerId,
        status: "SCHEDULED",
        OR: [
          {
            // New case starts during an existing case
            startTime: {
              lte: startTime,
            },
            endTime: {
              gt: startTime,
            },
          },
          {
            // New case ends during an existing case
            startTime: {
              lt: endTime,
            },
            endTime: {
              gte: endTime,
            },
          },
          {
            // New case completely overlaps an existing case
            startTime: {
              gte: startTime,
            },
            endTime: {
              lte: endTime,
            },
          },
        ],
      },
    });

    if (overlappingCase) {
      throw new Error("This time slot is already booked");
    }

    // Create a new Vonage Video API session
    const sessionId = await createVideoSession();

    const { success, error } = await deductCreditsForCase(client.id, lawyerId);
    if (!success) throw new Error(error || "Failed to deduct credits");

    // Create case and save client info
    const legalCase = await db.legalCase.create({
      data: {
        clientId: client.id,
        lawyerId,
        startTime,
        endTime,
        clientDescription,
        clientName,
        clientPhone,
        clientAge,
        clientGender,
        status: "SCHEDULED",
        videoSessionId: sessionId,
      },
    });

    revalidatePath("/cases");
    return { success: true, case: legalCase };
  } catch (error) {
    console.error("Failed to book case:", error);
    return { success: false, error: error.message };
  }
}



async function createVideoSession() {
  try {
    const session = await vonage.video.createSession({ mediaMode: "routed" });
    return session.sessionId;
  } catch (error) {
    throw new Error("Failed to create video session: " + error.message);
  }
}

/**
 * Generate a token for a video session
 * This will be called when either lawyer or client is about to join the call
 */
export async function generateVideoToken(formData) {
  const { userId } = await auth();

  if (!userId) {
    throw new Error("Unauthorized");
  }

  try {
    // 1️⃣ Fetch logged-in user
    const user = await db.user.findUnique({
      where: { clerkUserId: userId },
    });

    if (!user) {
      throw new Error("User not found");
    }

    // 2️⃣ Get case ID
    const caseId = formData.get("caseId");
    if (!caseId) {
      throw new Error("Case ID is required");
    }

    // 3️⃣ Fetch case
    const legalCase = await db.legalCase.findUnique({
      where: { id: caseId },
    });

    if (!legalCase) {
      throw new Error("Case not found");
    }

    // 4️⃣ Validate user belongs to case
    if (
      legalCase.lawyerId !== user.id &&
      legalCase.clientId !== user.id
    ) {
      throw new Error("You are not authorized to join this call");
    }

    // 5️⃣ Allow joining only 5 minutes before start
    const now = new Date();
    const caseStart = new Date(legalCase.startTime);
    const caseEnd = new Date(legalCase.endTime);

    const minutesBeforeStart =
      (caseStart.getTime() - now.getTime()) / (1000 * 60);

    if (minutesBeforeStart > 2) {
      throw new Error(
        "You can join the call only 2 minutes before the scheduled time"
      );
    }

    // 6️⃣ Create Vonage video token
    const token = vonage.video.generateClientToken(
      legalCase.videoSessionId,
      {
        role: "publisher",
        expireTime: Math.floor(caseEnd.getTime() / 1000), // token expires when call ends
        data: JSON.stringify({
          userId: user.id,
          name: user.name,
          role: user.role,
        }),
      }
    );

    // 7️⃣ Save token (optional but useful for debugging)
    await db.legalCase.update({
      where: { id: caseId },
      data: { videoSessionToken: token },
    });

    // 8️⃣ AUTO-END CALL AT EXACT CASE END TIME
    const millisecondsUntilEnd = caseEnd.getTime() - Date.now();

    if (millisecondsUntilEnd > 0) {
      setTimeout(async () => {
        try {
          await db.legalCase.update({
            where: { id: caseId },
            data: { status: "COMPLETED" },
          });

          console.log("Session marked as completed");
        } catch (err) {
          console.error("Failed to end session:", err);
        }
      }, millisecondsUntilEnd);
    }

    return {
      success: true,
      videoSessionId: legalCase.videoSessionId,
      token,
    };
  } catch (error) {
    console.error("Failed to generate video token:", error);
    throw new Error(error.message);
  }
}

export async function getCaseById(id) {
  const legalCase = await db.legalCase.findUnique({
    where: { id },
    include: {
      client: {
        select: {
          id: true,
          name: true,
        },
      },
      lawyer: {
        select: {
          id: true,
          name: true,
          practiceArea: true,
          qualifications: true,
        },
      },
      legalAdvice: true, // if you want legalAdvice data too
    },
  });

  if (!legalCase) throw new Error("Case not found");

  return legalCase;
}