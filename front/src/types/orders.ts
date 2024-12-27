import { Product } from "./product";

export interface Order {
    id: number;
    status: string,
    date: string;
    products: Product[],
    totalOrder: number
}
  