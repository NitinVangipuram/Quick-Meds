
import type { Product } from './productTypes';

export const gastroenterology: Product[] = [];

// Adding 130 gastroenterology products
for (let i = 1; i <= 130; i++) {
  gastroenterology.push({
    id: `gastro-product-${i}`,
    name: `Gastroenterology Medicine ${i}`,
    category: 'Gastroenterology',
    manufacturer: 'Various',
    price: Math.floor(Math.random() * 400) + 50,
    description: `Gastrointestinal medication for digestive disorders`,
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=400&fit=crop&crop=center',
    inStock: Math.random() > 0.1,
    prescription: Math.random() > 0.4,
    dosage: `${Math.floor(Math.random() * 80) + 5}mg`
  });
}
