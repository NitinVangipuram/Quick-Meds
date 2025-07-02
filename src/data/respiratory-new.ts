
import type { Product } from './productTypes';

export const respiratoryNew: Product[] = [
  // Salbutamol - Ventolin (GSK)
  {
    id: 'ventolin-100-gsk',
    name: 'Ventolin 100mcg Inhaler',
    category: 'Respiratory',
    manufacturer: 'GSK',
    price: 285,
    description: 'Salbutamol 100mcg inhaler for asthma relief',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=400&fit=crop&crop=center',
    inStock: true,
    prescription: true,
    dosage: '100mcg'
  },
  {
    id: 'ventolin-nebules-gsk',
    name: 'Ventolin Nebules',
    category: 'Respiratory',
    manufacturer: 'GSK',
    price: 385,
    description: 'Salbutamol nebules for severe asthma attacks',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=400&fit=crop&crop=center',
    inStock: true,
    prescription: true,
    dosage: 'Nebules'
  },
  // Budesonide - Pulmicort (AstraZeneca)
  {
    id: 'pulmicort-100-astrazeneca',
    name: 'Pulmicort 100mcg',
    category: 'Respiratory',
    manufacturer: 'AstraZeneca',
    price: 485,
    description: 'Budesonide 100mcg inhaler for asthma control',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=400&fit=crop&crop=center',
    inStock: true,
    prescription: true,
    dosage: '100mcg'
  },
  {
    id: 'pulmicort-200-astrazeneca',
    name: 'Pulmicort 200mcg',
    category: 'Respiratory',
    manufacturer: 'AstraZeneca',
    price: 685,
    description: 'Budesonide 200mcg for severe asthma',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=400&fit=crop&crop=center',
    inStock: true,
    prescription: true,
    dosage: '200mcg'
  },
  // Fluticasone - Flixotide (GSK)
  {
    id: 'flixotide-25-gsk',
    name: 'Flixotide 25mcg',
    category: 'Respiratory',
    manufacturer: 'GSK',
    price: 385,
    description: 'Fluticasone 25mcg inhaler for asthma prevention',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=400&fit=crop&crop=center',
    inStock: true,
    prescription: true,
    dosage: '25mcg'
  },
  {
    id: 'flixotide-125-gsk',
    name: 'Flixotide 125mcg',
    category: 'Respiratory',
    manufacturer: 'GSK',
    price: 585,
    description: 'Fluticasone 125mcg for chronic asthma',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=400&fit=crop&crop=center',
    inStock: true,
    prescription: true,
    dosage: '125mcg'
  },
  // Ipratropium - Atrovent (Boehringer Ingelheim)
  {
    id: 'atrovent-20-boehringer',
    name: 'Atrovent 20mcg',
    category: 'Respiratory',
    manufacturer: 'Boehringer Ingelheim',
    price: 285,
    description: 'Ipratropium 20mcg for COPD management',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=400&fit=crop&crop=center',
    inStock: true,
    prescription: true,
    dosage: '20mcg'
  },
  {
    id: 'atrovent-nebules-boehringer',
    name: 'Atrovent Nebules',
    category: 'Respiratory',
    manufacturer: 'Boehringer Ingelheim',
    price: 385,
    description: 'Ipratropium nebules for severe COPD',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=400&fit=crop&crop=center',
    inStock: true,
    prescription: true,
    dosage: 'Nebules'
  },
  // Salmeterol - Serevent (GSK)
  {
    id: 'serevent-25-gsk',
    name: 'Serevent 25mcg',
    category: 'Respiratory',
    manufacturer: 'GSK',
    price: 585,
    description: 'Salmeterol 25mcg long-acting bronchodilator',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=400&fit=crop&crop=center',
    inStock: true,
    prescription: true,
    dosage: '25mcg'
  },
  {
    id: 'serevent-diskus-gsk',
    name: 'Serevent Diskus',
    category: 'Respiratory',
    manufacturer: 'GSK',
    price: 785,
    description: 'Salmeterol diskus inhaler for asthma control',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=400&fit=crop&crop=center',
    inStock: true,
    prescription: true,
    dosage: 'Diskus'
  },
  // Formoterol - Foradil (Novartis)
  {
    id: 'foradil-12-novartis',
    name: 'Foradil 12mcg',
    category: 'Respiratory',
    manufacturer: 'Novartis',
    price: 485,
    description: 'Formoterol 12mcg for COPD and asthma',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=400&fit=crop&crop=center',
    inStock: true,
    prescription: true,
    dosage: '12mcg'
  },
  {
    id: 'foradil-aerolizer-novartis',
    name: 'Foradil Aerolizer',
    category: 'Respiratory',
    manufacturer: 'Novartis',
    price: 685,
    description: 'Formoterol aerolizer for long-term asthma control',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=400&fit=crop&crop=center',
    inStock: true,
    prescription: true,
    dosage: 'Aerolizer'
  },
  // Theophylline - Theo-24 (UCB)
  {
    id: 'theo-24-100-ucb',
    name: 'Theo-24 100mg',
    category: 'Respiratory',
    manufacturer: 'UCB',
    price: 185,
    description: 'Theophylline 100mg extended-release for asthma',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=400&fit=crop&crop=center',
    inStock: true,
    prescription: true,
    dosage: '100mg'
  },
  {
    id: 'theo-24-200-ucb',
    name: 'Theo-24 200mg',
    category: 'Respiratory',
    manufacturer: 'UCB',
    price: 285,
    description: 'Theophylline 200mg for chronic respiratory conditions',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=400&fit=crop&crop=center',
    inStock: true,
    prescription: true,
    dosage: '200mg'
  },
  // Montelukast - Singulair (MSD)
  {
    id: 'singulair-4-msd',
    name: 'Singulair 4mg',
    category: 'Respiratory',
    manufacturer: 'MSD',
    price: 285,
    description: 'Montelukast 4mg for pediatric asthma',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=400&fit=crop&crop=center',
    inStock: true,
    prescription: true,
    dosage: '4mg'
  },
  {
    id: 'singulair-10-msd',
    name: 'Singulair 10mg',
    category: 'Respiratory',
    manufacturer: 'MSD',
    price: 485,
    description: 'Montelukast 10mg for adult asthma and allergies',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=400&fit=crop&crop=center',
    inStock: true,
    prescription: true,
    dosage: '10mg'
  },
  // Tiotropium - Spiriva (Boehringer Ingelheim)
  {
    id: 'spiriva-18-boehringer',
    name: 'Spiriva 18mcg',
    category: 'Respiratory',
    manufacturer: 'Boehringer Ingelheim',
    price: 785,
    description: 'Tiotropium 18mcg for COPD maintenance',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=400&fit=crop&crop=center',
    inStock: true,
    prescription: true,
    dosage: '18mcg'
  },
  {
    id: 'spiriva-respimat-boehringer',
    name: 'Spiriva Respimat',
    category: 'Respiratory',
    manufacturer: 'Boehringer Ingelheim',
    price: 985,
    description: 'Tiotropium Respimat inhaler for COPD',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=400&fit=crop&crop=center',
    inStock: true,
    prescription: true,
    dosage: 'Respimat'
  },
  // Beclomethasone - Qvar (Teva)
  {
    id: 'qvar-40-teva',
    name: 'Qvar 40mcg',
    category: 'Respiratory',
    manufacturer: 'Teva',
    price: 385,
    description: 'Beclomethasone 40mcg inhaler for asthma',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=400&fit=crop&crop=center',
    inStock: true,
    prescription: true,
    dosage: '40mcg'
  },
  {
    id: 'qvar-80-teva',
    name: 'Qvar 80mcg',
    category: 'Respiratory',
    manufacturer: 'Teva',
    price: 585,
    description: 'Beclomethasone 80mcg for chronic asthma',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=400&fit=crop&crop=center',
    inStock: true,
    prescription: true,
    dosage: '80mcg'
  },
  // Zafirlukast - Accolate (AstraZeneca)
  {
    id: 'accolate-10-astrazeneca',
    name: 'Accolate 10mg',
    category: 'Respiratory',
    manufacturer: 'AstraZeneca',
    price: 285,
    description: 'Zafirlukast 10mg for asthma prevention',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=400&fit=crop&crop=center',
    inStock: true,
    prescription: true,
    dosage: '10mg'
  },
  {
    id: 'accolate-20-astrazeneca',
    name: 'Accolate 20mg',
    category: 'Respiratory',
    manufacturer: 'AstraZeneca',
    price: 485,
    description: 'Zafirlukast 20mg for chronic asthma management',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=400&fit=crop&crop=center',
    inStock: true,
    prescription: true,
    dosage: '20mg'
  },
  // Cromolyn - Intal (Sanofi)
  {
    id: 'intal-1-sanofi',
    name: 'Intal 1mg',
    category: 'Respiratory',
    manufacturer: 'Sanofi',
    price: 185,
    description: 'Cromolyn sodium 1mg for asthma prevention',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=400&fit=crop&crop=center',
    inStock: true,
    prescription: true,
    dosage: '1mg'
  },
  {
    id: 'intal-nebules-sanofi',
    name: 'Intal Nebules',
    category: 'Respiratory',
    manufacturer: 'Sanofi',
    price: 285,
    description: 'Cromolyn sodium nebules for severe asthma',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=400&fit=crop&crop=center',
    inStock: true,
    prescription: true,
    dosage: 'Nebules'
  }
];
