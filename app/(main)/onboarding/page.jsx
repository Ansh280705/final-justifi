import { redirect } from "next/navigation";
import { getCurrentUser } from "@/actions/onboarding";
import OnboardingForm from "./_components/onboarding-form";

export default async function OnboardingPage() {
  return <OnboardingForm />;
}
