
import type { Product } from './productTypes';

export const infectiousDiseases: Product[] = [];

// Adding 90 infectious diseases products
for (let i = 1; i <= 90; i++) {
  infectiousDiseases.push({
    id: `infectious-diseases-product-${i}`,
    name: `Infectious Diseases Medicine ${i}`,
    category: 'Infectious Diseases',
    manufacturer: 'Various',
    price: Math.floor(Math.random() * 800) + 100,
    description: `Anti-infective medication for infectious diseases`,
    image: 'https://images.unsplash.com/photo-1563213126-a4273aed2016?w=400&h=400&fit=crop&crop=center',
    inStock: Math.random() > 0.1,
    prescription: Math.random() > 0.2,
    dosage: `${Math.floor(Math.random() * 100) + 10}mg`
  });
}
