
import { getAllProducts } from './generateProducts';
import { categories } from './categories';

export type { Product } from './productTypes';

export const products = getAllProducts();
export { categories };

console.log(`Total products loaded: ${products.length}`);
