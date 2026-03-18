import { getAllHearings, getHearingViolationsPublic, getDisputeIds } from "@/actions/hearing";
import { HearingDashboardClient } from "./HearingDashboardClient";
import { Gavel } from "lucide-react";

export const metadata = {
  title: "Hearing Compliance | Justifi",
  description: "Automated hearing attendance monitoring and penalty system",
};

export default async function HearingsPage() {
  const [{ hearings }, { violations, penalties }, { disputes }] = await Promise.all([
    getAllHearings(),
    getHearingViolationsPublic(),
    getDisputeIds(),
  ]);

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <div className="bg-emerald-100 p-2.5 rounded-xl">
              <Gavel className="text-emerald-700" size={24} />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Hearing Compliance System</h1>
              <p className="text-sm text-gray-500">Automated attendance monitoring & penalty engine</p>
            </div>
          </div>

          {/* How it works banner */}
          <div className="mt-4 bg-emerald-50 border border-emerald-200 rounded-xl p-4">
            <h3 className="text-sm font-semibold text-emerald-800 mb-2">⚙️ How the Penalty Engine Works</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="flex items-start gap-2">
                <span className="text-lg">1️⃣</span>
                <div>
                  <p className="text-xs font-semibold text-emerald-700">First Absence</p>
                  <p className="text-xs text-emerald-600">Warning email issued to the party</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-lg">2️⃣</span>
                <div>
                  <p className="text-xs font-semibold text-emerald-700">Second Absence</p>
                  <p className="text-xs text-emerald-600">₹1,000 monetary penalty auto-generated</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-lg">3️⃣</span>
                <div>
                  <p className="text-xs font-semibold text-emerald-700">Third+ Absence</p>
                  <p className="text-xs text-emerald-600">Admin escalation flag raised</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <HearingDashboardClient
          initialHearings={hearings}
          violations={violations}
          penalties={penalties}
          disputes={disputes}
        />
      </div>
    </div>
  );
}
