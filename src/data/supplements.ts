
import type { Product } from './productTypes';

export const supplements: Product[] = [];

// Adding 200 supplement products
for (let i = 1; i <= 200; i++) {
  supplements.push({
    id: `supplement-product-${i}`,
    name: `Supplement ${i}`,
    category: 'Supplements & Nutraceuticals',
    manufacturer: 'Various',
    price: Math.floor(Math.random() * 300) + 40,
    description: `Nutritional supplement for health and wellness`,
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=400&fit=crop&crop=center',
    inStock: Math.random() > 0.05,
    prescription: false,
    dosage: `${Math.floor(Math.random() * 100) + 10}mg`
  });
}
