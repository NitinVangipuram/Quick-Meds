
import React from 'react';
import { Heart, Pill, Activity, Shield, Baby, Eye } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

interface QuickCategoriesProps {
  onCategorySelect: (category: string) => void;
}

const QuickCategories = ({ onCategorySelect }: QuickCategoriesProps) => {
  const quickCategories = [
    {
      name: 'Pain Relief',
      icon: Heart,
      color: 'bg-gradient-to-br from-red-50 to-red-100',
      iconColor: 'text-red-600',
      category: 'Analgesics & Pain Relief'
    },
    {
      name: 'Diabetes Care',
      icon: Activity,
      color: 'bg-gradient-to-br from-blue-50 to-blue-100',
      iconColor: 'text-blue-600',
      category: 'Diabetes Care'
    },
    {
      name: 'Heart Health',
      icon: Shield,
      color: 'bg-gradient-to-br from-green-50 to-green-100',
      iconColor: 'text-green-600',
      category: 'Cardiovascular'
    },
    {
      name: 'Antibiotics',
      icon: Pill,
      color: 'bg-gradient-to-br from-purple-50 to-purple-100',
      iconColor: 'text-purple-600',
      category: 'Antibiotics'
    },
    {
      name: 'Baby Care',
      icon: Baby,
      color: 'bg-gradient-to-br from-pink-50 to-pink-100',
      iconColor: 'text-pink-600',
      category: 'Pediatric Care'
    },
    {
      name: 'Eye Care',
      icon: Eye,
      color: 'bg-gradient-to-br from-indigo-50 to-indigo-100',
      iconColor: 'text-indigo-600',
      category: 'Ophthalmology'
    }
  ];

  const handleCategoryClick = (category: string) => {
    console.log(`Filtering products by category: ${category}`);
    onCategorySelect(category);
    
    // Scroll to the products section smoothly
    const productsSection = document.querySelector('[data-products-section]');
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="mb-8">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Shop by Category</h2>
        <p className="text-gray-600">Find what you need quickly with our popular categories</p>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {quickCategories.map((category, index) => (
          <Card
            key={index}
            className="cursor-pointer hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-0 overflow-hidden group"
            onClick={() => handleCategoryClick(category.category)}
          >
            <CardContent className={`p-6 text-center ${category.color} group-hover:scale-105 transition-transform duration-300`}>
              <div className={`w-12 h-12 mx-auto mb-3 rounded-full bg-white/80 flex items-center justify-center group-hover:bg-white transition-colors duration-300`}>
                <category.icon className={`w-6 h-6 ${category.iconColor}`} />
              </div>
              <h3 className="text-sm font-semibold text-gray-800 leading-tight">
                {category.name}
              </h3>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default QuickCategories;
