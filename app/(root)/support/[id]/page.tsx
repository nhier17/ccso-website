import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { supportProcedures } from "@/constants";

const SupportDetails = ({ params }: { params: { id: string } }) => {
    const supportDetail = supportProcedures[params.id as keyof typeof supportProcedures];

    if (!supportDetail) {
      return <p className="text-center text-xl py-10">Support option not found.</p>;
    }

  return (
    <main className="w-full py-10 px-5 md:px-16 mt-8">
    <div className="max-w-5xl mx-auto text-center">
      <h1 className="text-4xl font-bold mb-6 text-primary">{supportDetail.title}</h1>
      <Image
        src={supportDetail.image}
        alt={supportDetail.title}
        width={800}
        height={400}
        className="rounded-lg mx-auto mb-6"
      />
      <p className="text-lg text-gray-700 mb-6">{supportDetail.description}</p>
      <div className="text-left bg-gray-100 p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">How to Support</h2>
        <ul className="list-disc list-inside text-lg text-gray-800">
          {supportDetail.steps.map((step, index) => (
            <li key={index} className="mb-2">{step}</li>
          ))}
        </ul>
      </div>
      <div className="mt-8 flex flex-col md:flex-row justify-center gap-4">
        <Button className="bg-primary hover:bg-dark-100 hover:text-light-100 text-white px-6 py-3" asChild>
          <Link href="/donate">Donate Now</Link>
        </Button>
        <Button className="border border-primary text-primary px-6 py-3" variant="outline" asChild>
          <Link href="/contact">Get in Touch</Link>
        </Button>
      </div>
    </div>
  </main>
  )
}

export default SupportDetails
