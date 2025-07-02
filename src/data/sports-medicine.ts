
import type { Product } from './productTypes';

export const sportsMedicine: Product[] = [];

// Adding 50 sports medicine products
for (let i = 1; i <= 50; i++) {
  sportsMedicine.push({
    id: `sports-medicine-product-${i}`,
    name: `Sports Medicine ${i}`,
    category: 'Sports Medicine',
    manufacturer: 'Various',
    price: Math.floor(Math.random() * 400) + 80,
    description: `Sports medicine for athletic injuries and performance`,
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=400&fit=crop&crop=center',
    inStock: Math.random() > 0.1,
    prescription: Math.random() > 0.5,
    dosage: `${Math.floor(Math.random() * 100) + 10}mg`
  });
}
