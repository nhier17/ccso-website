import { Calendar, TrendingUp, Heart } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export default function RecurringInfo() {
    return (
        <Card>
        <CardContent className="p-6">
          <h3 className="font-semibold mb-4 flex items-center">
            <Heart className="h-4 w-4 text-red-500 mr-2" />
            Monthly Giving Impact
          </h3>
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-orange-100 dark:bg-orange-900">
                <Calendar className="h-4 w-4 text-orange-600 dark:text-orange-400" />
              </div>
              <div>
                <div className="font-medium text-sm text-gray-900 dark:text-gray-100">
                  Predictable Support
                </div>
                <div className="text-xs text-gray-600 dark:text-gray-300">
                  Monthly donations help us plan long-term community projects
                </div>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-green-100 dark:bg-green-900">
                <TrendingUp className="h-4 w-4 text-green-600 dark:text-green-400" />
              </div>
              <div>
                <div className="font-medium text-sm text-gray-900 dark:text-gray-100">
                  Greater Impact
                </div>
                <div className="text-xs text-gray-600 dark:text-gray-300">
                  Regular giving enables sustainable, lasting change
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-4 p-3 bg-blue-50 dark:bg-blue-950 rounded-lg">
            <p className="text-xs text-blue-900 dark:text-blue-100">
              <strong>$25/month</strong> provides clean water for a family all year round
            </p>
          </div>
        </CardContent>
      </Card>
    );
}