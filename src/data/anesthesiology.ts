
import type { Product } from './productTypes';

export const anesthesiology: Product[] = [];

// Adding 60 anesthesiology products
for (let i = 1; i <= 60; i++) {
  anesthesiology.push({
    id: `anesthesiology-product-${i}`,
    name: `Anesthesiology Medicine ${i}`,
    category: 'Anesthesiology',
    manufacturer: 'Various',
    price: Math.floor(Math.random() * 800) + 150,
    description: `Anesthetic medication for surgical procedures`,
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=400&fit=crop&crop=center',
    inStock: Math.random() > 0.05,
    prescription: true,
    dosage: `${Math.floor(Math.random() * 50) + 1}mg`
  });
}
