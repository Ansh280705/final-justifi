import { NextResponse } from "next/server";
import { db } from "@/lib/prisma";

export async function POST(req: Request) {
  try {
    const payload = await req.json();
    console.log("Leegality Webhook received:", payload);

    const { documentId, status } = payload;

    if (!documentId) {
      return NextResponse.json({ error: "No documentId in payload" }, { status: 400 });
    }

    // Leegality statuses: signed, stamped, failed, etc.
    let dbStatus = "PENDING";
    if (status === "signed") dbStatus = "SIGNED";
    if (status === "completed") dbStatus = "SIGNED";
    
    await db.legalDocument.update({
      where: { leegalityDocId: documentId },
      data: { status: dbStatus }
    });

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error("Webhook Error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
