import { getLawyerCases, getLawyerAvailability, getRecentLawyerCases, getLawyerSpecializedDisputes } from "@/actions/lawyer";
import AvailabilitySettings from "./_components/availability-settings";
import { getCurrentUser } from "@/actions/onboarding";
import { redirect } from "next/navigation";
import LawyerCasesList from "./_components/cases-list";
import RecentCasesList from "./_components/recent-cases-list";
import { getLawyerEarnings, getLawyerPayouts } from "@/actions/payout";
import { LawyerEarnings } from "./_components/lawyer-earnings";
import { LawyerTabsSection } from "./_components/lawyer-tabs-section";
import { TabAnimatedContent } from "@/components/tab-animated-content";
import { TabsContent } from "@/components/ui/tabs";
import SpecializedDisputesList from "./_components/specialized-disputes-list";


export default async function LawyerDashboardPage() {
  const user = await getCurrentUser();

  // Redirect if not a lawyer
  if (user?.role !== "LAWYER") {
    redirect("/onboarding");
  }

  // If already verified, redirect to dashboard
  if (user?.verificationStatus !== "VERIFIED") {
    redirect("/lawyer/verification");
  }

  const [casesData, availabilityData, earningsData, payoutsData, recentCasesData, specializedData] =
    await Promise.all([
      getLawyerCases(),
      getLawyerAvailability(),
      getLawyerEarnings(),
      getLawyerPayouts(),
      getRecentLawyerCases(),
      getLawyerSpecializedDisputes(),
    ]);

  return (
    <div className="container mx-auto px-4 py-8">

      <LawyerTabsSection>
        <TabsContent value="sessions" className="border-none p-0">
          <TabAnimatedContent>
            <LawyerCasesList
              cases={casesData.cases || []}
            />
            <RecentCasesList
              cases={recentCasesData.cases || []}
            />
          </TabAnimatedContent>
        </TabsContent>
        <TabsContent value="specialized" className="border-none p-0">
          <TabAnimatedContent>
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-navy mb-2">Specialized Referrals</h2>
              <p className="text-sm text-slate-500">Cases assigned to you based on your practice area expertise.</p>
            </div>
            <SpecializedDisputesList
              disputes={specializedData.specializedDisputes || []}
            />
          </TabAnimatedContent>
        </TabsContent>
        <TabsContent value="availability" className="border-none p-0">
          <TabAnimatedContent>
            <AvailabilitySettings slots={availabilityData.slots || []} />
          </TabAnimatedContent>
        </TabsContent>
        <TabsContent value="earnings" className="border-none p-0">
          <TabAnimatedContent>
            <LawyerEarnings
              earnings={earningsData.earnings || {}}
              payouts={payoutsData.payouts || []}
            />
          </TabAnimatedContent>
        </TabsContent>
      </LawyerTabsSection>
    </div>
  );
}