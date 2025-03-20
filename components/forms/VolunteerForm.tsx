"use client";

import { useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import CustomInput, { FormFieldType } from "@/components/CustomInput";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { volunteerSchema } from "@/lib/utils";
import { Loader2 } from "lucide-react";

const VolunteerForm = () => {
    const router = useRouter();
    const [isSubmitting, setIsSubmitting] = useState(false);


    const form = useForm<z.infer<typeof volunteerSchema>>({
        resolver: zodResolver(volunteerSchema),
         defaultValues: {
           firstName: "",
           lastName: "",
           email: "",
           phone: "",
           interest: undefined,
           availability: undefined,
           motivation: "",
         },
      });
    
      const onSubmit = async (data: z.infer<typeof volunteerSchema>) => {
        setIsSubmitting(true);
        try {
          console.log(data);
          await new Promise((resolve) => setTimeout(resolve, 1500)); // Simulate API call
          toast.success("Volunteer Application Submitted", {
            description: "Thank you for your interest! We'll reach out soon.",
          });
          router.push("/thank-you");
        } catch (error) {
          console.error(error);
          toast.error("Submission Failed", {
            description: "Please try again later.",
          });
        } finally {
          setIsSubmitting(false);
        }
      };

  return (
    <div className="bg-white p-8 rounded-xl shadow-lg">
    <h2 className="text-2xl font-semibold mb-6">Volunteer Application</h2>
    <Form {...form}> 
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <CustomInput 
          control={form.control} 
          name="firstName" 
          label="First Name" 
          placeholder="Enter your first name" 
          fieldType={FormFieldType.INPUT} 
        />
        <CustomInput 
          control={form.control} 
          name="lastName" 
          label="Last Name" 
          placeholder="Enter your last name" 
          fieldType={FormFieldType.INPUT} 
        />
      </div>

      <CustomInput 
        control={form.control} 
        name="email" 
        label="Email" 
        placeholder="Enter your email" 
        fieldType={FormFieldType.INPUT} 
      />

      <CustomInput 
        control={form.control} 
        name="phone" 
        label="Phone" 
        placeholder="Enter your phone number" 
        fieldType={FormFieldType.INPUT} 
      />

      <CustomInput
        control={form.control}
        name="interest"
        label="Area of Interest"
        placeholder="Select Area of Interest"
        fieldType={FormFieldType.SELECT}
        options={[
          { value: "education", label: "Education" },
          { value: "health", label: "Healthcare" },
          { value: "agriculture", label: "Agriculture" },
          { value: "peace", label: "Peace & Reconciliation" },
          { value: "water", label: "Water & Sanitation" },
        ]}
      />

      <CustomInput
        control={form.control}
        name="availability"
        label="Availability"
        placeholder="Select Availability"
        fieldType={FormFieldType.SELECT}
        options={[
          { value: "fulltime", label: "Full-time" },
          { value: "parttime", label: "Part-time" },
          { value: "weekends", label: "Weekends" },
          { value: "flexible", label: "Flexible" },
        ]}
      />

      <CustomInput
        control={form.control}
        name="motivation"
        label="Motivation"
        placeholder="Tell us why you want to volunteer..."
        fieldType={FormFieldType.TEXTAREA}
      />

      <Button type="submit" className="w-full bg-primary text-white" disabled={isSubmitting}>
        {isSubmitting ? <Loader2 className="animate-spin ml-2" /> : "Submit"}
      </Button>
      </form>
    </Form>
  </div>
  )
}

export default VolunteerForm