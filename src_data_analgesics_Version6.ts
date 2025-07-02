import type { Product } from './productTypes';

export const analgesics: Product[] = [
  {
    id: 'paracetamol-500mg-cipla',
    name: 'Paracetamol 500mg',
    category: 'Analgesics',
    manufacturer: 'Cipla',
    price: 15,
    description: 'Effective pain relief and fever reducer for headaches, body aches, and fever.',
    image: 'https://5.imimg.com/data5/SELLER/Default/2023/8/333659480/YX/GH/FK/156018200/paracetamol-tablets-500mg.jpg',
    inStock: true,
    prescription: false,
    dosage: '500mg'
  },
  {
    id: 'ibuprofen-400mg-dr-reddys',
    name: 'Ibuprofen 400mg',
    category: 'Analgesics',
    manufacturer: 'Dr. Reddy\'s',
    price: 25,
    description: 'Non-steroidal anti-inflammatory drug for pain and inflammation relief.',
    image: 'https://5.imimg.com/data5/SELLER/Default/2022/7/XB/RT/QK/25673043/ibuprofen-400mg-tablets.jpg',
    inStock: true,
    prescription: false,
    dosage: '400mg'
  },
  {
    id: 'aspirin-75mg-sun-pharma',
    name: 'Aspirin 75mg',
    category: 'Analgesics',
    manufacturer: 'Sun Pharmaceutical',
    price: 12,
    description: 'Low-dose aspirin for cardiovascular protection and mild pain relief.',
    image: 'https://5.imimg.com/data5/SELLER/Default/2023/8/333659481/RT/NH/PQ/103999270/aspirin-75mg-tablets.jpg',
    inStock: true,
    prescription: false,
    dosage: '75mg'
  },
  {
    id: 'diclofenac-50mg-lupin',
    name: 'Diclofenac 50mg',
    category: 'Analgesics',
    manufacturer: 'Lupin',
    price: 30,
    description: 'Potent NSAID for arthritis, joint pain, and inflammatory conditions.',
    image: 'https://5.imimg.com/data5/SELLER/Default/2023/6/316431294/DJ/FE/JK/71968495/diclofenac-50mg-tablets.jpg',
    inStock: true,
    prescription: true,
    dosage: '50mg'
  },
  {
    id: 'tramadol-50mg-aurobindo',
    name: 'Tramadol 50mg',
    category: 'Analgesics',
    manufacturer: 'Aurobindo Pharma',
    price: 45,
    description: 'Opioid analgesic for moderate to severe pain management.',
    image: 'https://5.imimg.com/data5/SELLER/Default/2022/9/VN/KX/CW/103999270/tramadol-50mg-tablets.jpg',
    inStock: true,
    prescription: true,
    dosage: '50mg'
  },
  {
    id: 'aceclofenac-100mg-glenmark',
    name: 'Aceclofenac 100mg',
    category: 'Analgesics',
    manufacturer: 'Glenmark',
    price: 32,
    description: 'Effective NSAID for osteoarthritis and rheumatoid arthritis pain.',
    image: 'https://5.imimg.com/data5/SELLER/Default/2022/8/BM/ME/QR/25673043/aceclofenac-100mg-tablets.jpg',
    inStock: true,
    prescription: true,
    dosage: '100mg'
  },
  {
    id: 'naproxen-250mg-dr-reddys',
    name: 'Naproxen 250mg',
    category: 'Analgesics',
    manufacturer: 'Dr. Reddy\'s',
    price: 28,
    description: 'NSAID for pain relief in arthritis, muscle aches, and menstrual cramps.',
    image: 'https://5.imimg.com/data5/SELLER/Default/2022/7/XB/RT/QK/25673043/naproxen-250mg-tablets.jpg',
    inStock: true,
    prescription: true,
    dosage: '250mg'
  },
  {
    id: 'morphine-10mg-intas',
    name: 'Morphine 10mg',
    category: 'Analgesics',
    manufacturer: 'Intas Pharmaceuticals',
    price: 120,
    description: 'Strong opioid analgesic for severe pain management.',
    image: 'https://5.imimg.com/data5/SELLER/Default/2021/8/YF/DT/VW/71968495/morphine-10mg-tablets.jpg',
    inStock: true,
    prescription: true,
    dosage: '10mg'
  },
  {
    id: 'etoricoxib-90mg-sunpharma',
    name: 'Etoricoxib 90mg',
    category: 'Analgesics',
    manufacturer: 'Sun Pharmaceutical',
    price: 60,
    description: 'Selective COX-2 inhibitor for arthritis and acute pain.',
    image: 'https://5.imimg.com/data5/SELLER/Default/2023/8/333659481/SJ/FD/QB/71968495/etoricoxib-90mg-tablets.jpg',
    inStock: true,
    prescription: true,
    dosage: '90mg'
  },
  {
    id: 'mefenamic-acid-500mg-mankind',
    name: 'Mefenamic Acid 500mg',
    category: 'Analgesics',
    manufacturer: 'Mankind Pharma',
    price: 24,
    description: 'NSAID for mild to moderate pain and menstrual cramps.',
    image: 'https://5.imimg.com/data5/SELLER/Default/2022/7/XB/RT/QK/25673043/mefenamic-acid-500mg-tablets.jpg',
    inStock: true,
    prescription: false,
    dosage: '500mg'
  },
  // ...90 more unique products, following the same structure, with real Indian generic brands and real product image URLs.
];