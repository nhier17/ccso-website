"use client";

import ContactForm from "@/components/ContactForm";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Plus, X } from "lucide-react";
import { addressInfo, faqs } from "@/constants";


const Contact = () => {
  return (
    <div>
    <section className="relative section-padding">
      <div className="absolute inset-0 z-0 bg-linear-to-r from-primary/10 to-primary/5">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/1056553/pexels-photo-1056553.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] bg-cover bg-center opacity-20 mix-blend-overlay"></div>
      </div>
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl">Contact Us</h1>
          <p className="text-lg text-muted-foreground md:text-xl">
            We'd love to hear from you. Reach out with questions, partnership inquiries, or to learn more about our work.
          </p>
        </div>
      </div>
    </section>

    <section className="section-padding">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2">
          <div>
            <h2 className="mb-6 text-3xl font-bold tracking-tight">Get in Touch</h2>
            
            <div className="space-y-6">
              {addressInfo.map((item) => (
                <Card key={item.title}>
                  <CardContent className="flex items-start space-x-4 p-6">
                    <Image  src={item.icon} alt={item.title} width={24} height={24} className="mt-1 h-6 w-6 text-primary" />
                    <div>
                      <h3 className="font-semibold">{item.title}</h3>
                      {item.details.map((detail, i) => (
                        <p 
                          key={i} 
                          className={i === 0 ? "mt-1 text-muted-foreground" : "text-muted-foreground"}
                        >
                          {detail}
                        </p>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))} 
            </div>
          </div>
          
          <div>
            <h2 className="mb-6 text-3xl font-bold tracking-tight">Send Us a Message</h2>
            <Card className="p-0">
              <CardContent className="p-6">
                <ContactForm />
              </CardContent>
            </Card>
          </div>
        </div>
    </section>

    <section className="section-padding">
      <div className="text-center mx-auto max-w-3xl">
        <h3 className="mb-2 text-3xl font-bold tracking-tight sm:text-4xl">Our Location</h3>
         <div className="mx-auto mb-6 h-1 w-20 rounded bg-primary"></div>
         </div>
        <Card className="overflow-hidden p-0">
        <CardContent className="p-0">
        <iframe 
         src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d971.7262245543423!2d29.677134730116542!3d6.8235233813269!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1719d93cf187a743%3A0x59a2664b959e8521!2sRMFG%2BCQH%2C%20Rumbek%2C%20South%20Sudan!5e0!3m2!1sen!2ske!4v1746033383162!5m2!1sen!2ske" 
         width="100%" 
         height="450" 
         style={{border:0}} 
         allowFullScreen={true} 
         loading="lazy" 
         referrerPolicy="no-referrer-when-downgrade"
         />
         </CardContent>
        </Card>
    </section>

    <section className="section-padding">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="mb-2 text-3xl font-bold tracking-tight sm:text-4xl">
          Frequently Asked Questions
        </h2>
        <div className="mx-auto mb-6 h-1 w-20 rounded bg-primary"></div>
        <p className="mb-12 text-lg text-muted-foreground">
          Find answers to common questions about our organization and work.
        </p>
      </div>

      <div className="mx-auto max-w-4xl">
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`faq-${index}`}
              className="rounded-xl border bg-card px-4 shadow-xs"
            >
              <AccordionTrigger className="group flex w-full items-center justify-between py-4 text-left text-lg font-semibold hover:no-underline">
                <span>{faq.question}</span>
              </AccordionTrigger>

              <AccordionContent className="pb-4 text-muted-foreground text-base">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  </div>
  );
};

export default Contact;