"use client";

import { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { User, Gavel, Loader2 } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { setUserRole } from "@/actions/onboarding";
import { lawyerFormSchema } from "@/lib/schema";
import { PRACTICE_AREAS } from "@/lib/practice-areas";

export default function OnboardingForm() {
  const [step, setStep] = useState("choose-role");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  const router = useRouter();

  // React Hook Form setup with Zod validation
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm({
    resolver: zodResolver(lawyerFormSchema),
    defaultValues: {
      practiceArea: "",
      phone: undefined,
      qualifications: "",
      experience: undefined,
      credentialUrl: "",
      description: "",
      city: "",
    },
  });

  const practiceAreaValue = watch("practiceArea");

  // Stable function to submit user role
  const submitUserRoleSafe = useCallback(async (formData) => {
    try {
      setLoading(true);
      const res = await setUserRole(formData);

      // If the server indicates the user is unauthenticated, redirect to sign-in
      if (res?.success === false && res?.redirect) {
        router.replace(res.redirect);
        return;
      }

      setResult(res);
    } catch (err) {
      console.error("Error submitting role:", err);
      alert(err.message || "Failed to submit");
    } finally {
      setLoading(false);
    }
  }, [router]);

  // Redirect effect — triggers only once when submission is successful
  useEffect(() => {
    if (result?.success && result.redirect) {
      router.replace(result.redirect);
    }
  }, [result?.success, result?.redirect, router]);

  // Handle client selection
  const handleClientSelection = async () => {
    if (loading) return;

    const formData = new FormData();
    formData.append("role", "CLIENT");

    await submitUserRoleSafe(formData);
  };

  // Handle lawyer form submission
  const onLawyerSubmit = async (data) => {
    if (loading) return;

    const formData = new FormData();
    formData.append("role", "LAWYER");
    formData.append("practiceArea", data.practiceArea);
    formData.append("phone", data.phone);
    const qualificationsArray = data.qualifications
      ? data.qualifications.split(",").map((q) => q.trim())
      : [];
    formData.append("qualifications", JSON.stringify(qualificationsArray));
    formData.append("experience", data.experience.toString());
    formData.append("credentialUrl", data.credentialUrl);
    formData.append("description", data.description);
    formData.append("city", data.city);

    await submitUserRoleSafe(formData);
  };

  // Role selection screen
  if (step === "choose-role") {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card
          className="border-emerald-900/20 hover:border-client/40 cursor-pointer transition-all"
          onClick={handleClientSelection}
        >
          <CardContent className="pt-6 pb-6 flex flex-col items-center text-center">
            <div className="p-4 bg-emerald-900/20 rounded-full mb-4">
              <User className="h-8 w-8 text-client" />
            </div>
            <CardTitle className="text-xl font-semibold text-white mb-2">
              Join as a Client
            </CardTitle>
            <CardDescription className="mb-4">
              Book legal consultations, find lawyers, and manage your
              dispute resolution journey
            </CardDescription>
            <Button
              className="w-full mt-2 bg-client hover:bg-client"
              disabled={loading}
            >
              {loading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Processing...
                </>
              ) : (
                "Continue as Client"
              )}
            </Button>
          </CardContent>
        </Card>

        <Card
          className="border-emerald-900/20 hover:border-emerald-700/40 cursor-pointer transition-all"
          onClick={() => setStep("lawyer-form")}
        >
          <CardContent className="pt-6 pb-6 flex flex-col items-center text-center">
            <div className="p-4 bg-emerald-900/20 rounded-full mb-4">
              <Gavel className="h-8 w-8 text-client" />
            </div>
            <CardTitle className="text-xl font-semibold text-white mb-2">
              Join as a Lawyer
            </CardTitle>
            <CardDescription className="mb-4">
              Create your legal profile, set your availability, and
              provide professional consultations
            </CardDescription>
            <Button
              className="w-full mt-2 bg-client hover:bg-emerald-700"
              disabled={loading}
            >
              Continue as Lawyer
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  // Lawyer registration form
  if (step === "lawyer-form") {
    return (
      <Card className="border-emerald-900/20">
        <CardContent className="pt-6">
          <div className="mb-6">
            <CardTitle className="text-2xl font-bold text-white mb-2">
              Complete Your Lawyer Profile
            </CardTitle>
            <CardDescription>
              Please provide your professional legal details for verification
            </CardDescription>
          </div>

          <form onSubmit={handleSubmit(onLawyerSubmit)} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="practiceArea">Legal Practice Area</Label>
              <Select
                value={practiceAreaValue}
                onValueChange={(value) => setValue("practiceArea", value)}
              >
                <SelectTrigger id="practiceArea">
                  <SelectValue placeholder="Select your practice area" />
                </SelectTrigger>
                <SelectContent>
                  {PRACTICE_AREAS.map((spec) => (
                    <SelectItem
                      key={spec.name}
                      value={spec.name}
                      className="flex items-center gap-2"
                    >
                      <span className="text-client">{spec.icon}</span>
                      {spec.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {errors.practiceArea && (
                <p className="text-sm font-medium text-red-500 mt-1">
                  {errors.practiceArea.message}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="experience">Years of Legal Experience</Label>
              <Input
                id="experience"
                type="number"
                min={0}
                placeholder="e.g. 5"
                {...register("experience", { valueAsNumber: true })}
              />
              {errors.experience && (
                <p className="text-sm font-medium text-red-500 mt-1">
                  {errors.experience.message}
                </p>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number</Label>
              <Input
                id="phone"
                type="tel"
                placeholder="e.g. +91 9876543210"
                {...register("phone")}
              />
              {errors.phone && (
                <p className="text-sm text-red-500">{errors.phone.message}</p>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="qualifications">Professional Qualifications</Label>
              <Input
                id="qualifications"
                placeholder="LLB, LLM (Corporate Law)"
                {...register("qualifications")}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="credentialUrl">Link to BAR License Document</Label>
              <Input
                id="credentialUrl"
                type="url"
                placeholder="https://example.com/my-law-license.pdf"
                {...register("credentialUrl")}
              />
              {errors.credentialUrl && (
                <p className="text-sm font-medium text-red-500 mt-1">
                  {errors.credentialUrl.message}
                </p>
              )}
              <p className="text-sm text-muted-foreground">
                Please provide a link to your law degree or Bar Council certification
              </p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">Description of Your Legal Services</Label>
              <Textarea
                id="description"
                placeholder="Describe your expertise, services, and approach to client cases..."
                rows="4"
                {...register("description")}
              />
              {errors.description && (
                <p className="text-sm font-medium text-red-500 mt-1">
                  {errors.description.message}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="city">City / Location</Label>
              <Input
                id="city"
                placeholder="e.g. New Delhi"
                {...register("city")}
              />
              {errors.city && (
                <p className="text-sm font-medium text-red-500 mt-1">
                  {errors.city.message}
                </p>
              )}
            </div>

            <div className="pt-2 flex items-center justify-between">
              <Button
                type="button"
                variant="outline"
                onClick={() => setStep("choose-role")}
                className="border-emerald-900/30"
                disabled={loading}
              >
                Back
              </Button>
              <Button
                type="submit"
                className="bg-emerald-600 hover:bg-emerald-700"
                disabled={loading}
              >
                {loading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  "Submit for Verification"
                )}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    );
  }
}
