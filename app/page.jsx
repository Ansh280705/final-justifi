
import HomeClient from "@/components/HomeClient";

// SEO Metadata for Home Page
export const metadata = {
  title: "Justifi - Video Consultation with Lawyers, Book Legal Advice",
  description:
    "Justifi helps lawyers and independent legal professionals manage cases, client records, bills, and practice workflows effortlessly. Join India's top legal SaaS platform today.",
  alternates: {
    canonical: "https://Justifi.co.in",
  },
};

export default function Home() {
  return <HomeClient />;
}
