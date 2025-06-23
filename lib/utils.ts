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
  amount: z
    .preprocess((val) => Number(val), z.number().min(1, "Please enter a valid amount")),
  firstName: z.string().min(2, "First name is required"),
  lastName: z.string().min(2, "Last name is required"),
  email: z.string().email("Please enter a valid email"),
  isMonthly: z.boolean().default(false),
});


//get colors 
export const getColorClasses = (color: string) => {
  switch (color) {
    case 'blue':
      return {
        bg: 'bg-blue-100 dark:bg-blue-900',
        text: 'text-blue-600 dark:text-blue-400',
        badge: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200',
        gradient: 'from-blue-50 to-blue-100 dark:from-blue-950 dark:to-blue-900',
      };
    case 'green':
      return {
        bg: 'bg-green-100 dark:bg-green-900',
        text: 'text-green-600 dark:text-green-400',
        badge: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
        gradient: 'from-green-50 to-green-100 dark:from-green-950 dark:to-green-900',
      };
    case 'red':
      return {
        bg: 'bg-red-100 dark:bg-red-900',
        text: 'text-red-600 dark:text-red-400',
        badge: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200',
        gradient: 'from-red-50 to-red-100 dark:from-red-950 dark:to-red-900',
      };
    case 'purple':
      return {
        bg: 'bg-purple-100 dark:bg-purple-900',
        text: 'text-purple-600 dark:text-purple-400',
        badge: 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200',
        gradient: 'from-purple-50 to-purple-100 dark:from-purple-950 dark:to-purple-900',
      };
    case 'orange':
      return {
        bg: 'bg-orange-100 dark:bg-orange-900',
        text: 'text-orange-600 dark:text-orange-400',
        badge: 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200',
        gradient: 'from-orange-50 to-orange-100 dark:from-orange-950 dark:to-orange-900',
      };
    default:
      return {
        bg: 'bg-gray-100 dark:bg-gray-900',
        text: 'text-gray-600 dark:text-gray-400',
        badge: 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200',
        gradient: 'from-gray-50 to-gray-100 dark:from-gray-950 dark:to-gray-900',
      };
  }
};
