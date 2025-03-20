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
import { partnerSchema } from "@/lib/utils";
import { Loader2 } from "lucide-react";


const PartnershipForm = () => {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const formSchema = partnerSchema();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      orgName: "",
      orgType: undefined,
      contactName: "",
      jobTitle: "",
      email: "",
      phone: "",
      interest: undefined,
      partnershipDetails: "",
      additionalInfo: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    setIsSubmitting(true);
    try {
        console.log(data)
      await new Promise((resolve) => setTimeout(resolve, 1500)); // Simulate API call
      toast.success("Partnership Inquiry Submitted", {
        description: "We'll get back to you shortly.",
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
    <div className="bg-white p-8 rounded-xl shadow-lg max-w-3xl mx-auto">
      <h2 className="text-2xl font-semibold mb-6">Partnership Inquiry Form</h2>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <CustomInput
              control={form.control}
              name="orgName"
              label="Organization Name"
              fieldType={FormFieldType.INPUT}
              placeholder="Enter organization name"
            />
            <CustomInput
              control={form.control}
              name="orgType"
              label="Organization Type"
              fieldType={FormFieldType.SELECT}
              placeholder="Select organization type"
              options={[
                { label: "NGO", value: "ngo" },
                { label: "Company", value: "company" },
                { label: "Foundation", value: "foundation" },
                { label: "Government", value: "government" },
                { label: "Other", value: "other" },
              ]}
            />
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <CustomInput
              control={form.control}
              name="contactName"
              label="Contact Person"
              fieldType={FormFieldType.INPUT}
              placeholder="Enter contact person's name"
            />
            <CustomInput
              control={form.control}
              name="jobTitle"
              label="Job Title"
              fieldType={FormFieldType.INPUT}
              placeholder="Enter job title"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <CustomInput
              control={form.control}
              name="email"
              label="Email"
              fieldType={FormFieldType.INPUT}
              placeholder="Enter email address"
            />
            <CustomInput
              control={form.control}
              name="phone"
              label="Phone"
              fieldType={FormFieldType.INPUT}
              placeholder="Enter phone number"
            />
          </div>

          <CustomInput
            control={form.control}
            name="interest"
            label="Area of Interest"
            fieldType={FormFieldType.SELECT}
            placeholder="Select area of interest"
            options={[
              { label: "Education", value: "education" },
              { label: "Health", value: "health" },
              { label: "Water", value: "water" },
              { label: "Peace", value: "peace" },
              { label: "Agriculture", value: "agriculture" },
            ]}
          />

          <CustomInput
            control={form.control}
            name="partnershipDetails"
            fieldType={FormFieldType.TEXTAREA}
            placeholder="Describe how you'd like to partner with CCSO..."
            label="How would you like to partner with CCSO?"
          />

          <CustomInput
            control={form.control}
            name="additionalInfo"
            fieldType={FormFieldType.TEXTAREA}
            placeholder="Any additional information..."
            label="Additional Information"
          />

          <Button
            type="submit"
            className="w-full bg-primary text-white"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <Loader2 className="animate-spin ml-2" />
            ) : (
              "Submit"
            )}
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default PartnershipForm;
