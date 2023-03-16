export interface IProduct {
  _id: string;
  title: string;
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

export interface IOrderItem {
  _id: string;
  userId: string;
  productId: string;
  itemName: string;
  itemBrand: string;
  brand: string;
  quantity: string;
  itemPrice: number;
  total: number;
}
