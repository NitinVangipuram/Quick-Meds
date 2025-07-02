
import type { Product } from './productTypes';

export const neurology: Product[] = [];

// Adding 140 neurology products
for (let i = 1; i <= 140; i++) {
  neurology.push({
    id: `neurology-product-${i}`,
    name: `Neurology Medicine ${i}`,
    category: 'Neurology',
    manufacturer: 'Various',
    price: Math.floor(Math.random() * 800) + 100,
    description: `Neurological medication for brain and nerve disorders`,
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=400&fit=crop&crop=center',
    inStock: Math.random() > 0.1,
    prescription: Math.random() > 0.2,
    dosage: `${Math.floor(Math.random() * 100) + 10}mg`
  });
}
