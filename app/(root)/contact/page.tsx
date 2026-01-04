"use client";

import { useState } from "react";
import ContactForm from "@/components/ContactForm";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { addressInfo, faqs } from "@/constants";
import { Button } from "@/components/ui/button";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  MessageSquare,
  Send,
  Sparkles,
  Users,
  HeartHandshake,
  Globe,
  CheckCircle,
  ArrowRight
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

const Contact = () => {
  const [activeFaq, setActiveFaq] = useState<string>("");

  return (
    <div className="min-h-screen">
      <section className="relative section-padding overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-primary/10 to-blue-500/10" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full -translate-y-48 translate-x-48 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full translate-y-48 -translate-x-48 blur-3xl" />
      
        <div className="absolute top-1/4 left-1/4 animate-float">
          <div className="w-8 h-8 rounded-full bg-primary/20" />
        </div>
        <div className="absolute top-1/3 right-1/4 animate-float" style={{animationDelay: '0.5s'}}>
          <div className="w-6 h-6 rounded-full bg-blue-500/20" />
        </div>

        <div className="relative z-10 ">
          <div className="mx-auto max-w-4xl text-center">
            <Badge className="mb-6 px-4 py-2 bg-white/20 backdrop-blur-sm text-white border-0">
              <Sparkles className="h-4 w-4 mr-2" />
              Get In Touch
            </Badge>
            <h1 className="mb-6 text-5xl md:text-7xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-primary to-blue-600">
              Let's Connect
            </h1>
            <p className="mb-8 text-xl md:text-2xl text-gray-600 leading-relaxed">
              We'd love to hear from you. Reach out with questions, partnership inquiries, or to learn more about our work in South Sudan.
            </p>
          </div>
        </div>
      </section>

      <section id="contact-form" className="section-padding px-4 bg-gradient-to-b from-white to-gray-50">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <Badge className="mb-4 px-4 py-2 bg-primary/10 text-primary border-0">
                <Users className="h-4 w-4 mr-2" />
                Our Team
              </Badge>
              <h2 className="mb-6 text-3xl md:text-4xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-primary">
                Ready to Partner With Us?
              </h2>
              
              <p className="mb-8 text-lg text-gray-600 leading-relaxed">
                Whether you're interested in volunteering, forming a partnership, or supporting our work, 
                we're here to help you make a meaningful impact in South Sudan.
              </p>

              <div className="space-y-6">
                {addressInfo.map((item, index) => {
                  const IconComponent = {
                    "mail": Mail,
                    "phone": Phone,
                    "location": MapPin
                  }[item.icon.toLowerCase()] || MessageSquare;
                  
                  return (
                    <Card 
                      key={index} 
                      className="group border-0 bg-gradient-to-br from-white to-gray-50 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                    >
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="p-3 rounded-xl bg-primary/10">
                            <IconComponent className="h-6 w-6 text-primary" />
                          </div>
                          <div className="flex-1">
                            <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                            {item.details.map((detail, i) => (
                              <p 
                                key={i} 
                                className={i === 0 ? "text-gray-700 mb-1" : "text-gray-600"}
                              >
                                {detail}
                              </p>
                            ))}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>

              <div className="mt-12 p-8 rounded-2xl bg-gradient-to-r from-primary/5 to-blue-500/5">
                <h4 className="mb-6 text-xl font-bold text-gray-900">Quick Response Guarantee</h4>
                <div className="grid grid-cols-2 gap-6">
                  {[
                    { value: "24h", label: "Response Time", icon: Clock },
                    { value: "95%", label: "Satisfaction", icon: HeartHandshake },
                    { value: "50+", label: "Active Partners", icon: Users },
                    { value: "Global", label: "Reach", icon: Globe }
                  ].map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className="text-2xl font-bold text-primary mb-1">{stat.value}</div>
                      <div className="text-sm text-gray-600">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <div className="sticky top-8">
                <Card className="border-0 shadow-2xl">
                  <CardContent className="p-0">
                    <div className="p-8 bg-gradient-to-r from-primary to-blue-600 text-white rounded-t-2xl">
                      <div className="flex items-center gap-3 mb-2">
                        <Send className="h-6 w-6" />
                        <h3 className="text-2xl font-bold">Send Us a Message</h3>
                      </div>
                      <p className="text-white/90">
                        Fill out the form below and we'll get back to you within 24 hours.
                      </p>
                    </div>
                    <div className="p-8">
                      <ContactForm />
                    </div>
                    <div className="px-8 pb-8">
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span>Your information is secure and confidential</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
      </section>

      <section id="location" className="section-padding px-4 bg-gradient-to-b from-gray-50 to-white">
          <div className="text-center mb-12">
            <Badge className="mb-4 px-4 py-2 bg-primary/10 text-primary border-0">
              <MapPin className="h-4 w-4 mr-2" />
              Find Us
            </Badge>
            <h2 className="mb-2 text-3xl md:text-4xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-primary">
              Our Location
            </h2>
            <div className="h-1 w-20 bg-primary rounded mx-auto mb-4" />
          </div>

          <Card className="overflow-hidden border-0 shadow-2xl">
            <div className="grid md:grid-cols-3 gap-0">
              <div className="md:col-span-2">
                <div className="relative h-[400px] md:h-[500px]">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d971.7262245543423!2d29.677134730116542!3d6.8235233813269!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1719d93cf187a743%3A0x59a2664b959e8521!2sRMFG%2BCQH%2C%20Rumbek%2C%20South%20Sudan!5e0!3m2!1sen!2ske!4v1746033383162!5m2!1sen!2ske" 
                    width="100%" 
                    height="100%" 
                    style={{border: 0}} 
                    allowFullScreen={true} 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    className="absolute inset-0"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
                </div>
              </div>
              
              <div className="bg-gradient-to-b from-primary to-blue-600 p-8 text-white">
                <h3 className="text-2xl font-bold mb-6">Visit Information</h3>
                <div className="space-y-6">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <MapPin className="h-5 w-5" />
                      <h4 className="font-semibold">Address</h4>
                    </div>
                    <p className="text-white/90 pl-8">
                      RMFG+CQH, Rumbek<br />
                      Lakes State, South Sudan
                    </p>
                  </div>
                  
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <Clock className="h-5 w-5" />
                      <h4 className="font-semibold">Visiting Hours</h4>
                    </div>
                    <p className="text-white/90 pl-8">
                      Monday - Friday: 8AM - 5PM<br />
                      Saturday: 9AM - 1PM<br />
                      By Appointment Only
                    </p>
                  </div>
                  
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <MessageSquare className="h-5 w-5" />
                      <h4 className="font-semibold">Before Visiting</h4>
                    </div>
                    <ul className="text-white/90 pl-8 space-y-2">
                      <li className="flex items-start gap-2">
                        <div className="h-1.5 w-1.5 bg-white rounded-full mt-2" />
                        Please schedule an appointment
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="h-1.5 w-1.5 bg-white rounded-full mt-2" />
                        Bring valid identification
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="h-1.5 w-1.5 bg-white rounded-full mt-2" />
                        Check local travel advisories
                      </li>
                    </ul>
                  </div>
                </div>
                
                <Button 
                  asChild 
                  variant="outline" 
                  className="mt-8 w-full bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white/20"
                >
                  <Link
                    href="https://maps.google.com/?q=Rumbek,+Lakes+State,+South+Sudan" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    Get Directions
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </Card>
      </section>

    <section className="section-padding">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="mb-2 text-3xl font-bold tracking-tight sm:text-4xl">
          Frequently Asked Questions
        </h2>
        <div className="mx-auto mb-6 h-1 w-20 rounded bg-primary"></div>
      </div>

      <div className="mx-auto max-w-4xl">
        <Accordion 
          type="single" 
          collapsible 
          value={activeFaq}
          onValueChange={setActiveFaq}
          className="space-y-4"
        >
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`faq-${index}`}
              className="rounded-2xl border-0 bg-white shadow-lg hover:shadow-xl transition-all overflow-hidden"
            >
              <AccordionTrigger className="group flex w-full items-center justify-between p-6 text-left hover:no-underline">
                <div className="flex items-center gap-4">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <MessageSquare className="h-5 w-5 text-primary" />
                  </div>
                  <span className="text-lg font-semibold text-gray-900 group-hover:text-primary transition-colors">
                    {faq.question}
                  </span>
                </div>
              </AccordionTrigger>
         <AccordionContent className="px-6 pb-6 text-gray-600 leading-relaxed">
                <div className="pl-14">
                  {faq.answer}
                </div>
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