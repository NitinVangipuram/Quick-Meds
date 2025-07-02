
import type { Product } from './productTypes';

export const nephrology: Product[] = [];

// Adding 70 nephrology products
for (let i = 1; i <= 70; i++) {
  nephrology.push({
    id: `nephrology-product-${i}`,
    name: `Nephrology Medicine ${i}`,
    category: 'Nephrology',
    manufacturer: 'Various',
    price: Math.floor(Math.random() * 900) + 120,
    description: `Nephrological medication for kidney disorders`,
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=400&fit=crop&crop=center',
    inStock: Math.random() > 0.1,
    prescription: Math.random() > 0.2,
    dosage: `${Math.floor(Math.random() * 100) + 10}mg`
  });
}
