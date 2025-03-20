import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { z } from "zod";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const partnerSchema = () => z.object({
  orgName: z.string().min(2, "Organization name is required"),
  orgType: z.enum(["ngo", "company", "foundation", "government", "other"], {
    errorMap: () => ({ message: "Please select a valid organization type" }),
  }),
  contactName: z.string().min(2, "Contact person is required"),
  jobTitle: z.string().min(2, "Job title is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number is required"),
  interest: z.enum([
    "education",
    "health",
    "water",
    "peace",
    "agriculture",
  ], {
    errorMap: () => ({ message: "Please select an area of interest" }),
  }),
  partnershipDetails: z.string().min(10, "Please describe your partnership"),
  additionalInfo: z.string().optional(),
});

export const volunteerSchema = z.object({
  firstName: z.string().min(2, "First name is required"),
  lastName: z.string().min(2, "Last name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number is required"),
  interest: z.enum([
    "education",
    "health",
    "agriculture",
    "peace",
    "water",
  ], {
    errorMap: () => ({ message: "Please select a valid area of interest" }),
  }),
  availability: z.enum([
    "fulltime",
    "parttime",
    "weekends",
    "flexible",
  ], {
    errorMap: () => ({ message: "Please select your availability" }),
  }),
  motivation: z.string().min(10, "Please share your motivation"),
});

export const donateSchema = z.object({
  amount: z.number().min(1, "Please enter a valid amount"),
  firstName: z.string().min(2, "First name is required"),
  lastName: z.string().min(2, "Last name is required"),
  email: z.string().email("Please enter a valid email"),
  isMonthly: z.boolean().default(false),
});