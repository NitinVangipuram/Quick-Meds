
import type { Product } from './productTypes';

export const gastrointestinal: Product[] = [
  // Omeprazole - Prilosec (AstraZeneca)
  {
    id: 'prilosec-20-astrazeneca',
    name: 'Prilosec 20mg',
    category: 'Gastrointestinal',
    manufacturer: 'AstraZeneca',
    price: 185,
    description: 'Omeprazole 20mg for acid reflux and GERD',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=400&fit=crop&crop=center',
    inStock: true,
    prescription: true,
    dosage: '20mg'
  },
  {
    id: 'prilosec-40-astrazeneca',
    name: 'Prilosec 40mg',
    category: 'Gastrointestinal',
    manufacturer: 'AstraZeneca',
    price: 285,
    description: 'Omeprazole 40mg for severe acid reflux',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=400&fit=crop&crop=center',
    inStock: true,
    prescription: true,
    dosage: '40mg'
  },
  // Pantoprazole - Protonix (Wyeth)
  {
    id: 'protonix-20-wyeth',
    name: 'Protonix 20mg',
    category: 'Gastrointestinal',
    manufacturer: 'Wyeth',
    price: 165,
    description: 'Pantoprazole 20mg for gastric ulcers',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=400&fit=crop&crop=center',
    inStock: true,
    prescription: true,
    dosage: '20mg'
  },
  {
    id: 'protonix-40-wyeth',
    name: 'Protonix 40mg',
    category: 'Gastrointestinal',
    manufacturer: 'Wyeth',
    price: 245,
    description: 'Pantoprazole 40mg for Zollinger-Ellison syndrome',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=400&fit=crop&crop=center',
    inStock: true,
    prescription: true,
    dosage: '40mg'
  },
  // Ranitidine - Zantac (GSK)
  {
    id: 'zantac-150-gsk',
    name: 'Zantac 150mg',
    category: 'Gastrointestinal',
    manufacturer: 'GSK',
    price: 85,
    description: 'Ranitidine 150mg for heartburn and acid indigestion',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=400&fit=crop&crop=center',
    inStock: true,
    prescription: false,
    dosage: '150mg'
  },
  {
    id: 'zantac-300-gsk',
    name: 'Zantac 300mg',
    category: 'Gastrointestinal',
    manufacturer: 'GSK',
    price: 145,
    description: 'Ranitidine 300mg for gastric ulcers',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=400&fit=crop&crop=center',
    inStock: true,
    prescription: true,
    dosage: '300mg'
  },
  // Famotidine - Pepcid (MSD)
  {
    id: 'pepcid-20-msd',
    name: 'Pepcid 20mg',
    category: 'Gastrointestinal',
    manufacturer: 'MSD',
    price: 125,
    description: 'Famotidine 20mg for acid reflux',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=400&fit=crop&crop=center',
    inStock: true,
    prescription: false,
    dosage: '20mg'
  },
  {
    id: 'pepcid-40-msd',
    name: 'Pepcid 40mg',
    category: 'Gastrointestinal',
    manufacturer: 'MSD',
    price: 185,
    description: 'Famotidine 40mg for duodenal ulcers',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=400&fit=crop&crop=center',
    inStock: true,
    prescription: true,
    dosage: '40mg'
  },
  // Esomeprazole - Nexium (AstraZeneca)
  {
    id: 'nexium-20-astrazeneca',
    name: 'Nexium 20mg',
    category: 'Gastrointestinal',
    manufacturer: 'AstraZeneca',
    price: 285,
    description: 'Esomeprazole 20mg for GERD treatment',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=400&fit=crop&crop=center',
    inStock: true,
    prescription: true,
    dosage: '20mg'
  },
  {
    id: 'nexium-40-astrazeneca',
    name: 'Nexium 40mg',
    category: 'Gastrointestinal',
    manufacturer: 'AstraZeneca',
    price: 485,
    description: 'Esomeprazole 40mg for severe acid reflux',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=400&fit=crop&crop=center',
    inStock: true,
    prescription: true,
    dosage: '40mg'
  },
  // Lansoprazole - Prevacid (Takeda)
  {
    id: 'prevacid-15-takeda',
    name: 'Prevacid 15mg',
    category: 'Gastrointestinal',
    manufacturer: 'Takeda',
    price: 185,
    description: 'Lansoprazole 15mg for stomach ulcers',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=400&fit=crop&crop=center',
    inStock: true,
    prescription: true,
    dosage: '15mg'
  },
  {
    id: 'prevacid-30-takeda',
    name: 'Prevacid 30mg',
    category: 'Gastrointestinal',
    manufacturer: 'Takeda',
    price: 285,
    description: 'Lansoprazole 30mg for erosive esophagitis',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=400&fit=crop&crop=center',
    inStock: true,
    prescription: true,
    dosage: '30mg'
  },
  // Domperidone - Motilium (Janssen)
  {
    id: 'motilium-10-janssen',
    name: 'Motilium 10mg',
    category: 'Gastrointestinal',
    manufacturer: 'Janssen',
    price: 125,
    description: 'Domperidone 10mg for nausea and vomiting',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=400&fit=crop&crop=center',
    inStock: true,
    prescription: true,
    dosage: '10mg'
  },
  {
    id: 'motilium-suspension-janssen',
    name: 'Motilium Suspension',
    category: 'Gastrointestinal',
    manufacturer: 'Janssen',
    price: 165,
    description: 'Domperidone suspension for pediatric use',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=400&fit=crop&crop=center',
    inStock: true,
    prescription: true,
    dosage: 'Suspension'
  },
  // Metoclopramide - Reglan (Pfizer)
  {
    id: 'reglan-10-pfizer',
    name: 'Reglan 10mg',
    category: 'Gastrointestinal',
    manufacturer: 'Pfizer',
    price: 85,
    description: 'Metoclopramide 10mg for gastroparesis',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=400&fit=crop&crop=center',
    inStock: true,
    prescription: true,
    dosage: '10mg'
  },
  {
    id: 'reglan-injection-pfizer',
    name: 'Reglan Injection',
    category: 'Gastrointestinal',
    manufacturer: 'Pfizer',
    price: 145,
    description: 'Metoclopramide injection for severe nausea',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=400&fit=crop&crop=center',
    inStock: true,
    prescription: true,
    dosage: 'Injection'
  },
  // Ondansetron - Zofran (GSK)
  {
    id: 'zofran-4-gsk',
    name: 'Zofran 4mg',
    category: 'Gastrointestinal',
    manufacturer: 'GSK',
    price: 285,
    description: 'Ondansetron 4mg for chemotherapy-induced nausea',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=400&fit=crop&crop=center',
    inStock: true,
    prescription: true,
    dosage: '4mg'
  },
  {
    id: 'zofran-8-gsk',
    name: 'Zofran 8mg',
    category: 'Gastrointestinal',
    manufacturer: 'GSK',
    price: 485,
    description: 'Ondansetron 8mg for severe nausea and vomiting',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=400&fit=crop&crop=center',
    inStock: true,
    prescription: true,
    dosage: '8mg'
  },
  // Loperamide - Imodium (Janssen)
  {
    id: 'imodium-2-janssen',
    name: 'Imodium 2mg',
    category: 'Gastrointestinal',
    manufacturer: 'Janssen',
    price: 85,
    description: 'Loperamide 2mg for acute diarrhea',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=400&fit=crop&crop=center',
    inStock: true,
    prescription: false,
    dosage: '2mg'
  },
  {
    id: 'imodium-plus-janssen',
    name: 'Imodium Plus',
    category: 'Gastrointestinal',
    manufacturer: 'Janssen',
    price: 125,
    description: 'Loperamide + Simethicone for diarrhea with gas',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=400&fit=crop&crop=center',
    inStock: true,
    prescription: false,
    dosage: 'Combination'
  },
  // Simethicone - Gas-X (Novartis)
  {
    id: 'gas-x-40-novartis',
    name: 'Gas-X 40mg',
    category: 'Gastrointestinal',
    manufacturer: 'Novartis',
    price: 65,
    description: 'Simethicone 40mg for gas and bloating',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=400&fit=crop&crop=center',
    inStock: true,
    prescription: false,
    dosage: '40mg'
  },
  {
    id: 'gas-x-80-novartis',
    name: 'Gas-X 80mg',
    category: 'Gastrointestinal',
    manufacturer: 'Novartis',
    price: 95,
    description: 'Simethicone 80mg for severe gas problems',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=400&fit=crop&crop=center',
    inStock: true,
    prescription: false,
    dosage: '80mg'
  },
  // Sucralfate - Carafate (Axcan)
  {
    id: 'carafate-1g-axcan',
    name: 'Carafate 1g',
    category: 'Gastrointestinal',
    manufacturer: 'Axcan',
    price: 185,
    description: 'Sucralfate 1g for duodenal ulcer healing',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=400&fit=crop&crop=center',
    inStock: true,
    prescription: true,
    dosage: '1g'
  },
  {
    id: 'carafate-suspension-axcan',
    name: 'Carafate Suspension',
    category: 'Gastrointestinal',
    manufacturer: 'Axcan',
    price: 225,
    description: 'Sucralfate suspension for gastric ulcers',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=400&fit=crop&crop=center',
    inStock: true,
    prescription: true,
    dosage: 'Suspension'
  },
  // Misoprostol - Cytotec (Pfizer)
  {
    id: 'cytotec-100-pfizer',
    name: 'Cytotec 100mcg',
    category: 'Gastrointestinal',
    manufacturer: 'Pfizer',
    price: 285,
    description: 'Misoprostol 100mcg for NSAID-induced ulcers',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=400&fit=crop&crop=center',
    inStock: true,
    prescription: true,
    dosage: '100mcg'
  },
  {
    id: 'cytotec-200-pfizer',
    name: 'Cytotec 200mcg',
    category: 'Gastrointestinal',
    manufacturer: 'Pfizer',
    price: 485,
    description: 'Misoprostol 200mcg for gastric ulcer prevention',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=400&fit=crop&crop=center',
    inStock: true,
    prescription: true,
    dosage: '200mcg'
  }
];
