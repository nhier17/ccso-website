"use client";

import ContactForm from "@/components/ContactForm";
import UseAlert from "@/hooks/useAlert";
import  Alert from "@/components/Alert";
import Image from "next/image";


const Contact = () => {
  const { alert } = UseAlert();

  return (
    <section className="c-space my-20">
      {alert.show && <Alert {...alert} />}

      <div className="relative min-h-screen flex items-center justify-center flex-col">
        <Image
          src="/images/terminal.png"
          alt="terminal-bg"
          fill
          className="absolute inset-0 min-h-screen"
        />
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-center gap-5">
          <div className="contact-container">
            <h3 className="sm:text-4xl text-3xl font-semibold text-light-100">Get in Touch with CCSO</h3>
          <p className="text-lg text-light-100 mt-3">
          Whether you&apos;re interested in partnering with us, volunteering, or learning more about our programs, we&apos;d love to hear from you. Together, we can make a difference in the lives of vulnerable communities in South Sudan.
          </p>
          <ContactForm />
        </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;