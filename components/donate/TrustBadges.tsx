import { Card, CardContent } from "@/components/ui/card";
import { Shield, DollarSign, Users, Award, CheckCircle2, Globe } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

export default function TrustBadges() {
  const badges = [
    {
      icon: Shield,
      title: '100% Secure',
      description: 'Bank-level encryption protects your donation',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: DollarSign,
      title: '85% Direct Impact',
      description: '85¢ of every dollar goes directly to programs',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Users,
      title: 'Indigenous Led',
      description: 'Community leaders guide all our initiatives',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Award,
      title: 'Fully Transparent',
      description: 'Regular impact reports and financial accountability',
      color: 'from-orange-500 to-amber-500'
    },
  ];

  const impactBreakdown = [
    { category: 'Programs', percentage: 85, color: 'bg-green-500' },
    { category: 'Operations', percentage: 10, color: 'bg-blue-500' },
    { category: 'Fundraising', percentage: 5, color: 'bg-orange-500' },
  ];

  return (
    <Card className="border-0 shadow-xl">
      <CardContent className="p-8">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 rounded-xl bg-gradient-to-r from-primary to-blue-500">
            <Globe className="h-8 w-8 text-white" />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-gray-900">Why Donate to CCSO?</h3>
            <p className="text-primary font-medium">Trusted Impact Since 2016</p>
          </div>
        </div>
        
        <div className="space-y-6 mb-8">
          {badges.map((badge, index) => (
            <div key={index} className="flex items-start gap-4">
              <div className={`p-3 rounded-xl bg-gradient-to-r ${badge.color}`}>
                <badge.icon className="h-5 w-5 text-white" />
              </div>
              <div>
                <div className="font-bold text-gray-900 mb-1">
                  {badge.title}
                </div>
                <div className="text-sm text-gray-600">
                  {badge.description}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mb-8">
          <div className="flex items-center justify-between mb-3">
            <h4 className="font-bold text-gray-900">Fund Allocation</h4>
            <Badge className="bg-gradient-to-r from-green-500 to-emerald-500 text-white border-0">
              85% Direct Impact
            </Badge>
          </div>
          
          <div className="space-y-4">
            {impactBreakdown.map((item, index) => (
              <div key={index}>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-700">{item.category}</span>
                  <span className="font-bold text-gray-900">{item.percentage}%</span>
                </div>
                <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
                  <div 
                    className={`h-full ${item.color} rounded-full transition-all duration-1000 ease-out`}
                    style={{ width: `${item.percentage}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="pt-6 border-t border-gray-200">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <CheckCircle2 className="h-4 w-4 text-green-500" />
            <span>Donations are tax-deductible in supported countries</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}