import { getClientCases } from "@/actions/client";
import { getUserDisputes } from "@/actions/dispute";
import { CaseCard } from "@/components/case-card";
import { PageHeader } from "@/components/page-header";
import { Gavel, Calendar, ShieldAlert, ArrowRight, Clock, CheckCircle2 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { redirect } from "next/navigation";
import { getCurrentUser } from "@/actions/onboarding";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { getTranslations } from "next-intl/server";

export default async function ClientCasesPage() {
  const t = await getTranslations("Dashboard");
  const user = await getCurrentUser();

  if (!user || user.role !== "CLIENT") {
    redirect("/onboarding");
  }

  const { cases, error: caseError } = await getClientCases();
  const { disputes, error: disputeError } = await getUserDisputes();

  return (
    <div className="container mx-auto px-4 py-8">
      <PageHeader
        icon={<Gavel />}
        title={t("title")}
        backLink="/lawyers"
        backLabel={t("backLabel")}
      />

      <Card className="border-emerald-900/20">
        <CardHeader>
          <CardTitle className="text-xl font-bold text-black flex justify-between">

            <h4>{t("sessionsTitle")}</h4>
            <Link href="/legal-advice"> <Button variant="outline" className="border-client bg-muted-background">{t("legalAdvice")}</Button></Link>
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
                {t("noCases")}
              </h3>
              <p className="text-muted-foreground">
                {t("noCasesDesc")}
              </p>
            </div>
          )}
        </CardContent>
      </Card>

      <Card className="border-emerald-900/20 mt-8">
        <CardHeader>
          <CardTitle className="text-xl font-bold text-black flex items-center gap-2">
            <ShieldAlert className="text-emerald-600" />
            <h4>{t("disputesTitle")}</h4>
          </CardTitle>
          <CardDescription>{t("disputesDesc")}</CardDescription>
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
                            <CheckCircle2 size={12} /> {t("resolved")}
                          </div>
                        ) : (
                          <div className="text-[10px] text-gray-400">
                            {t("opponent")}: {dispute.opponentName || t("finding")}
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
                {t("noDisputes")}
              </h3>
              <p className="text-sm text-muted-foreground">
                {t("noDisputesDesc")}
              </p>
              <Link href="/submit-dispute" className="mt-4 inline-block">
                <Button variant="outline" size="sm" className="border-emerald-600 text-emerald-600">
                  {t("fileFirst")}
                </Button>
              </Link>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
