import { AnimatePresence } from "framer-motion";
import React from "react";
import Toggle from "./Toggle";
import { faqs } from "@/constants";


const Faqs = () => {
  return (
    <div className="block py-10">
        <div className="relative isolate overflow-hidden bg-gray-50 px-4 pt-16 shadow-2xl sm:rounded-3xl ">
     <h2 className="pb-8 text-3xl md:text-4xl font-bold">Frequently Asked Questions 
        <span className="text-primary block mt-2">FAQs</span>
        </h2>

     <AnimatePresence>
        {faqs.map((faq, i) => (
            <Toggle key={i} title={faq.question}>
                <p className="text-sm">{faq.answer}</p>
            </Toggle>
        ))}
     </AnimatePresence>
     </div>
    </div>
  )
}

export default Faqs
