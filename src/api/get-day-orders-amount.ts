import { api } from "@/lib/axios";

export interface GetDayOrdersAmountRespose {
  amount: number;
  diffFromYesterday: number;
}

export async function getDayOrdersAmount() {
  const response = await api.get<GetDayOrdersAmountRespose>(
    "metrics/day-orders-amount",
  );

  return response.data;
}
