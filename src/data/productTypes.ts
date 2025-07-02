
export interface Product {
  id: string;
  name: string;
  category: string;
  manufacturer: string;
  price: number;
  description: string;
  image: string;
  inStock: boolean;
  prescription: boolean;
  dosage?: string;
}
