import { api } from "@/lib/axios";

export interface GetMonthOrdersAmountRespose {
  amount: number;
  diffFromLastMonth: number;
}

export async function getMonthOrdersAmount() {
  const response = await api.get<GetMonthOrdersAmountRespose>(
    "metrics/month-orders-amount",
  );

  return response.data;
}
