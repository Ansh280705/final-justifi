import { NextResponse } from "next/server";
import { db } from "@/lib/prisma";

export async function POST(req) {
  try {
    const { disputeId, opponentName, opponentEmail } = await req.json();

    if (!disputeId || !opponentName || !opponentEmail) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const dispute = await db.dispute.update({
      where: { id: disputeId },
      data: { opponentName, opponentEmail }
    });

    return NextResponse.json({ success: true, dispute });

  } catch (error) {
    console.error("Opponent API Error:", error);
    return NextResponse.json({ error: "Failed to update opponent info" }, { status: 500 });
  }
}
