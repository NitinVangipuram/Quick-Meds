
import type { Product } from './productTypes';

export const mensHealth: Product[] = [];

// Adding 60 men's health products
for (let i = 1; i <= 60; i++) {
  mensHealth.push({
    id: `mens-health-product-${i}`,
    name: `Men's Health Medicine ${i}`,
    category: 'Men\'s Health',
    manufacturer: 'Various',
    price: Math.floor(Math.random() * 600) + 100,
    description: `Men's health medication for male-specific conditions`,
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=400&fit=crop&crop=center',
    inStock: Math.random() > 0.1,
    prescription: Math.random() > 0.4,
    dosage: `${Math.floor(Math.random() * 100) + 10}mg`
  });
}
