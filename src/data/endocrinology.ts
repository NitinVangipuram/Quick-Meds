
import type { Product } from './productTypes';

export const endocrinology: Product[] = [];

// Adding 85 endocrinology products
for (let i = 1; i <= 85; i++) {
  endocrinology.push({
    id: `endocrinology-product-${i}`,
    name: `Endocrinology Medicine ${i}`,
    category: 'Endocrinology',
    manufacturer: 'Various',
    price: Math.floor(Math.random() * 800) + 100,
    description: `Endocrine system medication for hormonal disorders`,
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=400&fit=crop&crop=center',
    inStock: Math.random() > 0.1,
    prescription: Math.random() > 0.2,
    dosage: `${Math.floor(Math.random() * 150) + 5}mg`
  });
}
