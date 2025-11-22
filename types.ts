
export type Category = 'perfumes' | 'makeup' | 'clothing';

export interface Product {
  id: string;
  name: { ar: string; en: string };
  category: Category;
  price: number;
  oldPrice?: number;
  rating: number;
  reviewCount: number;
  images: string[];
  description: { ar: string; en: string };
  details: { ar: string; en: string };
  tags: ('new-arrival' | 'best-seller' | 'on-sale')[];
}

export interface CartItem {
  product: Product;
  quantity: number;
}
