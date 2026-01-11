"use client";

import { notFound, useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { programStats } from "@/constants";
import { getColorClasses } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { 
  MapPin, 
  ArrowRight, 
  Users, 
  Calendar, 
  Target, 
  HeartHandshake, 
  Shield,
  Globe,
  Sparkles,
  CheckCircle,
  DollarSign,
  AlertTriangle,
  TrendingUp,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function ProgramDetails() {
  const params = useParams();
  const slug = params.slug as string;

  const program = programStats.find((p) => p.slug === slug);

  if (!program) return notFound();

  const colors = getColorClasses(program.color);
  
  // Calculate funding progress
  const fundingGoal = parseInt(program.budgetSummary?.fundingGoal?.replace(/[$,]/g, '') || '0');
  const fundingGap = parseInt(program.budgetSummary?.fundingGap?.replace(/[$,]/g, '') || '0');
  const fundingProgress = fundingGoal > 0 ? Math.round(((fundingGoal - fundingGap) / fundingGoal) * 100) : 0;

  return (
    <main className="min-h-screen font-bebas-neue">
      <section className="relative h-[70vh] md:h-[80vh] flex items-center">
        <Image
          src={program.image}
          alt={program.summary?.title}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
        
        <div className="relative z-10 container mx-auto px-4 md:px-8">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-4">
              <div className={`p-3 rounded-xl ${colors.bg}`}>
                <program.icon className={`h-8 w-8 ${colors.text}`} />
              </div>
              <span className="text-white/90 text-sm font-medium">
                {program.status === 'Planning' ? 'Proposed Program' : 'Active Program'}
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              {program.summary?.title}
            </h1>

            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mb-8 leading-relaxed">
              {program.summary?.shortDescription}
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              <div className="flex items-center gap-2 text-white">
                <MapPin className="h-5 w-5" />
                <span className="font-medium">{program.summary?.location.join(' ')}</span>
              </div>
              <div className="flex items-center gap-2 text-white">
                <Calendar className="h-5 w-5" />
                <span className="font-medium">{program.summary?.duration}</span>
              </div>
              <div className="flex items-center gap-2 text-white">
                <Users className="h-5 w-5" />
                <span className="font-medium">
                  {program.targetBeneficiaries?.estimatedNumber?.toLocaleString() || '0'} Beneficiaries
                </span>
              </div>
              <div className="flex items-center gap-2 text-white">
                <DollarSign className="h-5 w-5" />
                <span className="font-medium">
                  {program.budgetSummary?.annualBudget || 'Funding Required'}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gradient-to-r from-primary/5 via-white to-blue-500/5">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center p-4 rounded-2xl bg-white shadow-lg">
              <div className={`text-3xl font-bold mb-2 ${colors.text}`}>
                {program.targetBeneficiaries?.estimatedNumber?.toLocaleString() || '0'}
              </div>
              <div className="text-sm text-gray-600 font-medium">
                Target Beneficiaries
              </div>
            </div>
            
            <div className="text-center p-4 rounded-2xl bg-white shadow-lg">
              <div className={`text-3xl font-bold mb-2 ${colors.text}`}>
                {program.budgetSummary?.annualBudget || '$0'}
              </div>
              <div className="text-sm text-gray-600 font-medium">
                Annual Budget
              </div>
            </div>
            
            <div className="text-center p-4 rounded-2xl bg-white shadow-lg">
              <div className={`text-3xl font-bold mb-2 ${colors.text}`}>
                {fundingProgress}%
              </div>
              <div className="text-sm text-gray-600 font-medium">
                {program.status === 'Planning' ? 'To Launch' : 'Funding Progress'}
              </div>
            </div>
          </div>
      </section>

      <section className="section-padding bg-gradient-to-b from-white to-gray-50">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-12">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <AlertTriangle className="h-6 w-6 text-red-500" />
                  The Challenge
                </h3>
                <Card className="border-0 shadow-xl">
                  <CardContent className="p-8">
                    <p className="text-gray-600 leading-relaxed text-lg">
                      {program.problemStatement}
                    </p>
                  </CardContent>
                </Card>
              </div>

              <div>
                <div className="flex items-center gap-3 mb-6">
                  <Target className="h-8 w-8 text-primary" />
                  <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-primary">
                    {program.status === 'Planning' ? 'Launch Progress' : 'Funding Progress'}
                  </h2>
                </div>

                <Card className="border-0 shadow-2xl">
                  <CardContent className="p-8">
                    <div className="flex justify-between items-center mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">
                          {program.status === 'Planning' ? 'Funds Needed to Launch' : 'Project Funding Status'}
                        </h3>
                        <p className="text-gray-600">
                          {program.status === 'Planning' 
                            ? `We need ${program.budgetSummary?.fundingGap} to launch this vital program`
                            : `Your support helps us reach our goal of ${program.budgetSummary?.fundingGoal}`}
                        </p>
                      </div>
                      <Badge className={`px-4 py-2 ${colors.badge} text-base`}>
                        {fundingProgress}% {program.status === 'Planning' ? 'To Launch' : 'Complete'}
                      </Badge>
                    </div>

                    <Progress
                      value={fundingProgress}
                      className="h-4 mb-6 [&>div]:bg-gradient-to-r [&>div]:from-primary [&>div]:to-blue-500"
                    />

                    <div className="flex justify-between text-sm font-medium text-gray-600">
                      <span>{program.status === 'Planning' ? 'Current Funding' : 'Funds Raised'}</span>
                      <span className={colors.text}>
                        ${(fundingGoal - fundingGap).toLocaleString()} of ${fundingGoal.toLocaleString()}
                      </span>
                    </div>
                    
                    {program.budgetSummary?.breakdown && (
                      <div className="mt-8 pt-8 border-t border-gray-200">
                        <h4 className="font-bold text-gray-900 mb-4">Budget Breakdown</h4>
                        <div className="space-y-3">
                          {program.budgetSummary.breakdown.map((item, index) => (
                            <div key={index} className="flex justify-between items-center">
                              <span className="text-gray-600">{item.item}</span>
                              <span className="font-semibold">{item.amount}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <Target className="h-6 w-6 text-primary" />
                  Project Objectives
                </h3>
                <Card className="border-0 shadow-xl">
                  <CardContent className="p-8">
                    <div className="grid md:grid-cols-1 gap-4">
                      {program.objectives.map((objective, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
                          <span className="text-gray-700">{objective}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <TrendingUp className="h-6 w-6 text-primary" />
                  Key Activities
                </h3>
                <Card className="border-0 shadow-xl">
                  <CardContent className="p-8">
                    <ul className="space-y-3">
                      {program.keyActivities.map((activity, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <div className={`h-2 w-2 rounded-full mt-2 ${colors.bg}`} />
                          <span className="text-gray-700">{activity}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>

            <aside className="space-y-8">
              <Card className="border-0 shadow-2xl sticky top-8">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <Globe className="h-6 w-6 text-primary" />
                    <h3 className="text-xl font-bold text-gray-900">Quick Facts</h3>
                  </div>

                  <div className="mt-8 pt-8 border-t border-gray-200">
                    <h4 className="font-bold text-gray-900 mb-4">How You Can Help</h4>
                    <div className="space-y-4">
                      {program.donationAnchors.map((need, index) => (
                        <div key={index} className="flex items-start gap-3 p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors">
                          <div className={`px-3 py-1 rounded-full text-sm font-medium ${colors.badge} flex-shrink-0`}>
                            {need.amount}
                          </div>
                          <div>
                            <div className="text-sm text-gray-600">{need.description}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-xl">
                <CardContent className="p-6">
                  <h4 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <Target className="h-5 w-5 text-primary" />
                    Theory of Change
                  </h4>
                  <p className="text-sm text-gray-600 italic leading-relaxed">
                    "{program.theoryOfChange}"
                  </p>
                </CardContent>
              </Card>

              {program.risksAndMitigation && program.risksAndMitigation.length > 0 && (
                <Card className="border-0 shadow-xl">
                  <CardContent className="p-6">
                    <h4 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                      <Shield className="h-5 w-5 text-yellow-500" />
                      Risks & Mitigation
                    </h4>
                    <div className="space-y-3">
                      {program.risksAndMitigation.slice(0, 3).map((risk, index) => (
                        <div key={index} className="text-sm">
                          <div className="font-medium text-gray-900 mb-1">⚠️ {risk.risk}</div>
                          <div className="text-gray-600 pl-5">→ {risk.mitigation}</div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )}
            </aside>
          </div>
      </section>

      <section className="section-padding">
          <div className="rounded-3xl bg-gradient-to-br from-primary via-primary/90 to-blue-600 overflow-hidden shadow-2xl">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="p-12 md:p-16">
                <Badge className="mb-6 px-4 py-2 bg-white/20 backdrop-blur-sm text-white border-0">
                  <Sparkles className="h-4 w-4 mr-2" />
                  {program.status === 'Planning' ? 'Help Launch This Program' : 'Join Our Mission'}
                </Badge>
                <h2 className="mb-6 text-3xl md:text-4xl font-bold text-white leading-tight">
                  {program.status === 'Planning' 
                    ? 'Help Make This Vision a Reality' 
                    : 'Be Part of Lasting Change'}
                </h2>
                <p className="mb-8 text-lg text-white/90 leading-relaxed">
                  {program.status === 'Planning'
                    ? `Your support will help us launch this vital program and transform lives in ${program.summary?.location.join(' ')}.`
                    : 'Your support empowers communities, restores dignity, and creates sustainable solutions that last for generations.'}
                </p>
                
                <div className="space-y-4">
                  <Button 
                    size="lg" 
                    asChild
                    className="w-full py-6 rounded-xl bg-white text-primary hover:bg-gray-100 shadow-lg hover:shadow-xl transition-all group"
                  >
                    <Link href="/donate" className="flex items-center justify-center gap-2">
                      <HeartHandshake className="h-5 w-5" />
                      Fund This Program
                      <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>

                  <Button 
                    size="lg" 
                    variant="outline" 
                    asChild
                    className="w-full py-6 rounded-xl border-white text-black hover:bg-white/10 transition-all group"
                  >
                    <Link href="/contact" className="flex items-center justify-center gap-2">
                      <Users className="h-5 w-5" />
                      Inquire About Partnership
                    </Link>
                  </Button>
                </div>
              </div>

              <div className="relative min-h-[300px] md:min-h-[400px]">
                <Image
                  src={program.image}
                  alt={`Support ${program.summary?.title}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-primary/30 via-primary/20 to-transparent" />
                
                <div className="absolute bottom-8 left-8 right-8 bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm text-gray-600">Impact Potential</div>
                      <div className="text-2xl font-bold text-primary">
                        {program.targetBeneficiaries?.estimatedNumber?.toLocaleString() || 'High'}
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-gray-600">Status</div>
                      <div className={`text-2xl font-bold ${program.status === 'Active' ? 'text-green-600' : 'text-yellow-600'}`}>
                        {program.status}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </section>
    </main>
  );
}