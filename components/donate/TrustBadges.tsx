import { Card, CardContent } from "@/components/ui/card";
import { Shield, DollarSign, Users, Award } from 'lucide-react';

export default function TrustBadges() {
    const badges = [
        {
          icon: Shield,
          title: '100% Secure',
          description: 'Bank-level encryption protects your donation',
        },
        {
          icon: DollarSign,
          title: '85% Direct Impact',
          description: '85¢ of every dollar goes directly to programs',
        },
        {
          icon: Users,
          title: 'Indigenous Led',
          description: 'Community leaders guide all our initiatives',
        },
        {
          icon: Award,
          title: 'Fully Transparent',
          description: 'Regular impact reports and financial accountability',
        },
      ];
    return (
        <Card>
        <CardContent className="p-6">
          <h3 className="font-semibold mb-4">Why Donate to CCSO?</h3>
          <div className="space-y-4">
            {badges.map((badge, index) => (
              <div key={index} className="flex items-start space-x-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-50">
                  <badge.icon className="h-4 w-4 text-blue-600" />
                </div>
                <div>
                  <div className="font-medium text-sm text-gray-900">
                    {badge.title}
                  </div>
                  <div className="text-xs text-gray-600">
                    {badge.description}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    );
}