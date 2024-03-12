export interface ProductType {
  id: number;
  title: string;
  price: number;
  ququantity: number;
  description: string;
  category: string;
  image: string;
  rating: { rate: number; count: number };
}
