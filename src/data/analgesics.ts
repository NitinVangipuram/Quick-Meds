
import type { Product } from './productTypes';

export const analgesics: Product[] = [
  // Paracetamol - Dolo (Micro Labs)
  {
    id: 'dolo-500-micro-labs',
    name: 'Dolo 500 Tablet',
    category: 'Analgesics',
    manufacturer: 'Micro Labs',
    price: 25,
    description: 'Paracetamol 500mg for fever and pain relief',
    image: 'https://5.imimg.com/data5/SELLER/Default/2023/8/333659480/YX/GH/FK/156018200/dolo-650-paracetamol-tablets.jpg',
    inStock: true,
    prescription: false,
    dosage: '500mg'
  },
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
  // Paracetamol - Crocin (GSK)
  {
    id: 'crocin-500-gsk',
    name: 'Crocin 500',
    category: 'Analgesics',
    manufacturer: 'GSK',
    price: 28,
    description: 'Fast-acting paracetamol for quick pain relief',
    image: 'https://5.imimg.com/data5/SELLER/Default/2022/7/XB/RT/QK/25673043/crocin-advance-tablets.jpg',
    inStock: true,
    prescription: false,
    dosage: '500mg'
  },
  {
    id: 'crocin-650-gsk',
    name: 'Crocin Advance 650',
    category: 'Analgesics',
    manufacturer: 'GSK',
    price: 38,
    description: 'Fast-acting paracetamol 650mg for quick pain relief',
    image: 'https://5.imimg.com/data5/SELLER/Default/2022/7/XB/RT/QK/25673043/crocin-advance-tablets.jpg',
    inStock: true,
    prescription: false,
    dosage: '650mg'
  },
  // Ibuprofen + Paracetamol - Combiflam (Sanofi)
  {
    id: 'combiflam-tablet-sanofi',
    name: 'Combiflam Tablet',
    category: 'Analgesics',
    manufacturer: 'Sanofi',
    price: 48,
    description: 'Ibuprofen 400mg + Paracetamol 325mg combination',
    image: 'https://5.imimg.com/data5/SELLER/Default/2023/6/316431294/DJ/FE/JK/71968495/combiflam-tablets.jpg',
    inStock: true,
    prescription: false,
    dosage: '400mg+325mg'
  },
  {
    id: 'combiflam-plus-sanofi',
    name: 'Combiflam Plus',
    category: 'Analgesics',
    manufacturer: 'Sanofi',
    price: 58,
    description: 'Enhanced Ibuprofen + Paracetamol combination',
    image: 'https://5.imimg.com/data5/SELLER/Default/2023/6/316431294/DJ/FE/JK/71968495/combiflam-tablets.jpg',
    inStock: true,
    prescription: false,
    dosage: '400mg+325mg'
  },
  // Diclofenac - Voveran (Novartis)
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
    id: 'voveran-75-novartis',
    name: 'Voveran 75',
    category: 'Analgesics',
    manufacturer: 'Novartis',
    price: 105,  
    description: 'Diclofenac sodium 75mg for severe pain',
    image: 'https://5.imimg.com/data5/SELLER/Default/2022/9/VN/KX/CW/103999270/voveran-50mg-tablets.jpg',
    inStock: true,
    prescription: true,
    dosage: '75mg'
  },
  // Ibuprofen - Brufen (Abbott)
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
    id: 'brufen-600-abbott',
    name: 'Brufen 600',
    category: 'Analgesics',
    manufacturer: 'Abbott',
    price: 85,
    description: 'Ibuprofen 600mg for severe pain and inflammation',
    image: 'https://5.imimg.com/data5/SELLER/Default/2022/8/BM/ME/QR/25673043/brufen-400mg-tablets.jpg',
    inStock: true,
    prescription: true,
    dosage: '600mg'
  },
  // Aceclofenac + Serratiopeptidase - Zerodol-SP (IPCA)
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
    id: 'zerodol-p-ipca',
    name: 'Zerodol-P',
    category: 'Analgesics',
    manufacturer: 'IPCA Labs',
    price: 105,
    description: 'Aceclofenac 100mg + Paracetamol 325mg',
    image: 'https://5.imimg.com/data5/SELLER/Default/2023/7/323881000/RT/KW/PY/103999270/zerodol-sp-tablets.jpg',
    inStock: true,
    prescription: true,
    dosage: '100mg+325mg'
  },
  // Aspirin - Ecosprin (USV)
  {
    id: 'ecosprin-75-usv',
    name: 'Ecosprin 75',
    category: 'Analgesics',
    manufacturer: 'USV',
    price: 28,
    description: 'Low-dose aspirin for cardioprotection',
    image: 'https://5.imimg.com/data5/SELLER/Default/2023/1/268123890/QE/JH/BT/25673043/ecosprin-75mg-tablets.jpg',
    inStock: true,
    prescription: false,
    dosage: '75mg'
  },
  {
    id: 'ecosprin-150-usv',
    name: 'Ecosprin 150',
    category: 'Analgesics',
    manufacturer: 'USV',
    price: 38,
    description: 'Aspirin 150mg for pain relief and cardioprotection',
    image: 'https://5.imimg.com/data5/SELLER/Default/2023/1/268123890/QE/JH/BT/25673043/ecosprin-75mg-tablets.jpg',
    inStock: true,
    prescription: false,
    dosage: '150mg'
  }
];
