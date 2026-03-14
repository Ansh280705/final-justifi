"use server";

import { auth } from "@clerk/nextjs/server";
import { db } from "@/lib/prisma";

const SIGNNOW_TOKEN = process.env.SIGNNOW_AUTH_TOKEN?.trim() || "e1601cb366199f5aafc2a98dc2dc96588de8d2a0f6e262ef473159e49dae8c37";

// Helper to make signNow requests
async function signNowRequest(path: string, method: string = "GET", body: any = null, isMultipart: boolean = false) {
  const headers: any = {
    'Authorization': `Bearer ${SIGNNOW_TOKEN}`
  };

  if (!isMultipart && body) {
    headers['Content-Type'] = 'application/json';
    headers['Accept'] = 'application/json';
  }

  const options: RequestInit = {
    method,
    headers,
  };

  if (body && !isMultipart) {
    options.body = JSON.stringify(body);
  } else if (body && isMultipart) {
    options.body = body; // FormData
  }

  const res = await fetch(`https://api.signnow.com${path}`, options);
  
  const contentType = res.headers.get("content-type");
  let data;
  if (contentType && contentType.includes("application/json")) {
    data = await res.json();
  } else {
    data = await res.text();
  }

  return { status: res.status, data };
}

export async function createSigningRequest(base64Pdf: string, fileName: string) {
  const { userId } = await auth();
  if (!userId) throw new Error("Unauthorized");

  try {
    const user = await db.user.findUnique({
      where: { clerkUserId: userId }
    });

    if (!user) throw new Error("User profile not found.");

    // 1. Upload the Document
    const buffer = Buffer.from(base64Pdf, 'base64');
    const blob = new Blob([buffer], { type: 'application/pdf' });
    const formData = new FormData();
    formData.append('file', blob, fileName);

    const uploadRes = await signNowRequest('/document', 'POST', formData, true);
    
    if (uploadRes.status !== 200 && uploadRes.status !== 201) {
      console.error("signNow Upload Error:", uploadRes.data);
      throw new Error("Failed to upload document to signNow.");
    }

    const documentId = uploadRes.data.id;

    // 2. Add Signature Field
    // Placing it at the bottom of the first page (where the stamp paper certificate would end)
    await signNowRequest(`/document/${documentId}`, 'PUT', {
      fields: [
        {
          x: 100,
          y: 650,
          width: 200,
          height: 50,
          page_number: 0,
          role: "Signer",
          required: true,
          type: "signature"
        }
      ]
    });

    // 3. Generate Link
    const linkRes = await signNowRequest('/link', 'POST', {
      document_id: documentId
    });

    if (linkRes.status !== 200) {
      throw new Error("Failed to generate SignNow signing link.");
    }

    const signingUrl = linkRes.data.url_no_signup || linkRes.data.url;

    // Track in DB
    const doc = await db.legalDocument.create({
      data: {
        clerkUserId: userId,
        leegalityDocId: documentId,
        status: "PENDING",
      },
    });

    return { 
      success: true, 
      signingUrl,
      documentId: doc.id 
    };

  } catch (error: any) {
    console.error("SignNow Migration Error:", error);
    return { success: false, error: error.message };
  }
}

export async function getDocumentStatus(leegalityDocId: string) {
  try {
    const res = await signNowRequest(`/document/${leegalityDocId}`);
    
    let status = "PENDING";
    if (res.status === 200 && res.data) {
        // SignNow 'fulfilled' status usually means all signers have signed
        const isSigned = res.data.fulfillment_status === "fulfilled" || (res.data.signatures && res.data.signatures.length > 0);
        
        if (isSigned) {
            status = "SIGNED";
            
            // Update db
            await db.legalDocument.update({
                where: { leegalityDocId },
                data: { status }
            });
        }
    }

    return { success: true, status };
  } catch (error: any) {
    console.error("SignNow Status Error:", error);
    return { success: false, error: error.message };
  }
}
