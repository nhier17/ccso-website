import { Droplets, Sprout, Heart, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { getColorClasses } from "@/lib/utils";

export default function ImpactTiers() {
    const tiers = [
        {
          amount: '$25',
          title: 'Water Guardian',
          icon: Droplets,
          color: 'blue',
          impact: 'Provides clean water access for 1 family for a month',
          details: [
            'Safe drinking water for 5-7 people',
            'Reduced waterborne illness',
            'Time saved for children to attend school',
          ],
        },
        {
          amount: '$50',
          title: 'Agricultural Empowerment',
          icon: Sprout,
          color: 'green',
          impact: 'Funds agricultural training for 2 farmers',
          details: [
            'Seeds and tools for sustainable farming',
            'Training in modern techniques',
            'Increased crop yields and food security',
          ],
        },
        {
          amount: '$100',
          title: 'Health Advocate',
          icon: Heart,
          color: 'red',
          impact: 'Supports mobile health clinic visit',
          details: [
            'Medical consultations for remote communities',
            'Maternal health support',
            'Disease prevention education',
          ],
        },
        {
          amount: '$250',
          title: 'Community Builder',
          icon: Users,
          color: 'purple',
          impact: 'Builds a water point serving an entire village',
          details: [
            'Permanent water infrastructure',
            'Community management training',
            'Long-term sustainability support',
          ],
        },
      ];

    return (
        <div>
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-center mb-2">Your Impact at Every Level</h2>
                    <div className="mx-auto mb-6 h-1 w-20 rounded bg-primary"></div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {tiers.map((tier, index) => {
            const colors = getColorClasses(tier.color);
            return (
              <Card key={index} className={`border-0 ${colors.bg} hover:shadow-lg transition-shadow`}>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className={`flex h-12 w-12 items-center justify-center rounded-lg ${colors.badge}`}>
                      <tier.icon className="h-6 w-6" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-semibold text-gray-900 dark:text-gray-100">
                          {tier.title}
                        </h3>
                        <span className={`text-lg font-bold ${colors.text}`}>
                          {tier.amount}
                        </span>
                      </div>
                      <p className="text-sm text-gray-700 dark:text-gray-200 mb-3">
                        {tier.impact}
                      </p>
                      <ul className="space-y-1">
                        {tier.details.map((detail, i) => (
                          <li key={i} className="text-xs text-gray-600 dark:text-gray-300 flex items-start">
                            <span className="text-green-500 mr-2">•</span>
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    );
}