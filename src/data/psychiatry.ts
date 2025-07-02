
import type { Product } from './productTypes';

export const psychiatry: Product[] = [];

// Adding 110 psychiatry products
for (let i = 1; i <= 110; i++) {
  psychiatry.push({
    id: `psychiatry-product-${i}`,
    name: `Psychiatric Medicine ${i}`,
    category: 'Psychiatry',
    manufacturer: 'Various',
    price: Math.floor(Math.random() * 600) + 80,
    description: `Psychiatric medication for mental health disorders`,
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=400&fit=crop&crop=center',
    inStock: Math.random() > 0.1,
    prescription: Math.random() > 0.1,
    dosage: `${Math.floor(Math.random() * 150) + 5}mg`
  });
}
