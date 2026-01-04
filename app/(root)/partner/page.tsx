"use client";

import PartnershipForm from "@/components/forms/PartnershipForm";
import { 
  CheckCircle2, 
  Handshake, 
  Target,  
  Sparkles,
  HeartHandshake,
  Building,
  Network,
  Star
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { whyPartnerwithus, areas, nextSteps } from "@/constants";

const PartnerPage = () => {
  return (
    <div className="min-h-screen">
      <section className="relative section-padding overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-primary/10 to-purple-500/10" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full -translate-y-48 translate-x-48 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full translate-y-48 -translate-x-48 blur-3xl" />
        
        <div className="relative z-10 container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <Badge className="mb-6 px-4 py-2 bg-white/20 backdrop-blur-sm text-white border-0">
              <Sparkles className="h-4 w-4 mr-2" />
              Strategic Collaboration
            </Badge>
            
            <h1 className="mb-6 text-5xl md:text-7xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-primary to-purple-600">
              Partner With CCSO
            </h1>
            
            <p className="mb-8 text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
              Join us in creating sustainable, transformative impact in South Sudan through meaningful partnerships that leverage our combined strengths.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding px-4 bg-gradient-to-b from-white to-gray-50">
          <div className="text-center mb-16">
            <Badge className="mb-4 px-4 py-2 bg-primary/10 text-primary border-0">
              <Target className="h-4 w-4 mr-2" />
              Why Partner With Us
            </Badge>
            <h2 className="mb-2 text-4xl md:text-5xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-primary">
              Amplify Your Impact
            </h2>
            <div className="mx-auto mb-6 h-1 w-20 rounded bg-primary"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {whyPartnerwithus.map((benefit, index) => (
              <Card key={index} className="group border-0 bg-white shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                <CardContent className="p-8 text-center">
                  <div className={`mb-6 p-4 rounded-2xl bg-gradient-to-r ${benefit.color} w-fit mx-auto`}>
                    <benefit.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="mb-3 text-xl font-bold text-gray-900">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mb-20">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-gray-900 mb-2">Types of Partnerships</h3>
<div className="mx-auto mb-6 h-1 w-20 rounded bg-primary"></div>
            </div>

            <Tabs defaultValue="corporate" className="w-full">
              <TabsList className="mb-8 grid w-full grid-cols-3 bg-gradient-to-r from-primary/5 via-white to-primary/5 p-2 rounded-2xl">
                <TabsTrigger 
                  value="corporate" 
                  className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-primary data-[state=active]:to-blue-600 data-[state=active]:text-white rounded-xl px-6 py-3 transition-all flex items-center gap-2"
                >
                  <Building className="h-5 w-5" />
                  Corporate
                </TabsTrigger>
                <TabsTrigger 
                  value="ngo" 
                  className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-green-600 data-[state=active]:to-emerald-600 data-[state=active]:text-white rounded-xl px-6 py-3 transition-all flex items-center gap-2"
                >
                  <Network className="h-5 w-5" />
                  NGO/Foundation
                </TabsTrigger>
                <TabsTrigger 
                  value="faith" 
                  className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-600 data-[state=active]:to-pink-600 data-[state=active]:text-white rounded-xl px-6 py-3 transition-all flex items-center gap-2"
                >
                  <HeartHandshake className="h-5 w-5" />
                  Faith-Based
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="corporate" className="space-y-6">
                <Card className="border-0 shadow-xl bg-gradient-to-br from-blue-50 to-white">
                  <CardContent className="p-8">
                    <div className="flex items-center gap-4 mb-6">
                      <Building className="h-10 w-10 text-blue-600" />
                      <div>
                        <h4 className="text-2xl font-bold text-gray-900">Corporate Partnerships</h4>
                        <p className="text-blue-600 font-medium">Align your CSR with meaningful impact</p>
                      </div>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <h5 className="font-semibold text-gray-900 mb-3">Benefits</h5>
                        <ul className="space-y-3">
                          {[
                            "Employee engagement opportunities",
                            "Brand association with sustainable development",
                            "Transparent impact reporting",
                            "Media coverage and recognition",
                            "Employee volunteer programs"
                          ].map((item, index) => (
                            <li key={index} className="flex items-start gap-2">
                              <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-1" />
                              <span className="text-gray-700">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-semibold text-gray-900 mb-3">Opportunities</h5>
                        <ul className="space-y-3">
                          {[
                            "Program sponsorship",
                            "Skills-based volunteering",
                            "Cause marketing campaigns",
                            "Employee matching gifts",
                            "Supply chain partnerships"
                          ].map((item, index) => (
                            <li key={index} className="flex items-start gap-2">
                              <Star className="h-5 w-5 text-blue-500 flex-shrink-0 mt-1" />
                              <span className="text-gray-700">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="ngo" className="space-y-6">
                <Card className="border-0 shadow-xl bg-gradient-to-br from-green-50 to-white">
                  <CardContent className="p-8">
                    <div className="flex items-center gap-4 mb-6">
                      <Network className="h-10 w-10 text-green-600" />
                      <div>
                        <h4 className="text-2xl font-bold text-gray-900">NGO & Foundation Partnerships</h4>
                        <p className="text-green-600 font-medium">Collaborate for greater collective impact</p>
                      </div>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <h5 className="font-semibold text-gray-900 mb-3">Benefits</h5>
                        <ul className="space-y-3">
                          {[
                            "Access to established community networks",
                            "Shared learning and best practices",
                            "Co-designed program implementation",
                            "Joint funding opportunities",
                            "Knowledge exchange platforms"
                          ].map((item, index) => (
                            <li key={index} className="flex items-start gap-2">
                              <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-1" />
                              <span className="text-gray-700">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-semibold text-gray-900 mb-3">Opportunities</h5>
                        <ul className="space-y-3">
                          {[
                            "Program co-funding",
                            "Technical assistance exchange",
                            "Joint advocacy initiatives",
                            "Research partnerships",
                            "Capacity building collaborations"
                          ].map((item, index) => (
                            <li key={index} className="flex items-start gap-2">
                              <Star className="h-5 w-5 text-green-500 flex-shrink-0 mt-1" />
                              <span className="text-gray-700">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="faith" className="space-y-6">
                <Card className="border-0 shadow-xl bg-gradient-to-br from-purple-50 to-white">
                  <CardContent className="p-8">
                    <div className="flex items-center gap-4 mb-6">
                      <HeartHandshake className="h-10 w-10 text-purple-600" />
                      <div>
                        <h4 className="text-2xl font-bold text-gray-900">Faith-Based Partnerships</h4>
                        <p className="text-purple-600 font-medium">Unite in service and compassion</p>
                      </div>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <h5 className="font-semibold text-gray-900 mb-3">Benefits</h5>
                        <ul className="space-y-3">
                          {[
                            "Shared values and mission alignment",
                            "Congregational engagement opportunities",
                            "Mission trip coordination",
                            "Prayer partnership networks",
                            "Biblical foundation for development work"
                          ].map((item, index) => (
                            <li key={index} className="flex items-start gap-2">
                              <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-1" />
                              <span className="text-gray-700">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-semibold text-gray-900 mb-3">Opportunities</h5>
                        <ul className="space-y-3">
                          {[
                            "Church-to-church partnerships",
                            "Mission team deployments",
                            "Disaster response collaboration",
                            "Pastoral training programs",
                            "Spiritual care integration"
                          ].map((item, index) => (
                            <li key={index} className="flex items-start gap-2">
                              <Star className="h-5 w-5 text-purple-500 flex-shrink-0 mt-1" />
                              <span className="text-gray-700">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          <div className="mb-20">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-gray-900 mb-2">Areas of Collaboration</h3>
              <div className="mx-auto mb-6 h-1 w-20 rounded bg-primary"></div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {areas.map((area, index) => (
                <Card key={index} className="group border-0 bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-6">
                    <div className={`mb-4 p-3 rounded-xl ${area.color} w-fit`}>
                      <area.icon className="h-6 w-6" />
                    </div>
                    <h4 className="text-lg font-bold text-gray-900 mb-2">{area.title}</h4>
                    <p className="text-gray-600 text-sm">{area.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
      </section>

      <section id="partnership-form" className="section-padding px-4 bg-gradient-to-b from-gray-50 to-white">
          <div className="text-center mb-12">
            <Badge className="mb-4 px-4 py-2 bg-primary/10 text-primary border-0">
              <Handshake className="h-4 w-4 mr-2" />
              Start Your Partnership
            </Badge>
            <h2 className="mb-2 text-4xl md:text-5xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-primary">
              Let's Build Something Together
            </h2>
            <div className="mx-auto mb-6 h-1 w-20 rounded bg-primary"></div>
          </div>

          <Card className="border-0 shadow-2xl overflow-hidden">
            <div className="md:flex">
              <div className="md:w-2/3">
                <PartnershipForm />
              </div>
              
              <div className="md:w-1/3 bg-gradient-to-b from-primary to-blue-600 p-8 md:p-12 text-white">
                <div className="mb-8">
                  <h3 className="text-2xl font-bold mb-4">What Happens Next?</h3>
                  <div className="space-y-6">
                    {nextSteps.map((item, index) => (
                      <div key={index} className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-white/20 flex items-center justify-center font-bold">
                          {item.step}
                        </div>
                        <div>
                          <h4 className="font-bold mb-1">{item.title}</h4>
                          <p className="text-white/80 text-sm">{item.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="pt-8 border-t border-white/20">
                  <h4 className="font-bold mb-4">Have Questions?</h4>
                  <p className="text-white/80 mb-4">
                    Email our partnerships team directly:
                  </p>
                  <Button 
                    asChild 
                    variant="outline" 
                    className="w-full border-white text-black hover:bg-white/10"
                  >
                    <Link href="mailto:bishop.pacong@gmail.com">
                      bishop.pacong@gmail.com
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </Card>
      </section>
    </div>
  );
};

export default PartnerPage;