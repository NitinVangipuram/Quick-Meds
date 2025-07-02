
import type { Product } from './productTypes';

export const hepatology: Product[] = [];

// Adding 65 hepatology products
for (let i = 1; i <= 65; i++) {
  hepatology.push({
    id: `hepatology-product-${i}`,
    name: `Hepatology Medicine ${i}`,
    category: 'Hepatology',
    manufacturer: 'Various',
    price: Math.floor(Math.random() * 1500) + 300,
    description: `Hepatological medication for liver disorders`,
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=400&fit=crop&crop=center',
    inStock: Math.random() > 0.1,
    prescription: Math.random() > 0.2,
    dosage: `${Math.floor(Math.random() * 150) + 10}mg`
  });
}
