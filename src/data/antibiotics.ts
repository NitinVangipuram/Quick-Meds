
import type { Product } from './productTypes';

export const antibiotics: Product[] = [
  // Azithromycin - Zithromax (Pfizer)
  {
    id: 'zithromax-250-pfizer',
    name: 'Zithromax 250mg',
    category: 'Antibiotics',
    manufacturer: 'Pfizer',
    price: 185,
    description: 'Azithromycin 250mg for respiratory tract infections',
    image: 'https://images.unsplash.com/photo-1563213126-a4273aed2016?w=400&h=400&fit=crop&crop=center',
    inStock: true,
    prescription: true,
    dosage: '250mg'
  },
  {
    id: 'zithromax-500-pfizer',
    name: 'Zithromax 500mg',
    category: 'Antibiotics',
    manufacturer: 'Pfizer',
    price: 285,
    description: 'Azithromycin 500mg for severe bacterial infections',
    image: 'https://images.unsplash.com/photo-1563213126-a4273aed2016?w=400&h=400&fit=crop&crop=center',
    inStock: true,
    prescription: true,
    dosage: '500mg'
  },
  // Amoxicillin - Amoxil (GSK)
  {
    id: 'amoxil-250-gsk',
    name: 'Amoxil 250mg',
    category: 'Antibiotics',
    manufacturer: 'GSK',
    price: 95,
    description: 'Amoxicillin 250mg for bacterial infections',
    image: 'https://images.unsplash.com/photo-1563213126-a4273aed2016?w=400&h=400&fit=crop&crop=center',
    inStock: true,
    prescription: true,
    dosage: '250mg'
  },
  {
    id: 'amoxil-500-gsk',
    name: 'Amoxil 500mg',
    category: 'Antibiotics',
    manufacturer: 'GSK',
    price: 145,
    description: 'Amoxicillin 500mg for moderate to severe infections',
    image: 'https://images.unsplash.com/photo-1563213126-a4273aed2016?w=400&h=400&fit=crop&crop=center',
    inStock: true,
    prescription: true,
    dosage: '500mg'
  },
  // Ciprofloxacin - Ciplox (Cipla)
  {
    id: 'ciplox-250-cipla',
    name: 'Ciplox 250mg',
    category: 'Antibiotics',
    manufacturer: 'Cipla',
    price: 125,
    description: 'Ciprofloxacin 250mg for urinary tract infections',
    image: 'https://images.unsplash.com/photo-1563213126-a4273aed2016?w=400&h=400&fit=crop&crop=center',
    inStock: true,
    prescription: true,
    dosage: '250mg'
  },
  {
    id: 'ciplox-500-cipla',
    name: 'Ciplox 500mg',
    category: 'Antibiotics',
    manufacturer: 'Cipla',
    price: 185,
    description: 'Ciprofloxacin 500mg for severe bacterial infections',
    image: 'https://images.unsplash.com/photo-1563213126-a4273aed2016?w=400&h=400&fit=crop&crop=center',
    inStock: true,
    prescription: true,
    dosage: '500mg'
  },
  // Cephalexin - Cefalexin (Ranbaxy)
  {
    id: 'cefalexin-250-ranbaxy',
    name: 'Cefalexin 250mg',
    category: 'Antibiotics',
    manufacturer: 'Ranbaxy',
    price: 145,
    description: 'Cephalexin 250mg for skin and soft tissue infections',
    image: 'https://images.unsplash.com/photo-1563213126-a4273aed2016?w=400&h=400&fit=crop&crop=center',
    inStock: true,
    prescription: true,
    dosage: '250mg'
  },
  {
    id: 'cefalexin-500-ranbaxy',
    name: 'Cefalexin 500mg',
    category: 'Antibiotics',
    manufacturer: 'Ranbaxy',
    price: 225,
    description: 'Cephalexin 500mg for moderate infections',
    image: 'https://images.unsplash.com/photo-1563213126-a4273aed2016?w=400&h=400&fit=crop&crop=center',
    inStock: true,
    prescription: true,
    dosage: '500mg'
  },
  // Clarithromycin - Clariwin (Alkem)
  {
    id: 'clariwin-250-alkem',
    name: 'Clariwin 250mg',
    category: 'Antibiotics',
    manufacturer: 'Alkem',
    price: 285,
    description: 'Clarithromycin 250mg for respiratory infections',
    image: 'https://images.unsplash.com/photo-1563213126-a4273aed2016?w=400&h=400&fit=crop&crop=center',
    inStock: true,
    prescription: true,
    dosage: '250mg'
  },
  {
    id: 'clariwin-500-alkem',
    name: 'Clariwin 500mg',
    category: 'Antibiotics',
    manufacturer: 'Alkem',
    price: 485,
    description: 'Clarithromycin 500mg for severe respiratory infections',
    image: 'https://images.unsplash.com/photo-1563213126-a4273aed2016?w=400&h=400&fit=crop&crop=center',
    inStock: true,
    prescription: true,
    dosage: '500mg'
  },
  // Doxycycline - Doxid (Cipla)
  {
    id: 'doxid-100-cipla',
    name: 'Doxid 100mg',
    category: 'Antibiotics',
    manufacturer: 'Cipla',
    price: 95,
    description: 'Doxycycline 100mg for acne and bacterial infections',
    image: 'https://images.unsplash.com/photo-1563213126-a4273aed2016?w=400&h=400&fit=crop&crop=center',
    inStock: true,
    prescription: true,
    dosage: '100mg'
  },
  {
    id: 'doxid-200-cipla',
    name: 'Doxid 200mg',
    category: 'Antibiotics',
    manufacturer: 'Cipla',
    price: 165,
    description: 'Doxycycline 200mg for severe infections',
    image: 'https://images.unsplash.com/photo-1563213126-a4273aed2016?w=400&h=400&fit=crop&crop=center',
    inStock: true,
    prescription: true,
    dosage: '200mg'
  },
  // Erythromycin - Erythrocin (Abbott)
  {
    id: 'erythrocin-250-abbott',
    name: 'Erythrocin 250mg',
    category: 'Antibiotics',
    manufacturer: 'Abbott',
    price: 125,
    description: 'Erythromycin 250mg for respiratory tract infections',
    image: 'https://images.unsplash.com/photo-1563213126-a4273aed2016?w=400&h=400&fit=crop&crop=center',
    inStock: true,
    prescription: true,
    dosage: '250mg'
  },
  {
    id: 'erythrocin-500-abbott',
    name: 'Erythrocin 500mg',
    category: 'Antibiotics',
    manufacturer: 'Abbott',
    price: 195,
    description: 'Erythromycin 500mg for severe bacterial infections',
    image: 'https://images.unsplash.com/photo-1563213126-a4273aed2016?w=400&h=400&fit=crop&crop=center',
    inStock: true,
    prescription: true,
    dosage: '500mg'
  },
  // Levofloxacin - Levaquin (Sun Pharma)
  {
    id: 'levaquin-250-sun',
    name: 'Levaquin 250mg',
    category: 'Antibiotics',
    manufacturer: 'Sun Pharma',
    price: 185,
    description: 'Levofloxacin 250mg for respiratory infections',
    image: 'https://images.unsplash.com/photo-1563213126-a4273aed2016?w=400&h=400&fit=crop&crop=center',
    inStock: true,
    prescription: true,
    dosage: '250mg'
  },
  {
    id: 'levaquin-500-sun',
    name: 'Levaquin 500mg',
    category: 'Antibiotics',
    manufacturer: 'Sun Pharma',
    price: 285,
    description: 'Levofloxacin 500mg for severe infections',
    image: 'https://images.unsplash.com/photo-1563213126-a4273aed2016?w=400&h=400&fit=crop&crop=center',
    inStock: true,
    prescription: true,
    dosage: '500mg'
  },
  // Metronidazole - Flagyl (Abbott)
  {
    id: 'flagyl-400-abbott',
    name: 'Flagyl 400mg',
    category: 'Antibiotics',
    manufacturer: 'Abbott',
    price: 85,
    description: 'Metronidazole 400mg for anaerobic infections',
    image: 'https://images.unsplash.com/photo-1563213126-a4273aed2016?w=400&h=400&fit=crop&crop=center',
    inStock: true,
    prescription: true,
    dosage: '400mg'
  },
  {
    id: 'flagyl-800-abbott',
    name: 'Flagyl 800mg',
    category: 'Antibiotics',
    manufacturer: 'Abbott',
    price: 145,
    description: 'Metronidazole 800mg for severe anaerobic infections',
    image: 'https://images.unsplash.com/photo-1563213126-a4273aed2016?w=400&h=400&fit=crop&crop=center',
    inStock: true,
    prescription: true,
    dosage: '800mg'
  },
  // Norfloxacin - Norflox (Cipla)
  {
    id: 'norflox-400-cipla',
    name: 'Norflox 400mg',
    category: 'Antibiotics',
    manufacturer: 'Cipla',
    price: 125,
    description: 'Norfloxacin 400mg for urinary tract infections',
    image: 'https://images.unsplash.com/photo-1563213126-a4273aed2016?w=400&h=400&fit=crop&crop=center',
    inStock: true,
    prescription: true,
    dosage: '400mg'
  },
  {
    id: 'norflox-800-cipla',
    name: 'Norflox 800mg',
    category: 'Antibiotics',
    manufacturer: 'Cipla',
    price: 185,
    description: 'Norfloxacin 800mg for severe urinary infections',
    image: 'https://images.unsplash.com/photo-1563213126-a4273aed2016?w=400&h=400&fit=crop&crop=center',
    inStock: true,
    prescription: true,
    dosage: '800mg'
  },
  // Ofloxacin - Oflox (Cipla)
  {
    id: 'oflox-200-cipla',
    name: 'Oflox 200mg',
    category: 'Antibiotics',
    manufacturer: 'Cipla',
    price: 145,
    description: 'Ofloxacin 200mg for bacterial infections',
    image: 'https://images.unsplash.com/photo-1563213126-a4273aed2016?w=400&h=400&fit=crop&crop=center',
    inStock: true,
    prescription: true,
    dosage: '200mg'
  },
  {
    id: 'oflox-400-cipla',
    name: 'Oflox 400mg',
    category: 'Antibiotics',
    manufacturer: 'Cipla',
    price: 225,
    description: 'Ofloxacin 400mg for severe bacterial infections',
    image: 'https://images.unsplash.com/photo-1563213126-a4273aed2016?w=400&h=400&fit=crop&crop=center',
    inStock: true,
    prescription: true,
    dosage: '400mg'
  },
  // Penicillin - Crystapen (GSK)
  {
    id: 'crystapen-250-gsk',
    name: 'Crystapen 250mg',
    category: 'Antibiotics',
    manufacturer: 'GSK',
    price: 65,
    description: 'Penicillin 250mg for streptococcal infections',
    image: 'https://images.unsplash.com/photo-1563213126-a4273aed2016?w=400&h=400&fit=crop&crop=center',
    inStock: true,
    prescription: true,
    dosage: '250mg'
  },
  {
    id: 'crystapen-500-gsk',
    name: 'Crystapen 500mg',
    category: 'Antibiotics',
    manufacturer: 'GSK',
    price: 95,
    description: 'Penicillin 500mg for severe streptococcal infections',
    image: 'https://images.unsplash.com/photo-1563213126-a4273aed2016?w=400&h=400&fit=crop&crop=center',
    inStock: true,
    prescription: true,
    dosage: '500mg'
  },
  // Trimethoprim-Sulfamethoxazole - Bactrim (Roche)
  {
    id: 'bactrim-480-roche',
    name: 'Bactrim 480mg',
    category: 'Antibiotics',
    manufacturer: 'Roche',
    price: 145,
    description: 'Co-trimoxazole 480mg for UTI and respiratory infections',
    image: 'https://images.unsplash.com/photo-1563213126-a4273aed2016?w=400&h=400&fit=crop&crop=center',
    inStock: true,
    prescription: true,
    dosage: '480mg'
  },
  {
    id: 'bactrim-960-roche',
    name: 'Bactrim 960mg',
    category: 'Antibiotics',
    manufacturer: 'Roche',
    price: 225,
    description: 'Co-trimoxazole 960mg for severe infections',
    image: 'https://images.unsplash.com/photo-1563213126-a4273aed2016?w=400&h=400&fit=crop&crop=center',
    inStock: true,
    prescription: true,
    dosage: '960mg'
  },
  // Cloxacillin - Cloxacillin (Alkem)
  {
    id: 'cloxacillin-250-alkem',
    name: 'Cloxacillin 250mg',
    category: 'Antibiotics',
    manufacturer: 'Alkem',
    price: 85,
    description: 'Cloxacillin 250mg for staphylococcal infections',
    image: 'https://images.unsplash.com/photo-1563213126-a4273aed2016?w=400&h=400&fit=crop&crop=center',
    inStock: true,
    prescription: true,
    dosage: '250mg'
  },
  {
    id: 'cloxacillin-500-alkem',
    name: 'Cloxacillin 500mg',
    category: 'Antibiotics',
    manufacturer: 'Alkem',
    price: 145,
    description: 'Cloxacillin 500mg for severe staphylococcal infections',
    image: 'https://images.unsplash.com/photo-1563213126-a4273aed2016?w=400&h=400&fit=crop&crop=center',
    inStock: true,
    prescription: true,
    dosage: '500mg'
  }
];
