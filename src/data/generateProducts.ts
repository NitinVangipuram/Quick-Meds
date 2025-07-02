
import { Product } from './productTypes';
import { antibiotics } from './antibiotics';
import { antifungals } from './antifungals';
import { antivirals } from './antivirals';
import { diabetes } from './diabetes';
import { cardiovascular } from './cardiovascular';
import { painInflammation } from './pain-inflammation';
import { gastrointestinal } from './gastrointestinal';
import { respiratoryNew } from './respiratory-new';
import { allergy } from './allergy';

export const getAllProducts = (): Product[] => {
  return [
    ...antibiotics,        // 30 products (15 medicines × 2 variations)
    ...antifungals,        // 30 products (15 medicines × 2 variations)
    ...antivirals,         // 30 products (15 medicines × 2 variations)
    ...diabetes,          // 30 products (15 medicines × 2 variations)
    ...cardiovascular,     // 30 products (15 medicines × 2 variations)
    ...painInflammation,   // 30 products (15 medicines × 2 variations)
    ...gastrointestinal,   // 30 products (15 medicines × 2 variations)
    ...respiratoryNew,     // 30 products (15 medicines × 2 variations)
    ...allergy            // 30 products (15 medicines × 2 variations)
  ];
};
