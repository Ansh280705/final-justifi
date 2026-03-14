import { z } from "zod";

export const phoneSchema = z
  .string()
  .regex(/^[6-9]\d{9}$/, "Invalid phone number. Please enter a 10-digit Indian mobile number.");

export const emailSchema = z.string().email("Invalid email address");

export const lawyerFormSchema = z.object({
  practiceArea: z.string().min(1, "Practice area is required"),

  phone: phoneSchema,

  qualifications: z.string().min(2, "Qualification is required"),

  experience: z
    .number({ invalid_type_error: "Experience is required" })
    .min(1, "Minimum 1 year required")
    .max(70, "Invalid experience"),

  credentialUrl: z.string().url("Invalid credential URL"),

  description: z.string().min(20, "Description must be at least 20 characters"),
  
  city: z.string().min(2, "City name is required"),
});

export const disputeFormSchema = z.object({
  complainantName: z.string().min(2, "Name is required"),
  complainantEmail: emailSchema,
  complainantPhone: phoneSchema,
  category: z.string().min(1, "Category is required"),
  description: z.string().min(10, "Description is too short"),
  opponentName: z.string().optional(),
  opponentEmail: z.string().email("Invalid email address").optional().or(z.literal("")),
});

export const officeSchema = z.object({
  name: z.string().min(1, "Office name is required"),
  lawyerName: z.string().min(1, "Lawyer name is required"),
  practiceArea: z.string().min(1, "Practice area is required"),
  phone: phoneSchema,
  email: z.string().email("Invalid email address").optional().or(z.literal("")),
  address: z.string().min(1, "Address is required"),
  city: z.string().min(1, "City is required"),
  state: z.string().min(1, "State is required"),
  pincode: z.string().min(6, "Invalid pincode"),
  timing: z.string().min(1, "Timing is required"),
});
