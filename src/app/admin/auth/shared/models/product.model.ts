export interface Product {
  id_product: number;
  title: string;
  code: string;
  brand: string;
  color: string;
  sale: number;
  price: number;
  stock: number;
  bestseller: boolean;
  description: string;
  specifications: string;
  cover: string;
  status: boolean;
}

export interface ImageList {
  id_image: number;
  path: string;
}

export interface ProductList {
  product: Product;
  imagesList: ImageList[];
}
