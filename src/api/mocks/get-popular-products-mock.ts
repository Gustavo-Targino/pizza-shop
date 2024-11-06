import { http, HttpResponse } from "msw";
import { GetPopularProductsRespose } from "../get-popular-products";

export const getPopularProductsMock = http.get<
  never,
  never,
  GetPopularProductsRespose
>("metrics/popular-products", () => {
  return HttpResponse.json([
    { product: "Pizza 01", amount: 20 },
    { product: "Pizza 02", amount: 12 },
    { product: "Pizza 03", amount: 19 },
    { product: "Pizza 04", amount: 30 },
    { product: "Pizza 05", amount: 34 },
  ]);
});
