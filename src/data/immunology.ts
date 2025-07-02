
import type { Product } from './productTypes';

export const immunology: Product[] = [];

// Adding 90 immunology products
for (let i = 1; i <= 90; i++) {
  immunology.push({
    id: `immunology-product-${i}`,
    name: `Immunology Medicine ${i}`,
    category: 'Immunology',
    manufacturer: 'Various',
    price: Math.floor(Math.random() * 1500) + 200,
    description: `Immunological medication for autoimmune disorders`,
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=400&fit=crop&crop=center',
    inStock: Math.random() > 0.15,
    prescription: true,
    dosage: `${Math.floor(Math.random() * 100) + 5}mg`
  });
}
