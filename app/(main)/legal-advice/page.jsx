import { getClientLegalAdvices } from "@/actions/legal-advice";
import LegalAdviceCard from "./LegalAdviceCard";
import { Notebook } from "lucide-react";

export default async function LegalAdvicePage() {
  const { legalAdvices, error } = await getClientLegalAdvices();

  if (error) {
    return <p className="p-4">Error: {error}. Please try again later.</p>;
  }

  if (!legalAdvices || legalAdvices.length === 0) {
    return (
      <div className="p-6 text-center text-gray-500">
        No legal advice records found.
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto p-6">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-client/10 text-client">
            <Notebook className="w-6 h-6" />
          </div>

          <div>
            <h1 className="text-2xl font-semibold text-gray-900">
              My Legal Advice
            </h1>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        {legalAdvices.map((advice) => (
          <LegalAdviceCard key={advice.id} legalAdvice={advice} />
        ))}
      </div>
    </div>
  );
}
