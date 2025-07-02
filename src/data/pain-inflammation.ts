
import type { Product } from './productTypes';

export const painInflammation: Product[] = [
  // Diclofenac - Voltaren (Novartis)
  {
    id: 'voltaren-25-novartis',
    name: 'Voltaren 25mg',
    category: 'Pain & Inflammation',
    manufacturer: 'Novartis',
    price: 145,
    description: 'Diclofenac 25mg for mild to moderate pain',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=400&fit=crop&crop=center',
    inStock: true,
    prescription: true,
    dosage: '25mg'
  },
  {
    id: 'voltaren-50-novartis',
    name: 'Voltaren 50mg',
    category: 'Pain & Inflammation',
    manufacturer: 'Novartis',
    price: 225,
    description: 'Diclofenac 50mg for moderate to severe pain',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=400&fit=crop&crop=center',
    inStock: true,
    prescription: true,
    dosage: '50mg'
  },
  // Ibuprofen - Brufen (Abbott)
  {
    id: 'brufen-200-abbott',
    name: 'Brufen 200mg',
    category: 'Pain & Inflammation',
    manufacturer: 'Abbott',
    price: 85,
    description: 'Ibuprofen 200mg for pain and fever relief',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=400&fit=crop&crop=center',
    inStock: true,
    prescription: false,
    dosage: '200mg'
  },
  {
    id: 'brufen-400-abbott',
    name: 'Brufen 400mg',
    category: 'Pain & Inflammation',
    manufacturer: 'Abbott',
    price: 125,
    description: 'Ibuprofen 400mg for inflammation and pain',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=400&fit=crop&crop=center',
    inStock: true,
    prescription: false,
    dosage: '400mg'
  },
  // Naproxen - Naprosyn (Roche)
  {
    id: 'naprosyn-250-roche',
    name: 'Naprosyn 250mg',
    category: 'Pain & Inflammation',
    manufacturer: 'Roche',
    price: 165,
    description: 'Naproxen 250mg for arthritis and pain',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=400&fit=crop&crop=center',
    inStock: true,
    prescription: true,
    dosage: '250mg'
  },
  {
    id: 'naprosyn-500-roche',
    name: 'Naprosyn 500mg',
    category: 'Pain & Inflammation',
    manufacturer: 'Roche',
    price: 285,
    description: 'Naproxen 500mg for severe inflammation',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=400&fit=crop&crop=center',
    inStock: true,
    prescription: true,
    dosage: '500mg'
  },
  // Celecoxib - Celebrex (Pfizer)
  {
    id: 'celebrex-100-pfizer',
    name: 'Celebrex 100mg',
    category: 'Pain & Inflammation',
    manufacturer: 'Pfizer',
    price: 485,
    description: 'Celecoxib 100mg COX-2 inhibitor for arthritis',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=400&fit=crop&crop=center',
    inStock: true,
    prescription: true,
    dosage: '100mg'
  },
  {
    id: 'celebrex-200-pfizer',
    name: 'Celebrex 200mg',
    category: 'Pain & Inflammation',
    manufacturer: 'Pfizer',
    price: 785,
    description: 'Celecoxib 200mg for osteoarthritis',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=400&fit=crop&crop=center',
    inStock: true,
    prescription: true,
    dosage: '200mg'
  },
  // Indomethacin - Indocin (MSD)
  {
    id: 'indocin-25-msd',
    name: 'Indocin 25mg',
    category: 'Pain & Inflammation',
    manufacturer: 'MSD',
    price: 185,
    description: 'Indomethacin 25mg for acute gout and arthritis',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=400&fit=crop&crop=center',
    inStock: true,
    prescription: true,
    dosage: '25mg'
  },
  {
    id: 'indocin-50-msd',
    name: 'Indocin 50mg',
    category: 'Pain & Inflammation',
    manufacturer: 'MSD',
    price: 285,
    description: 'Indomethacin 50mg for severe inflammatory conditions',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=400&fit=crop&crop=center',
    inStock: true,
    prescription: true,
    dosage: '50mg'
  },
  // Piroxicam - Feldene (Pfizer)
  {
    id: 'feldene-10-pfizer',
    name: 'Feldene 10mg',
    category: 'Pain & Inflammation',
    manufacturer: 'Pfizer',
    price: 225,
    description: 'Piroxicam 10mg for rheumatoid arthritis',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=400&fit=crop&crop=center',
    inStock: true,
    prescription: true,
    dosage: '10mg'
  },
  {
    id: 'feldene-20-pfizer',
    name: 'Feldene 20mg',
    category: 'Pain & Inflammation',
    manufacturer: 'Pfizer',
    price: 385,
    description: 'Piroxicam 20mg for osteoarthritis',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=400&fit=crop&crop=center',
    inStock: true,
    prescription: true,
    dosage: '20mg'
  },
  // Meloxicam - Mobic (Boehringer Ingelheim)
  {
    id: 'mobic-7-5-boehringer',
    name: 'Mobic 7.5mg',
    category: 'Pain & Inflammation',
    manufacturer: 'Boehringer Ingelheim',
    price: 285,
    description: 'Meloxicam 7.5mg for arthritis pain',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=400&fit=crop&crop=center',
    inStock: true,
    prescription: true,
    dosage: '7.5mg'
  },
  {
    id: 'mobic-15-boehringer',
    name: 'Mobic 15mg',
    category: 'Pain & Inflammation',
    manufacturer: 'Boehringer Ingelheim',
    price: 485,
    description: 'Meloxicam 15mg for severe arthritis',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=400&fit=crop&crop=center',
    inStock: true,
    prescription: true,
    dosage: '15mg'
  },
  // Ketorolac - Toradol (Roche)
  {
    id: 'toradol-10-roche',
    name: 'Toradol 10mg',
    category: 'Pain & Inflammation',
    manufacturer: 'Roche',
    price: 385,
    description: 'Ketorolac 10mg for moderate to severe pain',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=400&fit=crop&crop=center',
    inStock: true,
    prescription: true,
    dosage: '10mg'
  },
  {
    id: 'toradol-injection-roche',
    name: 'Toradol Injection',
    category: 'Pain & Inflammation',
    manufacturer: 'Roche',
    price: 585,
    description: 'Ketorolac injection for acute pain management',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=400&fit=crop&crop=center',
    inStock: true,
    prescription: true,
    dosage: 'Injection'
  },
  // Aspirin - Disprin (Reckitt Benckiser)
  {
    id: 'disprin-325-reckitt',
    name: 'Disprin 325mg',
    category: 'Pain & Inflammation',
    manufacturer: 'Reckitt Benckiser',
    price: 45,
    description: 'Aspirin 325mg for pain and fever relief',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=400&fit=crop&crop=center',
    inStock: true,
    prescription: false,
    dosage: '325mg'
  },
  {
    id: 'disprin-75-reckitt',
    name: 'Disprin 75mg',
    category: 'Pain & Inflammation',
    manufacturer: 'Reckitt Benckiser',
    price: 35,
    description: 'Low-dose aspirin 75mg for cardioprotection',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=400&fit=crop&crop=center',
    inStock: true,
    prescription: false,
    dosage: '75mg'
  },
  // Paracetamol - Panadol (GSK)
  {
    id: 'panadol-500-gsk',
    name: 'Panadol 500mg',
    category: 'Pain & Inflammation',
    manufacturer: 'GSK',
    price: 65,
    description: 'Paracetamol 500mg for pain and fever',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=400&fit=crop&crop=center',
    inStock: true,
    prescription: false,
    dosage: '500mg'
  },
  {
    id: 'panadol-extra-gsk',
    name: 'Panadol Extra',
    category: 'Pain & Inflammation',
    manufacturer: 'GSK',
    price: 85,
    description: 'Paracetamol 500mg + Caffeine 65mg for enhanced pain relief',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=400&fit=crop&crop=center',
    inStock: true,
    prescription: false,
    dosage: '500mg+65mg'
  },
  // Tramadol - Ultram (Janssen)
  {
    id: 'ultram-50-janssen',
    name: 'Ultram 50mg',
    category: 'Pain & Inflammation',
    manufacturer: 'Janssen',
    price: 285,
    description: 'Tramadol 50mg for moderate pain',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=400&fit=crop&crop=center',
    inStock: true,
    prescription: true,
    dosage: '50mg'
  },
  {
    id: 'ultram-100-janssen',
    name: 'Ultram 100mg',
    category: 'Pain & Inflammation',
    manufacturer: 'Janssen',
    price: 485,
    description: 'Tramadol 100mg for severe pain',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=400&fit=crop&crop=center',
    inStock: true,
    prescription: true,
    dosage: '100mg'
  },
  // Etoricoxib - Arcoxia (MSD)
  {
    id: 'arcoxia-60-msd',
    name: 'Arcoxia 60mg',
    category: 'Pain & Inflammation',
    manufacturer: 'MSD',
    price: 385,
    description: 'Etoricoxib 60mg for osteoarthritis pain',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=400&fit=crop&crop=center',
    inStock: true,
    prescription: true,
    dosage: '60mg'
  },
  {
    id: 'arcoxia-90-msd',
    name: 'Arcoxia 90mg',
    category: 'Pain & Inflammation',
    manufacturer: 'MSD',
    price: 585,
    description: 'Etoricoxib 90mg for rheumatoid arthritis',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=400&fit=crop&crop=center',
    inStock: true,
    prescription: true,
    dosage: '90mg'
  },
  // Nimesulide - Nise (Dr. Reddy's)
  {
    id: 'nise-100-drreddy',
    name: 'Nise 100mg',
    category: 'Pain & Inflammation',
    manufacturer: 'Dr. Reddy\'s',
    price: 125,
    description: 'Nimesulide 100mg for pain and inflammation',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=400&fit=crop&crop=center',
    inStock: true,
    prescription: true,
    dosage: '100mg'
  },
  {
    id: 'nise-gel-drreddy',
    name: 'Nise Gel',
    category: 'Pain & Inflammation',
    manufacturer: 'Dr. Reddy\'s',
    price: 145,
    description: 'Nimesulide gel for topical pain relief',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=400&fit=crop&crop=center',
    inStock: true,
    prescription: true,
    dosage: 'Topical gel'
  },
  // Aceclofenac - Hifenac (Intas)
  {
    id: 'hifenac-100-intas',
    name: 'Hifenac 100mg',
    category: 'Pain & Inflammation',
    manufacturer: 'Intas',
    price: 165,
    description: 'Aceclofenac 100mg for musculoskeletal pain',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=400&fit=crop&crop=center',
    inStock: true,
    prescription: true,
    dosage: '100mg'
  },
  {
    id: 'hifenac-sr-intas',
    name: 'Hifenac SR 200mg',
    category: 'Pain & Inflammation',
    manufacturer: 'Intas',
    price: 285,
    description: 'Aceclofenac SR 200mg sustained release',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=400&fit=crop&crop=center',
    inStock: true,
    prescription: true,
    dosage: '200mg SR'
  }
];
