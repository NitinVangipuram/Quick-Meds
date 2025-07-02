
import type { Product } from './productTypes';

export const rheumatology: Product[] = [];

// Adding 80 rheumatology products
for (let i = 1; i <= 80; i++) {
  rheumatology.push({
    id: `rheumatology-product-${i}`,
    name: `Rheumatology Medicine ${i}`,
    category: 'Rheumatology',
    manufacturer: 'Various',
    price: Math.floor(Math.random() * 1000) + 150,
    description: `Rheumatological medication for joint and connective tissue disorders`,
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=400&fit=crop&crop=center',
    inStock: Math.random() > 0.1,
    prescription: Math.random() > 0.2,
    dosage: `${Math.floor(Math.random() * 100) + 10}mg`
  });
}
