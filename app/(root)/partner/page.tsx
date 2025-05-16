import PartnershipForm from "@/components/forms/PartnershipForm";
import { CheckCircle2 } from "lucide-react";

const PartnerPage = () => {

  return (
    <section className="relative py-16">
      <div className="mx-auto max-w-5xl">
          <div className="mx-auto text-center max-w-3xl">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Partner with CCSO</h1>
            <div className="mx-auto mb-6 h-1 w-20 rounded bg-primary"></div>
            <p className="text-lg text-gray-600 mb-8">
              Join us in creating sustainable impact in South Sudan through strategic partnerships
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold mb-6">Why Partner with Us?</h3>
              <ul className="space-y-4">
                {[
                  "Direct impact on vulnerable communities",
                  "Transparent project management and reporting",
                  "Local expertise and community trust",
                  "Sustainable development approach",
                  "Regular updates and communication",
                ].map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-1" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold mb-6">Partnership Areas</h3>
              <ul className="space-y-4">
                {[
                  "Education and Skills Development",
                  "Healthcare and Nutrition",
                  "Water and Sanitation",
                  "Peace and Reconciliation",
                  "Agriculture and Food Security",
                ].map((area, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-1" />
                    <span>{area}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <PartnershipForm />
      </div>
    </section>
  );
};

export default PartnerPage;
