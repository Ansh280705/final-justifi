import { NextResponse } from "next/server";
import { hearingRoutes } from "@/backend/routes/hearingRoutes";

export async function POST(req) {
  try {
    const data = await req.json();
    const result = await hearingRoutes.join(data);
    return NextResponse.json(result);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
