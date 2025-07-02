
import type { Product } from './productTypes';

export const cardiovascular: Product[] = [
  // Atorvastatin - Lipitor (Pfizer)
  {
    id: 'lipitor-10-pfizer',
    name: 'Lipitor 10mg',
    category: 'Cardiovascular',
    manufacturer: 'Pfizer',
    price: 285,
    description: 'Atorvastatin 10mg for cholesterol management',
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=400&fit=crop&crop=center',
    inStock: true,
    prescription: true,
    dosage: '10mg'
  },
  {
    id: 'lipitor-20-pfizer',
    name: 'Lipitor 20mg',
    category: 'Cardiovascular',
    manufacturer: 'Pfizer',
    price: 485,
    description: 'Atorvastatin 20mg for high cholesterol',
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=400&fit=crop&crop=center',
    inStock: true,
    prescription: true,
    dosage: '20mg'
  },
  // Amlodipine - Norvasc (Pfizer)
  {
    id: 'norvasc-2-5-pfizer',
    name: 'Norvasc 2.5mg',
    category: 'Cardiovascular',
    manufacturer: 'Pfizer',
    price: 125,
    description: 'Amlodipine 2.5mg for hypertension',
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=400&fit=crop&crop=center',
    inStock: true,
    prescription: true,
    dosage: '2.5mg'
  },
  {
    id: 'norvasc-5-pfizer',
    name: 'Norvasc 5mg',
    category: 'Cardiovascular',
    manufacturer: 'Pfizer',
    price: 185,
    description: 'Amlodipine 5mg for high blood pressure',
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=400&fit=crop&crop=center',
    inStock: true,
    prescription: true,
    dosage: '5mg'
  },
  // Metoprolol - Lopressor (Novartis)
  {
    id: 'lopressor-25-novartis',
    name: 'Lopressor 25mg',
    category: 'Cardiovascular',
    manufacturer: 'Novartis',
    price: 95,
    description: 'Metoprolol 25mg beta-blocker for hypertension',
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=400&fit=crop&crop=center',
    inStock: true,
    prescription: true,
    dosage: '25mg'
  },
  {
    id: 'lopressor-50-novartis',
    name: 'Lopressor 50mg',
    category: 'Cardiovascular',
    manufacturer: 'Novartis',
    price: 145,
    description: 'Metoprolol 50mg for heart conditions',
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=400&fit=crop&crop=center',
    inStock: true,
    prescription: true,
    dosage: '50mg'
  },
  // Losartan - Cozaar (MSD)
  {
    id: 'cozaar-25-msd',
    name: 'Cozaar 25mg',
    category: 'Cardiovascular',
    manufacturer: 'MSD',
    price: 185,
    description: 'Losartan 25mg ARB for hypertension',
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=400&fit=crop&crop=center',
    inStock: true,
    prescription: true,
    dosage: '25mg'
  },
  {
    id: 'cozaar-50-msd',
    name: 'Cozaar 50mg',
    category: 'Cardiovascular',
    manufacturer: 'MSD',
    price: 285,
    description: 'Losartan 50mg for high blood pressure',
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=400&fit=crop&crop=center',
    inStock: true,
    prescription: true,
    dosage: '50mg'
  },
  // Enalapril - Vasotec (MSD)
  {
    id: 'vasotec-2-5-msd',
    name: 'Vasotec 2.5mg',
    category: 'Cardiovascular',
    manufacturer: 'MSD',
    price: 85,
    description: 'Enalapril 2.5mg ACE inhibitor',
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=400&fit=crop&crop=center',
    inStock: true,
    prescription: true,
    dosage: '2.5mg'
  },
  {
    id: 'vasotec-5-msd',
    name: 'Vasotec 5mg',
    category: 'Cardiovascular',
    manufacturer: 'MSD',
    price: 125,
    description: 'Enalapril 5mg for heart failure',
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=400&fit=crop&crop=center',
    inStock: true,
    prescription: true,
    dosage: '5mg'
  },
  // Diltiazem - Cardizem (Bayer)
  {
    id: 'cardizem-30-bayer',
    name: 'Cardizem 30mg',
    category: 'Cardiovascular',
    manufacturer: 'Bayer',
    price: 145,
    description: 'Diltiazem 30mg calcium channel blocker',
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=400&fit=crop&crop=center',
    inStock: true,
    prescription: true,
    dosage: '30mg'
  },
  {
    id: 'cardizem-60-bayer',
    name: 'Cardizem 60mg',
    category: 'Cardiovascular',
    manufacturer: 'Bayer',
    price: 225,
    description: 'Diltiazem 60mg for angina and hypertension',
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=400&fit=crop&crop=center',
    inStock: true,
    prescription: true,
    dosage: '60mg'
  },
  // Carvedilol - Coreg (GSK)
  {
    id: 'coreg-3-125-gsk',
    name: 'Coreg 3.125mg',
    category: 'Cardiovascular',
    manufacturer: 'GSK',
    price: 165,
    description: 'Carvedilol 3.125mg for heart failure',
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=400&fit=crop&crop=center',
    inStock: true,
    prescription: true,
    dosage: '3.125mg'
  },
  {
    id: 'coreg-6-25-gsk',
    name: 'Coreg 6.25mg',
    category: 'Cardiovascular',
    manufacturer: 'GSK',
    price: 245,
    description: 'Carvedilol 6.25mg beta-blocker',
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=400&fit=crop&crop=center',
    inStock: true,
    prescription: true,
    dosage: '6.25mg'
  },
  // Digoxin - Lanoxin (GSK)
  {
    id: 'lanoxin-0-125-gsk',
    name: 'Lanoxin 0.125mg',
    category: 'Cardiovascular',
    manufacturer: 'GSK',
    price: 95,
    description: 'Digoxin 0.125mg for heart failure',
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=400&fit=crop&crop=center',
    inStock: true,
    prescription: true,
    dosage: '0.125mg'
  },
  {
    id: 'lanoxin-0-25-gsk',
    name: 'Lanoxin 0.25mg',
    category: 'Cardiovascular',
    manufacturer: 'GSK',
    price: 145,
    description: 'Digoxin 0.25mg cardiac glycoside',
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=400&fit=crop&crop=center',
    inStock: true,
    prescription: true,
    dosage: '0.25mg'
  },
  // Isosorbide Mononitrate - Imdur (AstraZeneca)
  {
    id: 'imdur-30-astrazeneca',
    name: 'Imdur 30mg',
    category: 'Cardiovascular',
    manufacturer: 'AstraZeneca',
    price: 125,
    description: 'Isosorbide Mononitrate 30mg for angina',
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=400&fit=crop&crop=center',
    inStock: true,
    prescription: true,
    dosage: '30mg'
  },
  {
    id: 'imdur-60-astrazeneca',
    name: 'Imdur 60mg',
    category: 'Cardiovascular',
    manufacturer: 'AstraZeneca',
    price: 185,
    description: 'Isosorbide Mononitrate 60mg sustained release',
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=400&fit=crop&crop=center',
    inStock: true,
    prescription: true,
    dosage: '60mg'
  },
  // Rosuvastatin - Crestor (AstraZeneca)
  {
    id: 'crestor-5-astrazeneca',
    name: 'Crestor 5mg',
    category: 'Cardiovascular',
    manufacturer: 'AstraZeneca',
    price: 385,
    description: 'Rosuvastatin 5mg for cholesterol management',
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=400&fit=crop&crop=center',
    inStock: true,
    prescription: true,
    dosage: '5mg'
  },
  {
    id: 'crestor-10-astrazeneca',
    name: 'Crestor 10mg',
    category: 'Cardiovascular',
    manufacturer: 'AstraZeneca',
    price: 585,
    description: 'Rosuvastatin 10mg high-intensity statin',
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=400&fit=crop&crop=center',
    inStock: true,
    prescription: true,
    dosage: '10mg'
  },
  // Clopidogrel - Plavix (Sanofi)
  {
    id: 'plavix-75-sanofi',
    name: 'Plavix 75mg',
    category: 'Cardiovascular',
    manufacturer: 'Sanofi',
    price: 485,
    description: 'Clopidogrel 75mg antiplatelet agent',
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=400&fit=crop&crop=center',
    inStock: true,
    prescription: true,
    dosage: '75mg'
  },
  {
    id: 'plavix-300-sanofi',
    name: 'Plavix 300mg',
    category: 'Cardiovascular',
    manufacturer: 'Sanofi',
    price: 785,
    description: 'Clopidogrel 300mg loading dose',
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=400&fit=crop&crop=center',
    inStock: true,
    prescription: true,
    dosage: '300mg'
  },
  // Warfarin - Coumadin (Bristol Myers Squibb)
  {
    id: 'coumadin-2-bms',
    name: 'Coumadin 2mg',
    category: 'Cardiovascular',
    manufacturer: 'Bristol Myers Squibb',
    price: 145,
    description: 'Warfarin 2mg anticoagulant',
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=400&fit=crop&crop=center',
    inStock: true,
    prescription: true,
    dosage: '2mg'
  },
  {
    id: 'coumadin-5-bms',
    name: 'Coumadin 5mg',
    category: 'Cardiovascular',
    manufacturer: 'Bristol Myers Squibb',
    price: 225,
    description: 'Warfarin 5mg for stroke prevention',
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=400&fit=crop&crop=center',
    inStock: true,
    prescription: true,
    dosage: '5mg'
  },
  // Furosemide - Lasix (Sanofi)
  {
    id: 'lasix-20-sanofi',
    name: 'Lasix 20mg',
    category: 'Cardiovascular',
    manufacturer: 'Sanofi',
    price: 65,
    description: 'Furosemide 20mg diuretic for edema',
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=400&fit=crop&crop=center',
    inStock: true,
    prescription: true,
    dosage: '20mg'
  },
  {
    id: 'lasix-40-sanofi',
    name: 'Lasix 40mg',
    category: 'Cardiovascular',
    manufacturer: 'Sanofi',
    price: 95,
    description: 'Furosemide 40mg for heart failure',
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=400&fit=crop&crop=center',
    inStock: true,
    prescription: true,
    dosage: '40mg'
  }
];
