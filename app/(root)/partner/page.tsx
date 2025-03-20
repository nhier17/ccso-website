import PartnershipForm from "@/components/forms/PartnershipForm";
import { CheckCircle2 } from "lucide-react";

const PartnerPage = () => {

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-16">
      <div className="px-4">
        <div className="max-w-4xl">
          <div className="text-start md:text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Partner with CCSO</h1>
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

          {/* Partnership Form */}
          <PartnershipForm />
        </div>
      </div>
    </main>
  );
};

export default PartnerPage;
