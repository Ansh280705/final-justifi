import { NextResponse } from "next/server";
import { hearingRoutes } from "@/backend/routes/hearingRoutes";
// import { verifyAdmin } from "@/actions/admin";

export async function GET(req) {
  try {
    // const isAdmin = await verifyAdmin();
    // if (!isAdmin) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    const result = await hearingRoutes.violations();
    return NextResponse.json(result);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
