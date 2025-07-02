
import type { Product } from './productTypes';

export const antivirals: Product[] = [
  // Acyclovir - Zovirax (GSK)
  {
    id: 'zovirax-200-gsk',
    name: 'Zovirax 200mg',
    category: 'Antivirals',
    manufacturer: 'GSK',
    price: 285,
    description: 'Acyclovir 200mg for herpes simplex infections',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=400&fit=crop&crop=center',
    inStock: true,
    prescription: true,
    dosage: '200mg'
  },
  {
    id: 'zovirax-400-gsk',
    name: 'Zovirax 400mg',
    category: 'Antivirals',
    manufacturer: 'GSK',
    price: 485,
    description: 'Acyclovir 400mg for severe herpes infections',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=400&fit=crop&crop=center',
    inStock: true,
    prescription: true,
    dosage: '400mg'
  },
  // Oseltamivir - Tamiflu (Roche)
  {
    id: 'tamiflu-30-roche',
    name: 'Tamiflu 30mg',
    category: 'Antivirals',
    manufacturer: 'Roche',
    price: 685,
    description: 'Oseltamivir 30mg for influenza treatment',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=400&fit=crop&crop=center',
    inStock: true,
    prescription: true,
    dosage: '30mg'
  },
  {
    id: 'tamiflu-75-roche',
    name: 'Tamiflu 75mg',
    category: 'Antivirals',
    manufacturer: 'Roche',
    price: 1185,
    description: 'Oseltamivir 75mg for influenza prevention',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=400&fit=crop&crop=center',
    inStock: true,
    prescription: true,
    dosage: '75mg'
  },
  // Ribavirin - Copegus (Roche)
  {
    id: 'copegus-200-roche',
    name: 'Copegus 200mg',
    category: 'Antivirals',
    manufacturer: 'Roche',
    price: 485,
    description: 'Ribavirin 200mg for hepatitis C treatment',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=400&fit=crop&crop=center',
    inStock: true,
    prescription: true,
    dosage: '200mg'
  },
  {
    id: 'copegus-400-roche',
    name: 'Copegus 400mg',
    category: 'Antivirals',
    manufacturer: 'Roche',
    price: 785,
    description: 'Ribavirin 400mg for chronic hepatitis C',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=400&fit=crop&crop=center',
    inStock: true,
    prescription: true,
    dosage: '400mg'
  },
  // Valacyclovir - Valtrex (GSK)
  {
    id: 'valtrex-500-gsk',
    name: 'Valtrex 500mg',
    category: 'Antivirals',
    manufacturer: 'GSK',
    price: 785,
    description: 'Valacyclovir 500mg for herpes zoster',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=400&fit=crop&crop=center',
    inStock: true,
    prescription: true,
    dosage: '500mg'
  },
  {
    id: 'valtrex-1000-gsk',
    name: 'Valtrex 1000mg',
    category: 'Antivirals',
    manufacturer: 'GSK',
    price: 1285,
    description: 'Valacyclovir 1000mg for herpes suppression',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=400&fit=crop&crop=center',
    inStock: true,
    prescription: true,
    dosage: '1000mg'
  },
  // Ganciclovir - Cymevene (Roche)
  {
    id: 'cymevene-250-roche',
    name: 'Cymevene 250mg',
    category: 'Antivirals',
    manufacturer: 'Roche',
    price: 1485,
    description: 'Ganciclovir 250mg for CMV infections',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=400&fit=crop&crop=center',
    inStock: true,
    prescription: true,
    dosage: '250mg'
  },
  {
    id: 'cymevene-500-roche',
    name: 'Cymevene 500mg',
    category: 'Antivirals',
    manufacturer: 'Roche',
    price: 2485,
    description: 'Ganciclovir 500mg for severe CMV infections',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=400&fit=crop&crop=center',
    inStock: true,
    prescription: true,
    dosage: '500mg'
  },
  // Famciclovir - Famvir (Novartis)
  {
    id: 'famvir-125-novartis',
    name: 'Famvir 125mg',
    category: 'Antivirals',
    manufacturer: 'Novartis',
    price: 485,
    description: 'Famciclovir 125mg for herpes infections',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=400&fit=crop&crop=center',
    inStock: true,
    prescription: true,
    dosage: '125mg'
  },
  {
    id: 'famvir-250-novartis',
    name: 'Famvir 250mg',
    category: 'Antivirals',
    manufacturer: 'Novartis',
    price: 785,
    description: 'Famciclovir 250mg for herpes zoster treatment',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=400&fit=crop&crop=center',
    inStock: true,
    prescription: true,
    dosage: '250mg'
  },
  // Interferon alfa - Roferon-A (Roche)
  {
    id: 'roferon-3-roche',
    name: 'Roferon-A 3MIU',
    category: 'Antivirals',
    manufacturer: 'Roche',
    price: 2485,
    description: 'Interferon alfa-2a 3MIU for hepatitis B/C',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=400&fit=crop&crop=center',
    inStock: true,
    prescription: true,
    dosage: '3MIU'
  },
  {
    id: 'roferon-6-roche',
    name: 'Roferon-A 6MIU',
    category: 'Antivirals',
    manufacturer: 'Roche',
    price: 4285,
    description: 'Interferon alfa-2a 6MIU for chronic hepatitis',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=400&fit=crop&crop=center',
    inStock: true,
    prescription: true,
    dosage: '6MIU'
  },
  // Zanamivir - Relenza (GSK)
  {
    id: 'relenza-5-gsk',
    name: 'Relenza 5mg',
    category: 'Antivirals',
    manufacturer: 'GSK',
    price: 785,
    description: 'Zanamivir 5mg inhaler for influenza',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=400&fit=crop&crop=center',
    inStock: true,
    prescription: true,
    dosage: '5mg inhaler'
  },
  {
    id: 'relenza-rotadisk-gsk',
    name: 'Relenza Rotadisk',
    category: 'Antivirals',
    manufacturer: 'GSK',
    price: 985,
    description: 'Zanamivir rotadisk inhaler for flu treatment',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=400&fit=crop&crop=center',
    inStock: true,
    prescription: true,
    dosage: 'Rotadisk'
  },
  // Amantadine - Symmetrel (Endo)
  {
    id: 'symmetrel-100-endo',
    name: 'Symmetrel 100mg',
    category: 'Antivirals',
    manufacturer: 'Endo',
    price: 285,
    description: 'Amantadine 100mg for influenza A',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=400&fit=crop&crop=center',
    inStock: true,
    prescription: true,
    dosage: '100mg'
  },
  {
    id: 'symmetrel-syrup-endo',
    name: 'Symmetrel Syrup',
    category: 'Antivirals',
    manufacturer: 'Endo',
    price: 385,
    description: 'Amantadine syrup for pediatric flu treatment',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=400&fit=crop&crop=center',
    inStock: true,
    prescription: true,
    dosage: 'Syrup'
  },
  // Rimantadine - Flumadine (Forest)
  {
    id: 'flumadine-100-forest',
    name: 'Flumadine 100mg',
    category: 'Antivirals',
    manufacturer: 'Forest',
    price: 385,
    description: 'Rimantadine 100mg for influenza A prevention',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=400&fit=crop&crop=center',
    inStock: true,
    prescription: true,
    dosage: '100mg'
  },
  {
    id: 'flumadine-syrup-forest',
    name: 'Flumadine Syrup',
    category: 'Antivirals',
    manufacturer: 'Forest',
    price: 485,
    description: 'Rimantadine syrup for flu prevention in children',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=400&fit=crop&crop=center',
    inStock: true,
    prescription: true,
    dosage: 'Syrup'
  },
  // Penciclovir - Denavir (Novartis)
  {
    id: 'denavir-cream-novartis',
    name: 'Denavir 1% Cream',
    category: 'Antivirals',
    manufacturer: 'Novartis',
    price: 685,
    description: 'Penciclovir 1% cream for cold sores',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=400&fit=crop&crop=center',
    inStock: true,
    prescription: true,
    dosage: '1% cream'
  },
  {
    id: 'denavir-ointment-novartis',
    name: 'Denavir 1% Ointment',
    category: 'Antivirals',
    manufacturer: 'Novartis',
    price: 785,
    description: 'Penciclovir 1% ointment for herpes labialis',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=400&fit=crop&crop=center',
    inStock: true,
    prescription: true,
    dosage: '1% ointment'
  },
  // Valganciclovir - Valcyte (Roche)
  {
    id: 'valcyte-450-roche',
    name: 'Valcyte 450mg',
    category: 'Antivirals',
    manufacturer: 'Roche',
    price: 1785,
    description: 'Valganciclovir 450mg for CMV retinitis',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=400&fit=crop&crop=center',
    inStock: true,
    prescription: true,
    dosage: '450mg'
  },
  {
    id: 'valcyte-oral-solution-roche',
    name: 'Valcyte Oral Solution',
    category: 'Antivirals',
    manufacturer: 'Roche',
    price: 2285,
    description: 'Valganciclovir oral solution for pediatric CMV',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=400&fit=crop&crop=center',
    inStock: true,
    prescription: true,
    dosage: 'Oral solution'
  },
  // Cidofovir - Vistide (Gilead)
  {
    id: 'vistide-375-gilead',
    name: 'Vistide 375mg',
    category: 'Antivirals',
    manufacturer: 'Gilead',
    price: 3285,
    description: 'Cidofovir 375mg for CMV retinitis',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=400&fit=crop&crop=center',
    inStock: true,
    prescription: true,
    dosage: '375mg'
  },
  {
    id: 'vistide-injection-gilead',
    name: 'Vistide Injection',
    category: 'Antivirals',
    manufacturer: 'Gilead',
    price: 4285,
    description: 'Cidofovir injection for severe CMV infections',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=400&fit=crop&crop=center',
    inStock: true,
    prescription: true,
    dosage: 'Injection'
  }
];
