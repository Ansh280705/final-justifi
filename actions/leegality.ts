"use server";

import { auth } from "@clerk/nextjs/server";
import { db } from "@/lib/prisma";

const LEEGALITY_BASE_URL = process.env.LEEGALITY_BASE_URL?.trim().replace(/\/$/, "");
const LEEGALITY_AUTH_TOKEN = process.env.LEEGALITY_AUTH_TOKEN?.trim();
const LEEGALITY_PROFILE_ID = process.env.LEEGALITY_PROFILE_ID?.trim();
const APP_URL = process.env.NEXT_PUBLIC_BASE_URL?.trim().replace(/\/$/, "");

export async function createSigningRequest(base64Pdf: string, fileName: string) {
  const { userId } = await auth();
  if (!userId) throw new Error("Unauthorized");

  try {
    const user = await db.user.findUnique({
      where: { clerkUserId: userId }
    });

    if (!user) throw new Error("User profile not found in database.");

    // Ensure the URL is clean (v3.0 sandbox is sensitive to trailing slashes or double slashes)
    const url = `${LEEGALITY_BASE_URL}/document/create`;
    const body = {
      profileId: LEEGALITY_PROFILE_ID,
      file: {
        name: fileName,
        content: base64Pdf,
      },
      invitees: [
        {
          name: user.name || "Signer", 
          email: user.email || "user@example.com", 
        }
      ],
      callbackUrl: `${APP_URL}/api/webhooks/leegality`,
    };

    console.log("--- Leegality Debug ---");
    console.log("URL:", url);
    console.log(`cURL (truncated file content):
curl -X POST "${url}" \\
  -H "Content-Type: application/json" \\
  -H "X-Auth-Token: ${LEEGALITY_AUTH_TOKEN}" \\
  -d '${JSON.stringify({ ...body, file: { ...body.file, content: "base64_content_truncated..." } })}'
`);
    
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "X-Auth-Token": LEEGALITY_AUTH_TOKEN || "",
      },
      body: JSON.stringify(body),
    });

    const text = await response.text();
    console.log("Status:", response.status);
    console.log("Raw Response:", text || "[EMPTY BODY]");

    let data: any;
    try {
      data = JSON.parse(text);
    } catch (e) {
      const hint = text.includes("<html") ? " (HTML Response - Check your URL)" : "";
      throw new Error(`Leegality returned non-JSON (${response.status})${hint}. Body: ${text.slice(0, 100) || "[EMPTY]"}`);
    }

    if (data.status === "success" || data.status === 200) {
      // Track the document in our DB
      const doc = await db.legalDocument.create({
        data: {
          clerkUserId: userId,
          leegalityDocId: data.data.documentId,
          status: "PENDING",
        },
      });

      return { 
        success: true, 
        signingUrl: data.data.invitations[0].url,
        documentId: doc.id 
      };
    } else {
      throw new Error(data.message || "Leegality API Error");
    }
  } catch (error: any) {
    console.error("Leegality Error:", error);
    return { success: false, error: error.message };
  }
}

export async function getDocumentStatus(leegalityDocId: string) {
  try {
    const doc = await db.legalDocument.findUnique({
      where: { leegalityDocId }
    });
    return { success: true, status: doc?.status || "NOT_FOUND" };
  } catch (error: any) {
    return { success: false, error: error.message };
  }
}
