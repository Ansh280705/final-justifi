import { NextResponse } from "next/server";
import { hearingRoutes } from "@/backend/routes/hearingRoutes";
import { auth } from "@clerk/nextjs/server";

export async function GET(req) {
  try {
    const { userId } = await auth();
    if (!userId) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    
    const hearings = await hearingRoutes.upcoming(userId);
    return NextResponse.json(hearings);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
