import { Calendar, TrendingUp, Heart, Target, Zap, Users, ArrowRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

export default function RecurringInfo() {
  return (
    <Card className="border-0 shadow-xl">
      <CardContent className="p-8">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 rounded-xl bg-gradient-to-r from-primary to-red-500">
            <Heart className="h-8 w-8 text-white" />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-gray-900">Monthly Giving Impact</h3>
            <Badge className="mt-1 bg-gradient-to-r from-green-500 to-emerald-500 text-white border-0">
              Most Impactful
            </Badge>
          </div>
        </div>
        
        <div className="space-y-6 mb-8">
          {[
            {
              icon: Calendar,
              title: 'Predictable Support',
              description: 'Monthly donations help us plan long-term community projects',
              color: 'from-orange-500 to-amber-500'
            },
            {
              icon: TrendingUp,
              title: 'Greater Impact',
              description: 'Regular giving enables sustainable, lasting change',
              color: 'from-green-500 to-emerald-500'
            },
            {
              icon: Users,
              title: 'Community Connection',
              description: 'Ongoing relationship with the communities we serve',
              color: 'from-blue-500 to-cyan-500'
            }
          ].map((item, index) => (
            <div key={index} className="flex items-start gap-4 p-4 rounded-xl bg-gray-50">
              <div className={`p-3 rounded-xl bg-gradient-to-r ${item.color}`}>
                <item.icon className="h-5 w-5 text-white" />
              </div>
              <div>
                <div className="font-bold text-gray-900">
                  {item.title}
                </div>
                <div className="text-sm text-gray-600">
                  {item.description}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="p-6 rounded-2xl bg-gradient-to-r from-primary/10 to-blue-500/10 border border-primary/20">
          <div className="flex items-center gap-3 mb-2">
            <Target className="h-5 w-5 text-primary" />
            <h4 className="font-bold text-gray-900">Monthly Giving Example</h4>
          </div>
          <p className="text-gray-700 mb-3">
            <span className="font-bold text-primary">$25/month</span> provides clean water for a family all year round
          </p>
          <p className="text-sm text-gray-600">
            That's 12 families helped with just $25 recurring monthly
          </p>
        </div>
        
        <Button className="w-full mt-6 py-4 rounded-xl bg-gradient-to-r from-primary to-blue-500 text-white shadow-lg hover:shadow-xl transition-all group">
          <Zap className="h-5 w-5 mr-2" />
          Start Monthly Giving
          <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
        </Button>
      </CardContent>
    </Card>
  );
}