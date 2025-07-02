
export const antacids = [
  {
    id: 'eno-regular-gsk',
    name: 'ENO Regular Antacid',
    description: 'Fruit salt for fast relief from acidity and gas',
    price: 45,
    category: 'Antacids & Gastro',
    manufacturer: 'GlaxoSmithKline',
    image: 'https://5.imimg.com/data5/SELLER/Default/2022/5/QJ/BF/TJ/134734568/eno-fruit-salt.jpg',
    inStock: true,
    prescription: false,
    dosage: '5g sachet'
  },
  {
    id: 'digene-gel-abbott',
    name: 'Digene Gel',
    description: 'Antacid gel for heartburn and acidity relief',
    price: 65,
    category: 'Antacids & Gastro',
    manufacturer: 'Abbott',
    image: 'https://5.imimg.com/data5/SELLER/Default/2023/7/323881000/RT/KW/PY/103999270/digene-antacid-gel.jpg',
    inStock: true,
    prescription: false,
    dosage: '170ml'
  },
  {
    id: 'gelusil-mps-pfizer',
    name: 'Gelusil MPS Tablet',
    description: 'Antacid with simethicone for gas and acidity relief',
    price: 32,
    category: 'Antacids & Gastro',
    manufacturer: 'Pfizer',
    image: 'https://5.imimg.com/data5/SELLER/Default/2022/8/BM/ME/QR/25673043/gelusil-mps-tablets.jpg',
    inStock: true,
    prescription: false,
    dosage: '10 tablets'
  },
  {
    id: 'pantop-40-aristo',
    name: 'Pantop 40',
    description: 'Pantoprazole 40mg for acid reflux and GERD',
    price: 95,
    category: 'Antacids & Gastro',
    manufacturer: 'Aristo Pharmaceuticals',
    image: 'https://5.imimg.com/data5/SELLER/Default/2023/6/316431294/DJ/FE/JK/71968495/pantoprazole-40mg-tablets.jpg',
    inStock: true,
    prescription: true,
    dosage: '40mg'
  },
  {
    id: 'omez-20-dr-reddys',
    name: 'Omez 20',
    description: 'Omeprazole 20mg for stomach ulcers and acid reflux',
    price: 78,
    category: 'Antacids & Gastro',
    manufacturer: 'Dr. Reddy\'s',
    image: 'https://5.imimg.com/data5/SELLER/Default/2022/9/VN/KX/CW/103999270/omeprazole-20mg-capsules.jpg',
    inStock: true,
    prescription: true,
    dosage: '20mg'
  },
  {
    id: 'rantac-150-jb',
    name: 'Rantac 150',
    description: 'Ranitidine 150mg for peptic ulcers and heartburn',
    price: 24,
    category: 'Antacids & Gastro',
    manufacturer: 'J.B. Chemicals',
    image: 'https://5.imimg.com/data5/SELLER/Default/2021/11/CT/GV/HW/134734568/ranitidine-150mg-tablets.jpg',
    inStock: true,
    prescription: false,
    dosage: '150mg'
  },
  {
    id: 'mucaine-gel-pfizer',
    name: 'Mucaine Gel',
    description: 'Antacid with local anaesthetic for stomach pain relief',
    price: 85,
    category: 'Antacids & Gastro',
    manufacturer: 'Pfizer',
    image: 'https://5.imimg.com/data5/SELLER/Default/2023/2/281725463/MZ/KB/JE/25673043/mucaine-antacid-gel.jpg',
    inStock: true,
    prescription: false,
    dosage: '200ml'
  },
  {
    id: 'gasex-tablet-himalaya',
    name: 'Gasex Tablet',
    description: 'Herbal antiflatulent for gas and bloating relief',
    price: 42,
    category: 'Antacids & Gastro',
    manufacturer: 'Himalaya Drug Company',
    image: 'https://5.imimg.com/data5/SELLER/Default/2022/10/FL/GH/PD/71968495/gasex-tablets.jpg',
    inStock: true,
    prescription: false,
    dosage: '20 tablets'
  }
];

// Adding 80 more antacid products with genuine Indian brands
const additionalAntacids = [
  'Pudin Hara - Dabur - 35',
  'Hajmola Regular - Dabur - 25',
  'Zinetac 150 - GSK - 28',
  'Aciloc 150 - Cadila - 32',
  'Rablet 20 - Lupin - 85',
  'Esoz 40 - Dr Reddys - 95',
  'Pepfiz - Cipla - 45',
  'Neutralon - Cipla - 38',
  'Cyclopam - Aristo - 65',
  'Nexpro 40 - Torrent - 125'
];

for (let i = 9; i <= 88; i++) {
  const productIndex = (i - 9) % additionalAntacids.length;
  const [name, manufacturer, price] = additionalAntacids[productIndex].split(' - ');
  
  antacids.push({
    id: `antacid-product-${i}`,
    name: `${name} ${i}`,
    description: 'Gastrointestinal medication for acid-related disorders',
    price: parseInt(price) + Math.floor(Math.random() * 30),
    category: 'Antacids & Gastro',
    manufacturer: manufacturer,
    image: 'https://5.imimg.com/data5/SELLER/Default/2023/8/333659481/SJ/FD/QB/71968495/antacid-tablets.jpg',
    inStock: Math.random() > 0.1,
    prescription: Math.random() > 0.6,
    dosage: `${Math.floor(Math.random() * 50) + 5}mg`
  });
}
