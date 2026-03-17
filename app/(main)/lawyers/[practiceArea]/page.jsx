import { redirect } from "next/navigation";
import { getLawyersByPracticeArea } from "@/actions/lawyers-listing";
import { LawyerCard } from "@/components/lawyer-card";
import { PageHeader } from "@/components/page-header";

export default async function LawyerPracticeAreaPage({ params }) {
  const { practiceArea } = await params; 

  // Redirect if practiceArea is missing
  if (!practiceArea) {
    redirect("/lawyers");
  }

  const decodedPracticeArea = decodeURIComponent(practiceArea);

  // Fetch lawyers
  const { lawyers, error } = await getLawyersByPracticeArea(decodedPracticeArea);

  if (error) {
    console.error("Error fetching lawyers:", error);
  }

  return (
    <div className="space-y-5">
      <PageHeader
        title={decodedPracticeArea}
        backLink="/lawyers"
        backLabel="All Practice Areas"
      />

      {lawyers && lawyers.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {lawyers.map((lawyer) => (
            <LawyerCard key={lawyer.id} lawyer={lawyer} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <h3 className="text-xl font-medium text-client mb-2">
            No lawyers available
          </h3>
          <p className="text-muted-foreground">
            There are currently no verified legal professionals in this practice area.
          </p>
        </div>
      )}
    </div>
  );
}
