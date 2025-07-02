
import type { Product } from './productTypes';

export const allergy: Product[] = [
  // Cetirizine - Zyrtec (UCB)
  {
    id: 'zyrtec-5-ucb',
    name: 'Zyrtec 5mg',
    category: 'Allergy',
    manufacturer: 'UCB',
    price: 125,
    description: 'Cetirizine 5mg for allergic rhinitis',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=400&fit=crop&crop=center',
    inStock: true,
    prescription: false,
    dosage: '5mg'
  },
  {
    id: 'zyrtec-10-ucb',
    name: 'Zyrtec 10mg',
    category: 'Allergy',
    manufacturer: 'UCB',
    price: 185,
    description: 'Cetirizine 10mg for chronic urticaria',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=400&fit=crop&crop=center',
    inStock: true,
    prescription: false,
    dosage: '10mg'
  },
  // Loratadine - Claritin (Bayer)
  {
    id: 'claritin-10-bayer',
    name: 'Claritin 10mg',
    category: 'Allergy',
    manufacturer: 'Bayer',
    price: 145,
    description: 'Loratadine 10mg for seasonal allergies',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=400&fit=crop&crop=center',
    inStock: true,
    prescription: false,
    dosage: '10mg'
  },
  {
    id: 'claritin-syrup-bayer',
    name: 'Claritin Syrup',
    category: 'Allergy',
    manufacturer: 'Bayer',
    price: 185,
    description: 'Loratadine syrup for pediatric allergies',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=400&fit=crop&crop=center',
    inStock: true,
    prescription: false,
    dosage: 'Syrup'
  },
  // Fexofenadine - Allegra (Sanofi)
  {
    id: 'allegra-60-sanofi',
    name: 'Allegra 60mg',
    category: 'Allergy',
    manufacturer: 'Sanofi',
    price: 165,
    description: 'Fexofenadine 60mg for allergic rhinitis',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=400&fit=crop&crop=center',
    inStock: true,
    prescription: false,
    dosage: '60mg'
  },
  {
    id: 'allegra-180-sanofi',
    name: 'Allegra 180mg',
    category: 'Allergy',
    manufacturer: 'Sanofi',
    price: 245,
    description: 'Fexofenadine 180mg for chronic urticaria',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=400&fit=crop&crop=center',
    inStock: true,
    prescription: false,
    dosage: '180mg'
  },
  // Levocetirizine - Xyzal (UCB)
  {
    id: 'xyzal-2-5-ucb',
    name: 'Xyzal 2.5mg',
    category: 'Allergy',
    manufacturer: 'UCB',
    price: 145,
    description: 'Levocetirizine 2.5mg for pediatric allergies',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=400&fit=crop&crop=center',
    inStock: true,
    prescription: false,
    dosage: '2.5mg'
  },
  {
    id: 'xyzal-5-ucb',
    name: 'Xyzal 5mg',
    category: 'Allergy',
    manufacturer: 'UCB',
    price: 225,
    description: 'Levocetirizine 5mg for allergic rhinitis',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=400&fit=crop&crop=center',
    inStock: true,
    prescription: false,
    dosage: '5mg'
  },
  // Desloratadine - Clarinex (MSD)
  {
    id: 'clarinex-2-5-msd',
    name: 'Clarinex 2.5mg',
    category: 'Allergy',
    manufacturer: 'MSD',
    price: 185,
    description: 'Desloratadine 2.5mg for chronic urticaria',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=400&fit=crop&crop=center',
    inStock: true,
    prescription: true,
    dosage: '2.5mg'
  },
  {
    id: 'clarinex-5-msd',
    name: 'Clarinex 5mg',
    category: 'Allergy',
    manufacturer: 'MSD',
    price: 285,
    description: 'Desloratadine 5mg for perennial allergic rhinitis',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=400&fit=crop&crop=center',
    inStock: true,
    prescription: true,
    dosage: '5mg'
  },
  // Chlorpheniramine - Chlor-Trimeton (Bayer)
  {
    id: 'chlor-trimeton-4-bayer',
    name: 'Chlor-Trimeton 4mg',
    category: 'Allergy',
    manufacturer: 'Bayer',
    price: 85,
    description: 'Chlorpheniramine 4mg for hay fever',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=400&fit=crop&crop=center',
    inStock: true,
    prescription: false,
    dosage: '4mg'
  },
  {
    id: 'chlor-trimeton-12-bayer',
    name: 'Chlor-Trimeton 12mg',
    category: 'Allergy',
    manufacturer: 'Bayer',
    price: 125,
    description: 'Chlorpheniramine 12mg extended-release',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=400&fit=crop&crop=center',
    inStock: true,
    prescription: false,
    dosage: '12mg'
  },
  // Diphenhydramine - Benadryl (Johnson & Johnson)
  {
    id: 'benadryl-25-jnj',
    name: 'Benadryl 25mg',
    category: 'Allergy',
    manufacturer: 'Johnson & Johnson',
    price: 95,
    description: 'Diphenhydramine 25mg for allergic reactions',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=400&fit=crop&crop=center',
    inStock: true,
    prescription: false,
    dosage: '25mg'
  },
  {
    id: 'benadryl-50-jnj',
    name: 'Benadryl 50mg',
    category: 'Allergy',
    manufacturer: 'Johnson & Johnson',
    price: 145,
    description: 'Diphenhydramine 50mg for severe allergies',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=400&fit=crop&crop=center',
    inStock: true,
    prescription: false,
    dosage: '50mg'
  },
  // Hydroxyzine - Atarax (UCB)
  {
    id: 'atarax-10-ucb',
    name: 'Atarax 10mg',
    category: 'Allergy',
    manufacturer: 'UCB',
    price: 125,
    description: 'Hydroxyzine 10mg for anxiety and allergies',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=400&fit=crop&crop=center',
    inStock: true,
    prescription: true,
    dosage: '10mg'
  },
  {
    id: 'atarax-25-ucb',
    name: 'Atarax 25mg',
    category: 'Allergy',
    manufacturer: 'UCB',
    price: 185,
    description: 'Hydroxyzine 25mg for chronic urticaria',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=400&fit=crop&crop=center',
    inStock: true,
    prescription: true,
    dosage: '25mg'
  },
  // Promethazine - Phenergan (Wyeth)
  {
    id: 'phenergan-12-5-wyeth',
    name: 'Phenergan 12.5mg',
    category: 'Allergy',
    manufacturer: 'Wyeth',
    price: 145,
    description: 'Promethazine 12.5mg for allergies and nausea',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=400&fit=crop&crop=center',
    inStock: true,
    prescription: true,
    dosage: '12.5mg'
  },
  {
    id: 'phenergan-25-wyeth',
    name: 'Phenergan 25mg',
    category: 'Allergy',
    manufacturer: 'Wyeth',
    price: 225,
    description: 'Promethazine 25mg for severe allergic reactions',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=400&fit=crop&crop=center',
    inStock: true,
    prescription: true,
    dosage: '25mg'
  },
  // Epinephrine - EpiPen (Mylan)
  {
    id: 'epipen-0-15-mylan',
    name: 'EpiPen Jr 0.15mg',
    category: 'Allergy',
    manufacturer: 'Mylan',
    price: 1285,
    description: 'Epinephrine 0.15mg auto-injector for pediatric anaphylaxis',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=400&fit=crop&crop=center',
    inStock: true,
    prescription: true,
    dosage: '0.15mg'
  },
  {
    id: 'epipen-0-3-mylan',
    name: 'EpiPen 0.3mg',
    category: 'Allergy',
    manufacturer: 'Mylan',
    price: 1485,
    description: 'Epinephrine 0.3mg auto-injector for anaphylaxis',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=400&fit=crop&crop=center',
    inStock: true,
    prescription: true,
    dosage: '0.3mg'
  },
  // Prednisolone - Prelone (Pfizer)
  {
    id: 'prelone-5-pfizer',
    name: 'Prelone 5mg',
    category: 'Allergy',
    manufacturer: 'Pfizer',
    price: 85,
    description: 'Prednisolone 5mg for severe allergic reactions',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=400&fit=crop&crop=center',
    inStock: true,
    prescription: true,
    dosage: '5mg'
  },
  {
    id: 'prelone-15-pfizer',
    name: 'Prelone 15mg',
    category: 'Allergy',
    manufacturer: 'Pfizer',
    price: 145,
    description: 'Prednisolone 15mg syrup for pediatric allergies',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=400&fit=crop&crop=center',
    inStock: true,
    prescription: true,
    dosage: '15mg'
  },
  // Azelastine - Astelin (Meda)
  {
    id: 'astelin-nasal-meda',
    name: 'Astelin Nasal Spray',
    category: 'Allergy',
    manufacturer: 'Meda',
    price: 285,
    description: 'Azelastine nasal spray for allergic rhinitis',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=400&fit=crop&crop=center',
    inStock: true,
    prescription: true,
    dosage: 'Nasal spray'
  },
  {
    id: 'astelin-eye-drops-meda',
    name: 'Astelin Eye Drops',
    category: 'Allergy',
    manufacturer: 'Meda',
    price: 385,
    description: 'Azelastine eye drops for allergic conjunctivitis',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=400&fit=crop&crop=center',
    inStock: true,
    prescription: true,
    dosage: 'Eye drops'
  }
];
