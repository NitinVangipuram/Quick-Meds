
import React from 'react';
import { Shield, Truck, Clock, Award, Users, CheckCircle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const TrustIndicators = () => {
  const indicators = [
    {
      icon: Shield,
      title: 'FDA Approved',
      subtitle: 'All medicines verified',
      color: 'text-green-600'
    },
    {
      icon: Truck,
      title: 'Free Delivery',
      subtitle: 'On orders above ₹500',
      color: 'text-blue-600'
    },
    {
      icon: Clock,
      title: '24/7 Service',
      subtitle: 'Round the clock support',
      color: 'text-purple-600'
    },
    {
      icon: Users,
      title: '50k+ Customers',
      subtitle: 'Trust our service',
      color: 'text-orange-600'
    },
    {
      icon: Award,
      title: 'Licensed Pharmacy',
      subtitle: 'Government certified',
      color: 'text-red-600'
    },
    {
      icon: CheckCircle,
      title: '100% Genuine',
      subtitle: 'Authentic products only',
      color: 'text-teal-600'
    }
  ];

  return (
    <div className="mb-8">
      <div className="mb-6 text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Why Choose MediCare?</h2>
        <p className="text-gray-600">Your trusted healthcare partner with quality assurance</p>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {indicators.map((indicator, index) => (
          <Card
            key={index}
            className="border-0 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5 bg-white/80 backdrop-blur-sm"
          >
            <CardContent className="p-4 text-center">
              <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-gray-50 flex items-center justify-center">
                <indicator.icon className={`w-6 h-6 ${indicator.color}`} />
              </div>
              <h3 className="text-sm font-semibold text-gray-900 mb-1">
                {indicator.title}
              </h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                {indicator.subtitle}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default TrustIndicators;
