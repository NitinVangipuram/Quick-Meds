
import type { Product } from './productTypes';

export const emergencyMedicine: Product[] = [];

// Adding 80 emergency medicine products
for (let i = 1; i <= 80; i++) {
  emergencyMedicine.push({
    id: `emergency-medicine-product-${i}`,
    name: `Emergency Medicine ${i}`,
    category: 'Emergency Medicine',
    manufacturer: 'Various',
    price: Math.floor(Math.random() * 1000) + 200,
    description: `Emergency medication for critical care`,
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=400&fit=crop&crop=center',
    inStock: Math.random() > 0.05,
    prescription: true,
    dosage: `${Math.floor(Math.random() * 200) + 10}mg`
  });
}
