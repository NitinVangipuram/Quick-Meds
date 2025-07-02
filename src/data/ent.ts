
import type { Product } from './productTypes';

export const ent: Product[] = [];

// Adding 70 ENT products
for (let i = 1; i <= 70; i++) {
  ent.push({
    id: `ent-product-${i}`,
    name: `ENT Medicine ${i}`,
    category: 'Ear, Nose & Throat',
    manufacturer: 'Various',
    price: Math.floor(Math.random() * 300) + 50,
    description: `ENT medication for ear, nose and throat disorders`,
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=400&fit=crop&crop=center',
    inStock: Math.random() > 0.1,
    prescription: Math.random() > 0.4,
    dosage: `${Math.floor(Math.random() * 50) + 5}mg`
  });
}
