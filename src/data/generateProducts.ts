import { Product } from './productTypes';
import { antibiotics } from './antibiotics';
import { analgesics } from './analgesics';
import { diabetes } from './diabetes';
import { antifungals } from './antifungals';
import { antivirals } from './antivirals';
import { cardiovascular } from './cardiovascular';
import { painInflammation } from './pain-inflammation';
import { gastrointestinal } from './gastrointestinal';
import { respiratoryNew } from './respiratory-new';
import { allergy } from './allergy';
import { antacids } from './antacids';
import { cns } from './cns';
import { dermatology } from './dermatology';

export const getAllProducts = (): Product[] => {
  return [
    ...antibiotics,       // 12 clean products (6 medicines × 2 variations)
    ...analgesics,        // 12 clean products (6 medicines × 2 variations) 
    ...diabetes,          // 12 clean products (6 medicines × 2 variations)
    ...antifungals,        
    ...antivirals,        
    ...cardiovascular,    
    ...painInflammation,  
    ...gastrointestinal,  
    ...respiratoryNew,    
    ...allergy,           
    ...antacids,          
    ...cns,               
    ...dermatology        
  ];
};
