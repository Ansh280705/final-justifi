import { NextResponse } from "next/server";
import { hearingRoutes } from "@/backend/routes/hearingRoutes";

export async function POST(req) {
  try {
    const data = await req.json();
    const hearing = await hearingRoutes.create(data);
    return NextResponse.json(hearing);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
