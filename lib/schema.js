import { z } from "zod";

export const lawyerFormSchema = z.object({
  practiceArea: z.string().min(1, "Practice area is required"),

  phone: z
    .string()
    .min(10, "Phone number is required")
    .max(15, "Invalid phone number"),

  qualifications: z.string().min(2, "Qualification is required"),

  experience: z
    .number({ invalid_type_error: "Experience is required" })
    .min(1, "Minimum 1 year required")
    .max(70, "Invalid experience"),

  credentialUrl: z
    .string()
    .url("Invalid credential URL"),

  description: z
    .string()
    .min(20, "Description must be at least 20 characters"),
});
