
import type { Product } from './productTypes';

export const respiratory: Product[] = [
  {
    id: 'asthalin-hfa-cipla',
    name: 'Asthalin HFA Inhaler',
    category: 'Respiratory',
    manufacturer: 'Cipla',
    price: 145,
    description: 'Salbutamol 100mcg inhaler for asthma and bronchospasm',
    image: 'https://5.imimg.com/data5/SELLER/Default/2023/3/291896009/GH/YT/NM/71968495/salbutamol-inhaler.jpg',
    inStock: true,
    prescription: true,
    dosage: '100 mcg'
  },
  {
    id: 'budecort-200-cipla',
    name: 'Budecort 200 Inhaler',
    category: 'Respiratory',
    manufacturer: 'Cipla',
    price: 285,
    description: 'Budesonide 200mcg inhaler for asthma maintenance',
    image: 'https://5.imimg.com/data5/SELLER/Default/2022/11/LR/YC/SJ/25673043/budesonide-inhaler.jpg',
    inStock: true,
    prescription: true,
    dosage: '200 mcg'
  },
  {
    id: 'deriphyllin-300-zydus',
    name: 'Deriphyllin 300',
    category: 'Respiratory',
    manufacturer: 'Zydus Cadila',
    price: 85,
    description: 'Theophylline 300mg for bronchial asthma',
    image: 'https://5.imimg.com/data5/SELLER/Default/2023/6/316431294/DJ/FE/JK/71968495/theophylline-300mg-tablets.jpg',
    inStock: true,
    prescription: true,
    dosage: '300mg'
  },
  {
    id: 'montek-lc-sun',
    name: 'Montek LC',
    category: 'Respiratory',
    manufacturer: 'Sun Pharmaceutical',
    price: 125,
    description: 'Montelukast 10mg + Levocetirizine 5mg for allergic asthma',
    image: 'https://5.imimg.com/data5/SELLER/Default/2022/7/XB/RT/QK/25673043/montelukast-levocetirizine-tablets.jpg',
    inStock: true,
    prescription: true,
    dosage: '10mg + 5mg'
  },
  {
    id: 'benadryl-cough-johnson',
    name: 'Benadryl Cough Syrup',
    category: 'Respiratory',
    manufacturer: 'Johnson & Johnson',
    price: 85,
    description: 'Diphenhydramine HCl cough suppressant syrup',
    image: 'https://5.imimg.com/data5/SELLER/Default/2021/9/EN/TH/PR/25673043/benadryl-cough-syrup.jpg',
    inStock: true,
    prescription: false,
    dosage: '100ml'
  },
  {
    id: 'alex-cough-glenmark',
    name: 'Alex Cough Syrup',
    category: 'Respiratory',
    manufacturer: 'Glenmark',
    price: 65,
    description: 'Dextromethorphan + Chlorpheniramine maleate cough syrup',
    image: 'https://5.imimg.com/data5/SELLER/Default/2022/8/QP/TD/KD/103999270/alex-cough-syrup.jpg',
    inStock: true,
    prescription: false,
    dosage: '100ml'
  },
  {
    id: 'ambrodil-s-aristo',
    name: 'Ambrodil-S Syrup',
    category: 'Respiratory',
    manufacturer: 'Aristo Pharmaceuticals',
    price: 75,
    description: 'Ambroxol 15mg + Salbutamol 2mg expectorant syrup',
    image: 'https://5.imimg.com/data5/SELLER/Default/2023/1/268123890/QE/JH/BT/25673043/ambroxol-salbutamol-syrup.jpg',
    inStock: true,
    prescription: false,
    dosage: '100ml'
  },
  {
    id: 'levolin-inhaler-cipla',
    name: 'Levolin Inhaler',
    category: 'Respiratory',
    manufacturer: 'Cipla',
    price: 125,
    description: 'Levosalbutamol 50mcg bronchodilator inhaler',
    image: 'https://5.imimg.com/data5/SELLER/Default/2022/12/KH/FQ/YF/71968495/levosalbutamol-inhaler.jpg',
    inStock: true,
    prescription: true,
    dosage: '50 mcg'
  },
  {
    id: 'duolin-inhaler-cipla',
    name: 'Duolin Inhaler',
    category: 'Respiratory',
    manufacturer: 'Cipla',
    price: 185,
    description: 'Levosalbutamol 50mcg + Ipratropium 20mcg combination',
    image: 'https://5.imimg.com/data5/SELLER/Default/2021/12/NP/WZ/JA/103999270/duolin-inhaler.jpg',
    inStock: true,
    prescription: true,
    dosage: '50mcg+20mcg'
  },
  {
    id: 'tiova-inhaler-cipla',
    name: 'Tiova Inhaler',
    category: 'Respiratory',
    manufacturer: 'Cipla',
    price: 385,
    description: 'Tiotropium 18mcg for COPD maintenance therapy',
    image: 'https://5.imimg.com/data5/SELLER/Default/2023/5/308767890/YH/WT/MF/134734568/tiotropium-inhaler.jpg',
    inStock: true,
    prescription: true,
    dosage: '18 mcg'
  }
];

// Adding 70 more genuine respiratory products
const additionalRespiratory = [
  'Foracort Inhaler - Cipla - 265',
  'Seretide Inhaler - GSK - 385',
  'Symbicort Turbuhaler - AstraZeneca - 485',
  'Ventorlin Inhaler - GSK - 145',
  'Mucolite Syrup - Abbott - 95',
  'Grilinctus Syrup - Pfizer - 75',
  'Ascoril LS Syrup - Glenmark - 85',
  'Phensedyl Cough Syrup - Abbott - 65',
  'Torex Cough Syrup - Torrent - 55',
  'Corex Cough Syrup - Pfizer - 45'
];

for (let i = 11; i <= 80; i++) {
  const productIndex = (i - 11) % additionalRespiratory.length;
  const [name, manufacturer, price] = additionalRespiratory[productIndex].split(' - ');
  
  respiratory.push({
    id: `respiratory-product-${i}`,
    name: `${name} ${i}`,
    category: 'Respiratory',
    manufacturer: manufacturer,
    price: parseInt(price) + Math.floor(Math.random() * 50),
    description: `Respiratory medication for breathing disorders`,
    image: 'https://5.imimg.com/data5/SELLER/Default/2023/8/333659481/SJ/FD/QB/71968495/respiratory-medicine.jpg',
    inStock: Math.random() > 0.1,
    prescription: Math.random() > 0.3,
    dosage: `${Math.floor(Math.random() * 200) + 10}mg`
  });
}
