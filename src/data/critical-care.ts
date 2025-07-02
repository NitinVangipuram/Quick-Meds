
import type { Product } from './productTypes';

export const criticalCare: Product[] = [];

// Adding 70 critical care products
for (let i = 1; i <= 70; i++) {
  criticalCare.push({
    id: `critical-care-product-${i}`,
    name: `Critical Care Medicine ${i}`,
    category: 'Critical Care',
    manufacturer: 'Various',
    price: Math.floor(Math.random() * 1500) + 300,
    description: `Critical care medication for ICU patients`,
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=400&fit=crop&crop=center',
    inStock: Math.random() > 0.05,
    prescription: true,
    dosage: `${Math.floor(Math.random() * 100) + 5}mg`
  });
}
