"use client";
 
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import UseAlert from "@/hooks/useAlert";
import CustomInput, { FormFieldType } from "./CustomInput";
import { FaLocationArrow } from "react-icons/fa6";

const schema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  email: z.string().email({ message: "Invalid email address" }),
  message: z.string().min(1, { message: "Message is required" }),
});

const ContactForm = () => {
  const { showAlert, hideAlert } = UseAlert();
  const [loading, setLoading] = useState(false);

    const form = useForm<z.infer<typeof schema>>({
      resolver: zodResolver(schema),
      defaultValues: {
        name: "",
        email: "",
        message: "",
      },
    });
  
    const onSubmit = async (data: z.infer<typeof schema>) => {
      setLoading(true);
  
      try {
        await emailjs.send(
          process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "",
          process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "",
          {
            from_name: data.name,
            to_name: "Abraham Nhier",
            from_email: data.email,
            to_email: "abrahamnhier97@gmail.com",
            message: data.message,
          },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY 
        );
        showAlert({
          text: "Thank you for your message 😃",
          type: "success",
        });
        form.reset();
      } catch (error) {
        console.error(error);
  
        showAlert({
          show: true,
          text: "I didn't receive your message 😢",
          type: "danger",
        });
      } finally {
        setLoading(false);
        setTimeout(() => hideAlert(false), 3000);
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
          {loading ? 'Sending...' : 'Send Message'}
          <FaLocationArrow className="size-4" />
        </Button>
      </form>
    </Form>
  );
};

export default ContactForm