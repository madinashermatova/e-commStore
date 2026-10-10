export type Product = {
  id: number;
  name: string;
  image: string;
  price: number;
  oldPrice?: number;
  discount?: number;
  rating: number;
};

export type ProductDetails = Product & {
  description?: string;
  images?: string[];
  colors?: string[];
  sizes?: string[];
  category?: string[];
};