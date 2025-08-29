"use client";
 
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import CustomInput, { FormFieldType } from "./CustomInput";
import { FaLocationArrow } from "react-icons/fa6";
import { sendEmail } from "@/lib/resend";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";


const schema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  email: z.string().email({ message: "Invalid email address" }),
  subject: z.string().min(1, { message: "Subject is required" }),
  message: z.string().min(1, { message: "Message is required" }),
});

const ContactForm = () => {
  const [loading, setLoading] = useState(false);

    const form = useForm<z.infer<typeof schema>>({
      resolver: zodResolver(schema),
      defaultValues: {
        name: "",
        email: "",
        subject: "",
        message: "",
      },
    });
  
    const onSubmit = async (data: z.infer<typeof schema>) => {
      setLoading(true);
  
      try {
        const response = await sendEmail(data);
        if (response) {
          toast.success("Message sent successfully");
          form.reset();
        }
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

  return (
       <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="mt-12 flex flex-col space-y-7">
        <CustomInput 
          fieldType={FormFieldType.INPUT}
          control={form.control}
          name="name"
          label="Name"
          placeholder="Jane Doe"
        />
        <CustomInput 
          fieldType={FormFieldType.INPUT}
          control={form.control}
          name="email"
          label="Email"
          placeholder="jane.doe@example.com"
        />
        <CustomInput 
          fieldType={FormFieldType.INPUT}
          control={form.control}
          name="subject"
          label="Subject"
          placeholder="Subject"
        />
        <CustomInput 
          fieldType={FormFieldType.TEXTAREA}
          control={form.control}
          name="message"
          label="Message"
          placeholder="Your message"
        />
        <Button
          type="submit"
          className="field-btn"
          disabled={loading}
        >
          {loading ? <Loader2 className="size-5 animate-spin" /> : 'Send Message'}
          <FaLocationArrow className="size-5" />
        </Button>
      </form>
    </Form>
  );
};

export default ContactForm