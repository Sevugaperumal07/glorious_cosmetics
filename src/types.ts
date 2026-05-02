export interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  description: string;
  image: string;
  tags: string[];
  ingredients?: string;
  benefits?: string[];
  usage?: string;
}

export interface CartItem extends Product {
  quantity: number;
}
