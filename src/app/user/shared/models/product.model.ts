export interface Card {
  id_product: number;
  code: string;
  brand: string;
  color: string;
  sale: number;
  price: number;
  stock: number;
  cover: string;
}

export interface Product {
  detail: {
    id_product: number;
    title: string;
    code: string;
    brand: string;
    color: string;
    sale: number;
    price: number;
    stock: number;
    description: string;
    specifications: string;
    cover: string;
  };
  imageList: string[];
}

export interface CartItem {
  detail: Card;
  quantity: number;
}
