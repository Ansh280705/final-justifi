import { getLawyerById } from "@/actions/cases";
import { redirect } from "next/navigation";
import { PageHeader } from "@/components/page-header";
import PageLoader from "@/components/PageLoader";

export async function generateMetadata({ params }) {
  const { id } = await params;

  const { lawyer } = await getLawyerById(id);
  return {
    title: `${lawyer.name} - Justifi`,
    description: `Book a consultation with ${lawyer.name}, ${lawyer.practiceArea} specialist with ${lawyer.experience} years of experience.`,
  };
}

export default async function LawyerProfileLayout({ children, params }) {
  const { id } = await params;
  const { lawyer } = await getLawyerById(id);

  if (!lawyer) redirect("/lawyers");

  return (
    <PageLoader>
          <div className="container mx-auto">
      <PageHeader
        title={lawyer.name}
        backLink={`/lawyers/${lawyer.practiceArea}`}
        backLabel={`Back to ${lawyer.practiceArea}`}
      />

      {children}
    </div>
    </PageLoader>

  );
}