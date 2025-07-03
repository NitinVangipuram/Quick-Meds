
import type { Product } from './productTypes';

export const diabetes: Product[] = [
  // Metformin - Glucophage (Bristol Myers Squibb)
  {
    id: 'glucophage-500-bms',
    name: 'Glucophage 500mg',
    category: 'Diabetes',
    manufacturer: 'Bristol Myers Squibb',
    price: 125,
    description: 'Metformin 500mg for type 2 diabetes management',
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=400&fit=crop&crop=center',
    inStock: true,
    prescription: true,
    dosage: '500mg'
  },
  {
    id: 'glucophage-850-bms',
    name: 'Glucophage 850mg',
    category: 'Diabetes',
    manufacturer: 'Bristol Myers Squibb',
    price: 165,
    description: 'Metformin 850mg for better glucose control',
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=400&fit=crop&crop=center',
    inStock: true,
    prescription: true,
    dosage: '850mg'
  },
  // Glimepiride - Amaryl (Sanofi)  
  {
    id: 'amaryl-1-sanofi',
    name: 'Amaryl 1mg',
    category: 'Diabetes',
    manufacturer: 'Sanofi',
    price: 95,
    description: 'Glimepiride 1mg for type 2 diabetes',
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=400&fit=crop&crop=center',
    inStock: true,
    prescription: true,
    dosage: '1mg'
  },
  {
    id: 'amaryl-2-sanofi',
    name: 'Amaryl 2mg',
    category: 'Diabetes',
    manufacturer: 'Sanofi',
    price: 135,
    description: 'Glimepiride 2mg for enhanced glucose control',
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=400&fit=crop&crop=center',
    inStock: true,
    prescription: true,
    dosage: '2mg'
  },
  // Gliclazide - Diamicron (Servier)
  {
    id: 'diamicron-40-servier',
    name: 'Diamicron 40mg',
    category: 'Diabetes',
    manufacturer: 'Servier',
    price: 115,
    description: 'Gliclazide 40mg for diabetes management',
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=400&fit=crop&crop=center',
    inStock: true,
    prescription: true,
    dosage: '40mg'
  },
  {
    id: 'diamicron-80-servier',
    name: 'Diamicron MR 80mg',
    category: 'Diabetes',
    manufacturer: 'Servier',
    price: 195,
    description: 'Gliclazide 80mg modified release',
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=400&fit=crop&crop=center',
    inStock: true,
    prescription: true,
    dosage: '80mg MR'
  },
  // Pioglitazone - Actos (Takeda)
  {
    id: 'actos-15-takeda',
    name: 'Actos 15mg',
    category: 'Diabetes',
    manufacturer: 'Takeda',
    price: 165,
    description: 'Pioglitazone 15mg for insulin sensitivity',
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=400&fit=crop&crop=center',
    inStock: true,
    prescription: true,
    dosage: '15mg'
  },
  {
    id: 'actos-30-takeda',
    name: 'Actos 30mg',
    category: 'Diabetes',
    manufacturer: 'Takeda',
    price: 265,
    description: 'Pioglitazone 30mg for better glucose control',
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=400&fit=crop&crop=center',
    inStock: true,
    prescription: true,
    dosage: '30mg'
  },
  // Sitagliptin - Januvia (MSD)
  {
    id: 'januvia-50-msd',
    name: 'Januvia 50mg',
    category: 'Diabetes',
    manufacturer: 'MSD',
    price: 435,
    description: 'Sitagliptin 50mg DPP-4 inhibitor',
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=400&fit=crop&crop=center',
    inStock: true,
    prescription: true,
    dosage: '50mg'
  },
  {
    id: 'januvia-100-msd',
    name: 'Januvia 100mg',
    category: 'Diabetes',
    manufacturer: 'MSD',
    price: 685,
    description: 'Sitagliptin 100mg for advanced diabetes care',
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=400&fit=crop&crop=center',
    inStock: true,
    prescription: true,
    dosage: '100mg'
  },
  // Insulin - Lantus (Sanofi)
  {
    id: 'lantus-solostar-sanofi',
    name: 'Lantus SoloStar',
    category: 'Diabetes',
    manufacturer: 'Sanofi',
    price: 1185,
    description: 'Insulin glargine long-acting insulin pen',
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=400&fit=crop&crop=center',
    inStock: true,
    prescription: true,
    dosage: '100 units/ml'
  },
  {
    id: 'lantus-vial-sanofi',
    name: 'Lantus Vial',
    category: 'Diabetes',
    manufacturer: 'Sanofi',
    price: 885,
    description: 'Insulin glargine 10ml vial',
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=400&fit=crop&crop=center',
    inStock: true,
    prescription: true,
    dosage: '10ml vial'
  }
];
