import {
  getPendingLawyers,
  getVerifiedLawyers,
  getPendingPayouts,
  getAllBlogs,
  getAllSOSAlerts,
} from "@/actions/admin";
import { getPaymentRequests } from "@/actions/payment";
import { TabsContent } from "@radix-ui/react-tabs";
import { PendingLawyers } from "./components/pending-lawyers";
import { VerifiedLawyers } from "./components/verified-lawyers";
import { PendingPayouts } from "./components/pending-payouts";
import { AdminBlogs } from "./components/admin-blogs";
import { FirmsManager } from "./components/firms-manager";
import { PaymentRequests } from "./components/payment-requests";
import { getFirms } from "@/actions/firms";
import { getNews } from "@/actions/news";
import { SOSAlertsPanel } from "./components/sos-alerts-panel";
import { OfficesManager } from "./components/offices-manager";
import { getAllOffices } from "@/actions/offices";
import { TabAnimatedContent } from "./components/tab-animated-content";
import { NewsManager } from "./components/news-manager";

export default async function AdminPage() {
  const [pendingLawyersData, verifiedLawyersData, pendingPayoutsData, blogsData, firmsData, paymentData, newsData, sosData, officesData] =
    await Promise.all([
      getPendingLawyers(),
      getVerifiedLawyers(),
      getPendingPayouts(),
      getAllBlogs(),
      getFirms(),
      getPaymentRequests(),
      getNews(),
      getAllSOSAlerts(),
      getAllOffices(),
    ]);

  return (
    <>
      <TabsContent value="pending" className="border-none p-0">
        <TabAnimatedContent>
          <PendingLawyers lawyers={pendingLawyersData.lawyers || []} />
        </TabAnimatedContent>
      </TabsContent>

      <TabsContent value="lawyers" className="border-none p-0">
        <TabAnimatedContent>
          <VerifiedLawyers lawyers={verifiedLawyersData.lawyers || []} />
        </TabAnimatedContent>
      </TabsContent>

      <TabsContent value="payouts" className="border-none p-0">
        <TabAnimatedContent>
          <PendingPayouts payouts={pendingPayoutsData.payouts || []} />
        </TabAnimatedContent>
      </TabsContent>

      <TabsContent value="payment-requests" className="border-none p-0">
        <TabAnimatedContent>
          <PaymentRequests 
            requests={paymentData.requests || []} 
            history={paymentData.history || []}
          />
        </TabAnimatedContent>
      </TabsContent>

      <TabsContent value="blogs" className="border-none p-0">
        <TabAnimatedContent>
          <AdminBlogs blogs={blogsData.blogs || []} />
        </TabAnimatedContent>
      </TabsContent>

      <TabsContent value="news" className="border-none p-0">
        <TabAnimatedContent>
          <NewsManager news={newsData.data || []} />
        </TabAnimatedContent>
      </TabsContent>

       <TabsContent value="firms" className="border-none p-0">
        <TabAnimatedContent>
          <FirmsManager firms={firmsData|| []} />
        </TabAnimatedContent>
      </TabsContent>

      <TabsContent value="sos" className="border-none p-0">
        <TabAnimatedContent>
          <SOSAlertsPanel alerts={sosData.alerts || []} />
        </TabAnimatedContent>
      </TabsContent>

      <TabsContent value="offices" className="border-none p-0">
        <TabAnimatedContent>
          <OfficesManager offices={officesData.offices || []} />
        </TabAnimatedContent>
      </TabsContent>
    </>
  );
}
