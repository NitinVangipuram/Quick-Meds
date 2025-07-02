
import type { Product } from './productTypes';

export const oncology: Product[] = [];

// Adding 100 oncology products
for (let i = 1; i <= 100; i++) {
  oncology.push({
    id: `oncology-product-${i}`,
    name: `Oncology Medicine ${i}`,
    category: 'Oncology',
    manufacturer: 'Various',
    price: Math.floor(Math.random() * 2000) + 500,
    description: `Cancer treatment medication`,
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=400&fit=crop&crop=center',
    inStock: Math.random() > 0.2,
    prescription: true,
    dosage: `${Math.floor(Math.random() * 200) + 10}mg`
  });
}
