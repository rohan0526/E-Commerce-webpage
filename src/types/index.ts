export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  rating: number;
  description: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export type Theme = 'light' | 'dark';

export interface Category {
  id: number;
  name: string;
  image: string;
} 