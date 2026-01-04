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
  frequency: z.enum(['once', 'monthly', 'quarterly', 'yearly']),
});


//get colors 
export const getColorClasses = (color: string) => {
  switch (color) {
    case 'blue':
      return {
        bg: 'bg-blue-50',
        text: 'text-blue-600',
        badge: 'bg-blue-100 text-blue-800',
        gradient: 'from-blue-50 to-blue-100',
      };
    case 'green':
      return {
        bg: 'bg-green-100',
        text: 'text-green-600',
        badge: 'bg-green-100 text-green-800',
        gradient: 'from-green-50 to-green-100',
      };
    case 'red':
      return {
        bg: 'bg-red-100',
        text: 'text-red-600',
        badge: 'bg-red-100 text-red-800',
        gradient: 'from-red-50 to-red-100',
      };
    case 'purple':
      return {
        bg: 'bg-purple-100',
        text: 'text-purple-600',
        badge: 'bg-purple-100 text-purple-800',
        gradient: 'from-purple-50 to-purple-100',
      };
    case 'orange':
      return {
        bg: 'bg-orange-100',
        text: 'text-orange-600',
        badge: 'bg-orange-100 text-orange-800',
        gradient: 'from-orange-50 to-orange-100',
      };
    default:
      return {
        bg: 'bg-gray-100',
        text: 'text-gray-600',
        badge: 'bg-gray-100 text-gray-800',
        gradient: 'from-gray-50 to-gray-100',
      };
  }
};

//stripe
export const formatAmountForStripe = (amount: number, currency: string): number => {
  let numberFormat = new Intl.NumberFormat(['en-US'], {
    style: 'currency',
    currency: currency,
    currencyDisplay: 'symbol',
  });
  const parts = numberFormat.formatToParts(amount);
  let zeroDecimalCurrency: boolean = true;
  for (let part of parts) {
    if (part.type === 'decimal') {
      zeroDecimalCurrency = false;
    }
  }
  return zeroDecimalCurrency ? amount : Math.round(amount * 100);
};

export const formatAmountFromStripe = (amount: number, currency: string): number => {
  let numberFormat = new Intl.NumberFormat(['en-US'], {
    style: 'currency',
    currency: currency,
    currencyDisplay: 'symbol',
  });
  const parts = numberFormat.formatToParts(amount);
  let zeroDecimalCurrency: boolean = true;
  for (let part of parts) {
    if (part.type === 'decimal') {
      zeroDecimalCurrency = false;
    }
  }
  return zeroDecimalCurrency ? amount : Math.round(amount) / 100;
};
