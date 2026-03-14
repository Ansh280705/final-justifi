"use client";

import { useEffect } from "react";
import { getLawyerCases } from "@/actions/lawyer";
import CaseCard from "@/components/case-card";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar } from "lucide-react";
import useFetch from "@/hooks/use-fetch";
import { HashLoader } from "react-spinners";

export default function LawyerCasesList() {
  const {
    loading,
    data,
    fn: fetchCases,
  } = useFetch(getLawyerCases);

  useEffect(() => {
    fetchCases();
  }, []);

  const cases = data?.cases || [];

  return (
    <Card className="border-emerald-900/20">
      <CardHeader>
        <CardTitle className="text-xl font-bold text-client flex items-center">
          <Calendar className="h-7 w-7 mr-2 text-client" />
          Upcoming Cases
        </CardTitle>
      </CardHeader>
      <CardContent>
        {loading ? (
          <div className="text-center py-8 flex justify-center">
            <HashLoader color="#6ba49f" size={50} />
          </div>
        ) : cases.length > 0 ? (
          <div className="space-y-4">
            {cases.map((legalCase) => (
              <CaseCard
                key={legalCase.id}
                caseData={legalCase}
                userRole="LAWYER"
                refetchCases={fetchCases}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-8">
            <Calendar className="h-12 w-12 mx-auto text-muted-foreground mb-3" />
            <h3 className="text-xl font-medium text-white mb-2">
              No upcoming cases
            </h3>
            <p className="text-muted-foreground">
              You don&apos;t have any scheduled cases yet. Make sure
              you&apos;ve set your availability to allow clients to book.
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}