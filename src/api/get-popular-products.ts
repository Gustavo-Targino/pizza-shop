import { api } from "@/lib/axios";

export type GetPopularProductsRespose = {
  product: string;
  amount: number;
}[];

export async function getPopularProducts() {
  const response = await api.get<GetPopularProductsRespose>(
    "metrics/popular-products",
  );

  return response.data;
}
