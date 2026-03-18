import { NextResponse } from "next/server";
import { penaltyRoutes } from "@/backend/routes/penaltyRoutes";

export async function POST(req) {
  try {
    const { penalty_id } = await req.json();
    const result = await penaltyRoutes.pay(penalty_id);
    return NextResponse.json(result);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
