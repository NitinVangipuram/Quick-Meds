
import type { Product } from './productTypes';

export const pediatrics: Product[] = [];

// Adding 150 pediatric products
for (let i = 1; i <= 150; i++) {
  pediatrics.push({
    id: `pediatric-product-${i}`,
    name: `Pediatric Medicine ${i}`,
    category: 'Pediatric Care',
    manufacturer: 'Various',
    price: Math.floor(Math.random() * 300) + 30,
    description: `Pediatric medication for children's health`,
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=400&fit=crop&crop=center',
    inStock: Math.random() > 0.1,
    prescription: Math.random() > 0.4,
    dosage: `${Math.floor(Math.random() * 20) + 1}mg`
  });
}
