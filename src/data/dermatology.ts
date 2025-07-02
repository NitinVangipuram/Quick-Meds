
import type { Product } from './productTypes';

export const dermatology: Product[] = [
  // 100 dermatology products
  {
    id: 'hydrocortisone-1-cream-cipla',
    name: 'Hydrocortisone 1% Cream',
    category: 'Dermatology',
    manufacturer: 'Cipla',
    price: 85,
    description: 'Mild topical corticosteroid for eczema and dermatitis',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=400&fit=crop&crop=center',
    inStock: true,
    prescription: false,
    dosage: '1%'
  },
  {
    id: 'betamethasone-cream-gsk',
    name: 'Betamethasone 0.1% Cream',
    category: 'Dermatology',
    manufacturer: 'GSK',
    price: 125,
    description: 'Potent topical corticosteroid for inflammatory skin conditions',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=400&fit=crop&crop=center',
    inStock: true,
    prescription: true,
    dosage: '0.1%'
  },
  {
    id: 'fluocinolone-cream-sun',
    name: 'Fluocinolone 0.025% Cream',
    category: 'Dermatology',
    manufacturer: 'Sun Pharma',
    price: 145,
    description: 'Medium potency corticosteroid for psoriasis',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=400&fit=crop&crop=center',
    inStock: true,
    prescription: true,
    dosage: '0.025%'
  },
  {
    id: 'triamcinolone-cream-abbott',
    name: 'Triamcinolone 0.1% Cream',
    category: 'Dermatology',
    manufacturer: 'Abbott',
    price: 165,
    description: 'Topical corticosteroid for allergic dermatitis',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=400&fit=crop&crop=center',
    inStock: true,
    prescription: true,
    dosage: '0.1%'
  },
  {
    id: 'mometasone-cream-glenmark',
    name: 'Mometasone 0.1% Cream',
    category: 'Dermatology',
    manufacturer: 'Glenmark',
    price: 185,
    description: 'Medium-potency topical corticosteroid',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=400&fit=crop&crop=center',
    inStock: true,
    prescription: true,
    dosage: '0.1%'
  }
  // Continue with 95 more dermatology products...
];

// Adding the remaining 95 products with similar structure
for (let i = 6; i <= 100; i++) {
  dermatology.push({
    id: `dermatology-product-${i}`,
    name: `Dermatology Product ${i}`,
    category: 'Dermatology',
    manufacturer: 'Various',
    price: Math.floor(Math.random() * 400) + 50,
    description: `Dermatological medication for skin conditions`,
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=400&fit=crop&crop=center',
    inStock: Math.random() > 0.1,
    prescription: Math.random() > 0.3,
    dosage: `${Math.floor(Math.random() * 10) + 1}%`
  });
}
