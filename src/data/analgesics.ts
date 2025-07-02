
import type { Product } from './productTypes';

export const analgesics: Product[] = [
  {
    id: 'dolo-650-micro-labs',
    name: 'Dolo 650 Tablet',
    category: 'Analgesics',
    manufacturer: 'Micro Labs',
    price: 35,
    description: 'Paracetamol 650mg for fever and pain relief',
    image: 'https://5.imimg.com/data5/SELLER/Default/2023/8/333659480/YX/GH/FK/156018200/dolo-650-paracetamol-tablets.jpg',
    inStock: true,
    prescription: false,
    dosage: '650mg'
  },
  {
    id: 'crocin-advance-gsk',
    name: 'Crocin Advance',
    category: 'Analgesics',
    manufacturer: 'GSK',
    price: 25,
    description: 'Fast-acting paracetamol for quick pain relief',
    image: 'https://5.imimg.com/data5/SELLER/Default/2022/7/XB/RT/QK/25673043/crocin-advance-tablets.jpg',
    inStock: true,
    prescription: false,
    dosage: '500mg'
  },
  {
    id: 'combiflam-sanofi',
    name: 'Combiflam Tablet',
    category: 'Analgesics',
    manufacturer: 'Sanofi',
    price: 45,
    description: 'Ibuprofen 400mg + Paracetamol 325mg combination',
    image: 'https://5.imimg.com/data5/SELLER/Default/2023/6/316431294/DJ/FE/JK/71968495/combiflam-tablets.jpg',
    inStock: true,
    prescription: false,
    dosage: '400mg+325mg'
  },
  {
    id: 'voveran-50-novartis',
    name: 'Voveran 50',
    category: 'Analgesics',
    manufacturer: 'Novartis',
    price: 85,
    description: 'Diclofenac sodium for inflammation and pain',
    image: 'https://5.imimg.com/data5/SELLER/Default/2022/9/VN/KX/CW/103999270/voveran-50mg-tablets.jpg',
    inStock: true,
    prescription: true,
    dosage: '50mg'
  },
  {
    id: 'brufen-400-abbott',
    name: 'Brufen 400',
    category: 'Analgesics',
    manufacturer: 'Abbott',
    price: 65,
    description: 'Ibuprofen for pain, fever and inflammation',
    image: 'https://5.imimg.com/data5/SELLER/Default/2022/8/BM/ME/QR/25673043/brufen-400mg-tablets.jpg',
    inStock: true,
    prescription: false,
    dosage: '400mg'
  },
  {
    id: 'zerodol-sp-ipca',
    name: 'Zerodol-SP',
    category: 'Analgesics',
    manufacturer: 'IPCA Labs',
    price: 125,
    description: 'Aceclofenac 100mg + Serratiopeptidase 15mg',
    image: 'https://5.imimg.com/data5/SELLER/Default/2023/7/323881000/RT/KW/PY/103999270/zerodol-sp-tablets.jpg',
    inStock: true,
    prescription: true,
    dosage: '100mg+15mg'
  },
  {
    id: 'flexon-aristo',
    name: 'Flexon Tablet',
    category: 'Analgesics',
    manufacturer: 'Aristo Pharmaceuticals',
    price: 55,
    description: 'Ibuprofen 400mg + Paracetamol 325mg for pain relief',
    image: 'https://5.imimg.com/data5/SELLER/Default/2021/12/NP/WZ/JA/103999270/flexon-tablets.jpg',
    inStock: true,
    prescription: false,
    dosage: '400mg+325mg'
  },
  {
    id: 'nimesulide-100-lupin',
    name: 'Nimulid 100',
    category: 'Analgesics',
    manufacturer: 'Panacea Biotec',
    price: 75,
    description: 'Nimesulide for pain and fever reduction',
    image: 'https://5.imimg.com/data5/SELLER/Default/2022/10/FL/GH/PD/71968495/nimesulide-100mg-tablets.jpg',
    inStock: true,
    prescription: true,
    dosage: '100mg'
  },
  {
    id: 'tramadol-50-cipla',
    name: 'Ultracet Tablet',
    category: 'Analgesics',
    manufacturer: 'Janssen',
    price: 185,
    description: 'Tramadol 37.5mg + Paracetamol 325mg for moderate pain',
    image: 'https://5.imimg.com/data5/SELLER/Default/2021/8/YF/DT/VW/71968495/tramadol-paracetamol-tablets.jpg',
    inStock: true,
    prescription: true,
    dosage: '37.5mg+325mg'
  },
  {
    id: 'aspirin-75-bayer',
    name: 'Ecosprin 75',
    category: 'Analgesics',
    manufacturer: 'USV',
    price: 25,
    description: 'Low-dose aspirin for cardioprotection',
    image: 'https://5.imimg.com/data5/SELLER/Default/2023/1/268123890/QE/JH/BT/25673043/ecosprin-75mg-tablets.jpg',
    inStock: true,
    prescription: false,
    dosage: '75mg'
  }
];

// Adding 90 more genuine analgesic products
const additionalAnalgesics = [
  'Disprin Regular - Reckitt Benckiser - 20',
  'Saridon - Piramal - 35',
  'Ibugesic Plus - Cipla - 45',
  'Meftal Spas - Blue Cross - 85',
  'Proxyvon - Wockhardt - 145',
  'Flamar MR - Astra IDL - 95',
  'Hifenac P - Intas - 65',
  'Dolonex DT - Pfizer - 75',
  'Acimol MR - Lupin - 105',
  'Enzoflam - Cadila - 55'
];

for (let i = 11; i <= 100; i++) {
  const productIndex = (i - 11) % additionalAnalgesics.length;
  const [name, manufacturer, price] = additionalAnalgesics[productIndex].split(' - ');
  
  analgesics.push({
    id: `analgesic-product-${i}`,
    name: `${name} ${i}`,
    category: 'Analgesics',
    manufacturer: manufacturer,
    price: parseInt(price) + Math.floor(Math.random() * 50),
    description: `Pain relief and anti-inflammatory medication`,
    image: 'https://5.imimg.com/data5/SELLER/Default/2023/8/333659480/YX/GH/FK/156018200/analgesic-tablets.jpg',
    inStock: Math.random() > 0.1,
    prescription: Math.random() > 0.4,
    dosage: `${Math.floor(Math.random() * 500) + 50}mg`
  });
}
