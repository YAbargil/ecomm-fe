export interface IProduct {
  _id: string;
  titles: string;
  images: string[];
  brand: string;
  price: number;
  description: string;
  stock: number;
}

export interface IProductList {
  products: IProduct[];
  length: number;
}
