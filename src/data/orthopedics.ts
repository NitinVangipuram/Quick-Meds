
import type { Product } from './productTypes';

export const orthopedics: Product[] = [];

// Adding 120 orthopedic products
for (let i = 1; i <= 120; i++) {
  orthopedics.push({
    id: `orthopedic-product-${i}`,
    name: `Orthopedic Medicine ${i}`,
    category: 'Orthopedic Care',
    manufacturer: 'Various',
    price: Math.floor(Math.random() * 500) + 75,
    description: `Orthopedic medication for bone and joint health`,
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=400&fit=crop&crop=center',
    inStock: Math.random() > 0.1,
    prescription: Math.random() > 0.3,
    dosage: `${Math.floor(Math.random() * 50) + 5}mg`
  });
}
