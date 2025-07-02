
import type { Product } from './productTypes';

export const traditionalMedicine: Product[] = [];

// Adding 120 traditional medicine products
for (let i = 1; i <= 120; i++) {
  traditionalMedicine.push({
    id: `traditional-medicine-product-${i}`,
    name: `Traditional Medicine ${i}`,
    category: 'Traditional Medicine',
    manufacturer: 'Various',
    price: Math.floor(Math.random() * 200) + 30,
    description: `Traditional Ayurvedic and herbal medicine`,
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=400&fit=crop&crop=center',
    inStock: Math.random() > 0.1,
    prescription: false,
    dosage: `${Math.floor(Math.random() * 50) + 5}mg`
  });
}
