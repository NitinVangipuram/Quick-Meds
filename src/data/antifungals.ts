
import type { Product } from './productTypes';

export const antifungals: Product[] = [
  // Fluconazole - Diflucan (Pfizer)
  {
    id: 'diflucan-50-pfizer',
    name: 'Diflucan 50mg',
    category: 'Antifungals',
    manufacturer: 'Pfizer',
    price: 185,
    description: 'Fluconazole 50mg for fungal infections',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=400&fit=crop&crop=center',
    inStock: true,
    prescription: true,
    dosage: '50mg'
  },
  {
    id: 'diflucan-150-pfizer',
    name: 'Diflucan 150mg',
    category: 'Antifungals',
    manufacturer: 'Pfizer',
    price: 385,
    description: 'Fluconazole 150mg for vaginal candidiasis',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=400&fit=crop&crop=center',
    inStock: true,
    prescription: true,
    dosage: '150mg'
  },
  // Itraconazole - Sporanox (Janssen)
  {
    id: 'sporanox-100-janssen',
    name: 'Sporanox 100mg',
    category: 'Antifungals',
    manufacturer: 'Janssen',
    price: 285,
    description: 'Itraconazole 100mg for systemic fungal infections',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=400&fit=crop&crop=center',
    inStock: true,
    prescription: true,
    dosage: '100mg'
  },
  {
    id: 'sporanox-200-janssen',
    name: 'Sporanox 200mg',
    category: 'Antifungals',
    manufacturer: 'Janssen',
    price: 485,
    description: 'Itraconazole 200mg for severe fungal infections',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=400&fit=crop&crop=center',
    inStock: true,
    prescription: true,
    dosage: '200mg'
  },
  // Ketoconazole - Nizoral (Janssen)
  {
    id: 'nizoral-200-janssen',
    name: 'Nizoral 200mg',
    category: 'Antifungals',
    manufacturer: 'Janssen',
    price: 225,
    description: 'Ketoconazole 200mg for fungal infections',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=400&fit=crop&crop=center',
    inStock: true,
    prescription: true,
    dosage: '200mg'
  },
  {
    id: 'nizoral-shampoo-janssen',
    name: 'Nizoral 2% Shampoo',
    category: 'Antifungals',
    manufacturer: 'Janssen',
    price: 345,
    description: 'Ketoconazole 2% shampoo for dandruff and scalp infections',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=400&fit=crop&crop=center',
    inStock: true,
    prescription: false,
    dosage: '2% shampoo'
  },
  // Terbinafine - Lamisil (Novartis)
  {
    id: 'lamisil-250-novartis',
    name: 'Lamisil 250mg',
    category: 'Antifungals',
    manufacturer: 'Novartis',
    price: 485,
    description: 'Terbinafine 250mg for nail fungal infections',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=400&fit=crop&crop=center',
    inStock: true,
    prescription: true,
    dosage: '250mg'
  },
  {
    id: 'lamisil-cream-novartis',
    name: 'Lamisil 1% Cream',
    category: 'Antifungals',
    manufacturer: 'Novartis',
    price: 285,
    description: 'Terbinafine 1% cream for skin fungal infections',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=400&fit=crop&crop=center',
    inStock: true,
    prescription: false,
    dosage: '1% cream'
  },
  // Griseofulvin - Grisovin (GSK)
  {
    id: 'grisovin-250-gsk',
    name: 'Grisovin 250mg',
    category: 'Antifungals',
    manufacturer: 'GSK',
    price: 145,
    description: 'Griseofulvin 250mg for dermatophyte infections',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=400&fit=crop&crop=center',
    inStock: true,
    prescription: true,
    dosage: '250mg'
  },
  {
    id: 'grisovin-500-gsk',
    name: 'Grisovin 500mg',
    category: 'Antifungals',
    manufacturer: 'GSK',
    price: 245,
    description: 'Griseofulvin 500mg for extensive fungal infections',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=400&fit=crop&crop=center',
    inStock: true,
    prescription: true,
    dosage: '500mg'
  },
  // Nystatin - Mycostatin (Pfizer)
  {
    id: 'mycostatin-tablet-pfizer',
    name: 'Mycostatin Tablet',
    category: 'Antifungals',
    manufacturer: 'Pfizer',
    price: 125,
    description: 'Nystatin tablet for oral candidiasis',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=400&fit=crop&crop=center',
    inStock: true,
    prescription: true,
    dosage: '500,000 units'
  },
  {
    id: 'mycostatin-cream-pfizer',
    name: 'Mycostatin Cream',
    category: 'Antifungals',
    manufacturer: 'Pfizer',
    price: 165,
    description: 'Nystatin cream for skin yeast infections',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=400&fit=crop&crop=center',
    inStock: true,
    prescription: true,
    dosage: 'Topical cream'
  },
  // Amphotericin B - Fungizone (Bristol Myers Squibb)
  {
    id: 'fungizone-50-bms',
    name: 'Fungizone 50mg',
    category: 'Antifungals',
    manufacturer: 'Bristol Myers Squibb',
    price: 1285,
    description: 'Amphotericin B 50mg for systemic fungal infections',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=400&fit=crop&crop=center',
    inStock: true,
    prescription: true,
    dosage: '50mg'
  },
  {
    id: 'fungizone-100-bms',
    name: 'Fungizone 100mg',
    category: 'Antifungals',
    manufacturer: 'Bristol Myers Squibb',
    price: 2285,
    description: 'Amphotericin B 100mg for severe systemic infections',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=400&fit=crop&crop=center',
    inStock: true,
    prescription: true,
    dosage: '100mg'
  },
  // Miconazole - Daktarin (Janssen)
  {
    id: 'daktarin-cream-janssen',
    name: 'Daktarin 2% Cream',
    category: 'Antifungals',
    manufacturer: 'Janssen',
    price: 185,
    description: 'Miconazole 2% cream for skin fungal infections',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=400&fit=crop&crop=center',
    inStock: true,
    prescription: false,
    dosage: '2% cream'
  },
  {
    id: 'daktarin-powder-janssen',
    name: 'Daktarin 2% Powder',
    category: 'Antifungals',
    manufacturer: 'Janssen',
    price: 225,
    description: 'Miconazole 2% powder for athlete\'s foot',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=400&fit=crop&crop=center',
    inStock: true,
    prescription: false,
    dosage: '2% powder'
  },
  // Clotrimazole - Candid (Glenmark)
  {
    id: 'candid-cream-glenmark',
    name: 'Candid 1% Cream',
    category: 'Antifungals',
    manufacturer: 'Glenmark',
    price: 125,
    description: 'Clotrimazole 1% cream for skin fungal infections',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=400&fit=crop&crop=center',
    inStock: true,
    prescription: false,
    dosage: '1% cream'
  },
  {
    id: 'candid-powder-glenmark',
    name: 'Candid 1% Powder',
    category: 'Antifungals',
    manufacturer: 'Glenmark',
    price: 145,
    description: 'Clotrimazole 1% powder for fungal infections',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=400&fit=crop&crop=center',
    inStock: true,
    prescription: false,
    dosage: '1% powder'
  },
  // Voriconazole - Vfend (Pfizer)
  {
    id: 'vfend-50-pfizer',
    name: 'Vfend 50mg',
    category: 'Antifungals',
    manufacturer: 'Pfizer',
    price: 785,
    description: 'Voriconazole 50mg for invasive fungal infections',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=400&fit=crop&crop=center',
    inStock: true,
    prescription: true,
    dosage: '50mg'
  },
  {
    id: 'vfend-200-pfizer',
    name: 'Vfend 200mg',
    category: 'Antifungals',
    manufacturer: 'Pfizer',
    price: 1485,
    description: 'Voriconazole 200mg for severe fungal infections',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=400&fit=crop&crop=center',
    inStock: true,
    prescription: true,
    dosage: '200mg'
  },
  // Posaconazole - Noxafil (MSD)
  {
    id: 'noxafil-100-msd',
    name: 'Noxafil 100mg',
    category: 'Antifungals',
    manufacturer: 'MSD',
    price: 1185,
    description: 'Posaconazole 100mg for fungal prophylaxis',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=400&fit=crop&crop=center',
    inStock: true,
    prescription: true,
    dosage: '100mg'
  },
  {
    id: 'noxafil-suspension-msd',
    name: 'Noxafil Oral Suspension',
    category: 'Antifungals',
    manufacturer: 'MSD',
    price: 1585,
    description: 'Posaconazole oral suspension for fungal infections',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=400&fit=crop&crop=center',
    inStock: true,
    prescription: true,
    dosage: 'Oral suspension'
  },
  // Caspofungin - Cancidas (MSD)
  {
    id: 'cancidas-50-msd',
    name: 'Cancidas 50mg',
    category: 'Antifungals',
    manufacturer: 'MSD',
    price: 2485,
    description: 'Caspofungin 50mg for invasive candidiasis',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=400&fit=crop&crop=center',
    inStock: true,
    prescription: true,
    dosage: '50mg'
  },
  {
    id: 'cancidas-70-msd',
    name: 'Cancidas 70mg',
    category: 'Antifungals',
    manufacturer: 'MSD',
    price: 3285,
    description: 'Caspofungin 70mg for severe fungal infections',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=400&fit=crop&crop=center',
    inStock: true,
    prescription: true,
    dosage: '70mg'
  },
  // Tolnaftate - Tinactin (Bayer)
  {
    id: 'tinactin-cream-bayer',
    name: 'Tinactin 1% Cream',
    category: 'Antifungals',
    manufacturer: 'Bayer',
    price: 185,
    description: 'Tolnaftate 1% cream for athlete\'s foot',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=400&fit=crop&crop=center',
    inStock: true,
    prescription: false,
    dosage: '1% cream'
  },
  {
    id: 'tinactin-powder-bayer',
    name: 'Tinactin 1% Powder',
    category: 'Antifungals',
    manufacturer: 'Bayer',
    price: 205,
    description: 'Tolnaftate 1% powder for fungal skin infections',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=400&fit=crop&crop=center',
    inStock: true,
    prescription: false,
    dosage: '1% powder'
  }
];
