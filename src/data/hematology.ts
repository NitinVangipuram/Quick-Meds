
import type { Product } from './productTypes';

export const hematology: Product[] = [];

// Adding 75 hematology products
for (let i = 1; i <= 75; i++) {
  hematology.push({
    id: `hematology-product-${i}`,
    name: `Hematology Medicine ${i}`,
    category: 'Hematology',
    manufacturer: 'Various',
    price: Math.floor(Math.random() * 1200) + 200,
    description: `Hematological medication for blood disorders`,
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=400&fit=crop&crop=center',
    inStock: Math.random() > 0.1,
    prescription: true,
    dosage: `${Math.floor(Math.random() * 200) + 5}mg`
  });
}
