import { getClientCases } from "@/actions/client";
import { getUserDisputes } from "@/actions/dispute";
import { CaseCard } from "@/components/case-card";
import { PageHeader } from "@/components/page-header";
import { Gavel, Calendar, ShieldAlert, ArrowRight, Clock, CheckCircle2, MapPin } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { redirect } from "next/navigation";
import { getCurrentUser } from "@/actions/onboarding";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default async function ClientCasesPage() {
  const user = await getCurrentUser();
  if (!user) redirect("/onboarding");

  if (user.role === "LAWYER") {
    redirect("/lawyer");
  }

  if (user.role !== "CLIENT") {
    redirect("/onboarding");
  }

  const { cases, error: caseError } = await getClientCases();
  const { disputes, error: disputeError } = await getUserDisputes();

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
            <div className="flex gap-2">
              <Link href="/lawyers/search">
                <Button variant="outline" className="border-emerald-500 text-emerald-600 bg-emerald-50 hover:bg-emerald-100 flex items-center gap-2">
                  <MapPin size={16} />
                  Find Lawyers Nearby
                </Button>
              </Link>
              <Link href="/legal-advice">
                <Button variant="outline" className="border-client bg-muted-background">Legal Advice</Button>
              </Link>
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent>
          {caseError ? (
            <div className="text-center py-8">
              <p className="text-red-400">Error: {caseError}</p>
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

      <Card className="border-emerald-900/20 mt-8">
        <CardHeader>
          <CardTitle className="text-xl font-bold text-black flex items-center gap-2">
            <ShieldAlert className="text-emerald-600" />
            <h4>Your Active Disputes</h4>
          </CardTitle>
          <CardDescription>Legal notices and mediation cases filed via Justifi AI</CardDescription>
        </CardHeader>
        <CardContent>
          {disputeError ? (
            <div className="text-center py-8">
              <p className="text-red-400">Error: {disputeError}</p>
            </div>
          ) : disputes?.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {disputes.map((dispute) => (
                <Link key={dispute.id} href={`/dispute/${dispute.id}`}>
                  <div className="p-4 rounded-xl border bg-white hover:border-emerald-500 hover:shadow-sm transition-all group">
                    <div className="flex justify-between items-start mb-3">
                      <div className="bg-emerald-50 text-emerald-700 px-2 py-1 rounded text-[10px] font-bold uppercase border border-emerald-100 flex items-center gap-1">
                        <Clock size={10} />
                        {dispute.status.replace("_", " ")}
                      </div>
                      <span className="text-[10px] text-gray-400 font-mono">#{dispute.id.split("-")[0]}</span>
                    </div>
                    <h5 className="font-bold text-navy truncate">{dispute.category}</h5>
                    <p className="text-xs text-gray-500 mt-1 line-clamp-2">{dispute.description}</p>
                    <div className="flex justify-between items-center mt-4 pt-3 border-t">
                      <div className="flex items-center gap-2">
                        {dispute.status === "RESOLVED" ? (
                          <div className="flex items-center gap-1 text-emerald-600 text-[10px] font-bold">
                            <CheckCircle2 size={12} /> Resolved
                          </div>
                        ) : (
                          <div className="text-[10px] text-gray-400">
                             Opponent: {dispute.opponentName || "Finding..."}
                          </div>
                        )}
                      </div>
                      <div className="text-emerald-600 text-xs font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                        Dashboard <ArrowRight size={14} />
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-8">
              <ShieldAlert className="h-12 w-12 mx-auto text-muted-foreground mb-3 opacity-20" />
              <h3 className="text-lg font-medium text-black mb-2">
                No active disputes
              </h3>
              <p className="text-sm text-muted-foreground">
                You haven&apos;t filed any automated disputes yet.
              </p>
              <Link href="/submit-dispute" className="mt-4 inline-block">
                <Button variant="outline" size="sm" className="border-emerald-600 text-emerald-600">
                  File Your First Dispute
                </Button>
              </Link>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}