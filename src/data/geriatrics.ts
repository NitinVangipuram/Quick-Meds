
import type { Product } from './productTypes';

export const geriatrics: Product[] = [];

// Adding 85 geriatrics products
for (let i = 1; i <= 85; i++) {
  geriatrics.push({
    id: `geriatrics-product-${i}`,
    name: `Geriatric Medicine ${i}`,
    category: 'Geriatrics',
    manufacturer: 'Various',
    price: Math.floor(Math.random() * 500) + 60,
    description: `Geriatric medication for elderly patients`,
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=400&fit=crop&crop=center',
    inStock: Math.random() > 0.1,
    prescription: Math.random() > 0.3,
    dosage: `${Math.floor(Math.random() * 80) + 5}mg`
  });
}
