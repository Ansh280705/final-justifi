import { getClientCases } from "@/actions/client";
import { CaseCard } from "@/components/case-card";
import { PageHeader } from "@/components/page-header";
import { Gavel, Calendar } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { redirect } from "next/navigation";
import { getCurrentUser } from "@/actions/onboarding";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default async function ClientCasesPage() {
  const user = await getCurrentUser();

  if (!user || user.role !== "CLIENT") {
    redirect("/onboarding");
  }

  const { cases, error } = await getClientCases();

  return (
    <div className="container mx-auto px-4 py-8">
      <PageHeader
        icon={<Gavel />}
        title="My Cases"
        backLink="/lawyers"
        backLabel="Find Lawyers"
      />

      <Card className="border-emerald-900/20">
        <CardHeader>
          <CardTitle className="text-xl font-bold text-black flex justify-between">
          
            <h4>Your Scheduled Case Sessions</h4>
           <Link href="/legal-advice"> <Button variant="outline" className="border-client bg-muted-background">Legal Advice</Button></Link>
          </CardTitle>
        </CardHeader>
        <CardContent>
          {error ? (
            <div className="text-center py-8">
              <p className="text-red-400">Error: {error}</p>
            </div>
          ) : cases?.length > 0 ? (
            <div className="space-y-4">
              {cases.map((legalCase) => (
                <CaseCard
                  key={legalCase.id}
                  legalCase={legalCase}
                  userRole="CLIENT"
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-8">
              <Calendar className="h-12 w-12 mx-auto text-muted-foreground mb-3" />
              <h3 className="text-xl font-medium text-black mb-2">
                No cases scheduled
              </h3>
              <p className="text-muted-foreground">
                You don&apos;t have any legal consultations scheduled yet. Browse our
                verified lawyers and book your first session.
              </p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}