
import type { Product } from './productTypes';

export const diabetes: Product[] = [
  // Metformin - Glucophage (Merck)
  {
    id: 'glucophage-500-merck',
    name: 'Glucophage 500mg',
    category: 'Diabetes Care',
    manufacturer: 'Merck',
    price: 125,
    description: 'Metformin 500mg for type 2 diabetes management',
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=400&fit=crop&crop=center',
    inStock: true,
    prescription: true,
    dosage: '500mg'
  },
  {
    id: 'glucophage-1000-merck',
    name: 'Glucophage 1000mg',
    category: 'Diabetes Care',
    manufacturer: 'Merck',
    price: 185,
    description: 'Metformin 1000mg for advanced diabetes control',
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=400&fit=crop&crop=center',
    inStock: true,
    prescription: true,
    dosage: '1000mg'
  },
  // Glibenclamide - Daonil (Sanofi)
  {
    id: 'daonil-2-5-sanofi',
    name: 'Daonil 2.5mg',
    category: 'Diabetes Care',
    manufacturer: 'Sanofi',
    price: 65,
    description: 'Glibenclamide 2.5mg for blood sugar control',
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=400&fit=crop&crop=center',
    inStock: true,
    prescription: true,
    dosage: '2.5mg'
  },
  {
    id: 'daonil-5-sanofi',
    name: 'Daonil 5mg',
    category: 'Diabetes Care',
    manufacturer: 'Sanofi',
    price: 95,
    description: 'Glibenclamide 5mg for advanced diabetes management',
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=400&fit=crop&crop=center',
    inStock: true,
    prescription: true,
    dosage: '5mg'
  },
  // Gliclazide - Diamicron (Servier)
  {
    id: 'diamicron-40-servier',
    name: 'Diamicron 40mg',
    category: 'Diabetes Care',
    manufacturer: 'Servier',
    price: 145,
    description: 'Gliclazide 40mg for type 2 diabetes',
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=400&fit=crop&crop=center',
    inStock: true,
    prescription: true,
    dosage: '40mg'
  },
  {
    id: 'diamicron-80-servier',
    name: 'Diamicron 80mg',
    category: 'Diabetes Care',
    manufacturer: 'Servier',
    price: 225,
    description: 'Gliclazide 80mg MR for sustained diabetes control',
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=400&fit=crop&crop=center',
    inStock: true,
    prescription: true,
    dosage: '80mg'
  },
  // Glimepiride - Amaryl (Sanofi)
  {
    id: 'amaryl-1-sanofi',
    name: 'Amaryl 1mg',
    category: 'Diabetes Care',
    manufacturer: 'Sanofi',
    price: 185,
    description: 'Glimepiride 1mg for diabetes management',
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=400&fit=crop&crop=center',
    inStock: true,
    prescription: true,
    dosage: '1mg'
  },
  {
    id: 'amaryl-2-sanofi',
    name: 'Amaryl 2mg',
    category: 'Diabetes Care',
    manufacturer: 'Sanofi',
    price: 285,
    description: 'Glimepiride 2mg for advanced diabetes control',
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=400&fit=crop&crop=center',
    inStock: true,
    prescription: true,
    dosage: '2mg'
  },
  // Pioglitazone - Actos (Takeda)
  {
    id: 'actos-15-takeda',
    name: 'Actos 15mg',
    category: 'Diabetes Care',
    manufacturer: 'Takeda',
    price: 285,
    description: 'Pioglitazone 15mg for insulin sensitivity',
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=400&fit=crop&crop=center',
    inStock: true,
    prescription: true,
    dosage: '15mg'
  },
  {
    id: 'actos-30-takeda',
    name: 'Actos 30mg',
    category: 'Diabetes Care',
    manufacturer: 'Takeda',
    price: 485,
    description: 'Pioglitazone 30mg for severe insulin resistance',
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=400&fit=crop&crop=center',
    inStock: true,
    prescription: true,
    dosage: '30mg'
  },
  // Repaglinide - Novonorm (Novo Nordisk)
  {
    id: 'novonorm-0-5-novo',
    name: 'Novonorm 0.5mg',
    category: 'Diabetes Care',
    manufacturer: 'Novo Nordisk',
    price: 165,
    description: 'Repaglinide 0.5mg for postprandial glucose control',
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=400&fit=crop&crop=center',
    inStock: true,
    prescription: true,
    dosage: '0.5mg'
  },
  {
    id: 'novonorm-1-novo',
    name: 'Novonorm 1mg',
    category: 'Diabetes Care',
    manufacturer: 'Novo Nordisk',
    price: 245,
    description: 'Repaglinide 1mg for enhanced glucose control',
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=400&fit=crop&crop=center',
    inStock: true,
    prescription: true,
    dosage: '1mg'
  },
  // Voglibose - Vogli (Ranbaxy)
  {
    id: 'vogli-0-2-ranbaxy',
    name: 'Vogli 0.2mg',
    category: 'Diabetes Care',
    manufacturer: 'Ranbaxy',
    price: 125,
    description: 'Voglibose 0.2mg for postprandial hyperglycemia',
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=400&fit=crop&crop=center',
    inStock: true,
    prescription: true,
    dosage: '0.2mg'
  },
  {
    id: 'vogli-0-3-ranbaxy',
    name: 'Vogli 0.3mg',
    category: 'Diabetes Care',
    manufacturer: 'Ranbaxy',
    price: 165,
    description: 'Voglibose 0.3mg for advanced glucose management',
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=400&fit=crop&crop=center',
    inStock: true,
    prescription: true,
    dosage: '0.3mg'
  },
  // Sitagliptin - Januvia (MSD)
  {
    id: 'januvia-50-msd',
    name: 'Januvia 50mg',
    category: 'Diabetes Care',
    manufacturer: 'MSD',
    price: 485,
    description: 'Sitagliptin 50mg DPP-4 inhibitor',
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=400&fit=crop&crop=center',
    inStock: true,
    prescription: true,
    dosage: '50mg'
  },
  {
    id: 'januvia-100-msd',
    name: 'Januvia 100mg',
    category: 'Diabetes Care',
    manufacturer: 'MSD',
    price: 785,
    description: 'Sitagliptin 100mg for advanced diabetes management',
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=400&fit=crop&crop=center',
    inStock: true,
    prescription: true,
    dosage: '100mg'
  },
  // Insulin Glargine - Lantus (Sanofi)
  {
    id: 'lantus-100-sanofi',
    name: 'Lantus 100IU/ml',
    category: 'Diabetes Care',
    manufacturer: 'Sanofi',
    price: 1285,
    description: 'Insulin Glargine long-acting insulin injection',
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=400&fit=crop&crop=center',
    inStock: true,
    prescription: true,
    dosage: '100IU/ml'
  },
  {
    id: 'lantus-solostar-sanofi',
    name: 'Lantus SoloStar Pen',
    category: 'Diabetes Care',
    manufacturer: 'Sanofi',
    price: 1485,
    description: 'Insulin Glargine pre-filled pen for easy injection',
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=400&fit=crop&crop=center',
    inStock: true,
    prescription: true,
    dosage: 'Pre-filled pen'
  },
  // Insulin Aspart - NovoRapid (Novo Nordisk)
  {
    id: 'novorapid-100-novo',
    name: 'NovoRapid 100IU/ml',
    category: 'Diabetes Care',
    manufacturer: 'Novo Nordisk',
    price: 1185,
    description: 'Insulin Aspart rapid-acting insulin',
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=400&fit=crop&crop=center',
    inStock: true,
    prescription: true,
    dosage: '100IU/ml'
  },
  {
    id: 'novorapid-flexpen-novo',
    name: 'NovoRapid FlexPen',
    category: 'Diabetes Care',
    manufacturer: 'Novo Nordisk',
    price: 1385,
    description: 'Insulin Aspart pre-filled FlexPen',
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=400&fit=crop&crop=center',
    inStock: true,
    prescription: true,
    dosage: 'FlexPen'
  },
  // Vildagliptin - Galvus (Novartis)
  {
    id: 'galvus-50-novartis',
    name: 'Galvus 50mg',
    category: 'Diabetes Care',
    manufacturer: 'Novartis',
    price: 385,
    description: 'Vildagliptin 50mg DPP-4 inhibitor',
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=400&fit=crop&crop=center',
    inStock: true,
    prescription: true,
    dosage: '50mg'
  },
  {
    id: 'galvus-met-50-500-novartis',
    name: 'Galvus Met 50/500mg',
    category: 'Diabetes Care',
    manufacturer: 'Novartis',
    price: 485,
    description: 'Vildagliptin 50mg + Metformin 500mg combination',
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=400&fit=crop&crop=center',
    inStock: true,
    prescription: true,
    dosage: '50/500mg'
  },
  // Empagliflozin - Jardiance (Boehringer Ingelheim)
  {
    id: 'jardiance-10-boehringer',
    name: 'Jardiance 10mg',
    category: 'Diabetes Care',
    manufacturer: 'Boehringer Ingelheim',
    price: 585,
    description: 'Empagliflozin 10mg SGLT2 inhibitor',
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=400&fit=crop&crop=center',
    inStock: true,
    prescription: true,
    dosage: '10mg'
  },
  {
    id: 'jardiance-25-boehringer',
    name: 'Jardiance 25mg',
    category: 'Diabetes Care',
    manufacturer: 'Boehringer Ingelheim',
    price: 785,
    description: 'Empagliflozin 25mg for advanced diabetes control',
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=400&fit=crop&crop=center',
    inStock: true,
    prescription: true,
    dosage: '25mg'
  },
  // Teneligliptin - Tenelia (Glenmark)
  {
    id: 'tenelia-20-glenmark',
    name: 'Tenelia 20mg',
    category: 'Diabetes Care',
    manufacturer: 'Glenmark',
    price: 285,
    description: 'Teneligliptin 20mg DPP-4 inhibitor',
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=400&fit=crop&crop=center',
    inStock: true,
    prescription: true,
    dosage: '20mg'
  },
  {
    id: 'tenelia-40-glenmark',
    name: 'Tenelia 40mg',
    category: 'Diabetes Care',
    manufacturer: 'Glenmark',
    price: 385,
    description: 'Teneligliptin 40mg for enhanced glucose control',
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=400&fit=crop&crop=center',
    inStock: true,
    prescription: true,
    dosage: '40mg'
  }
];
