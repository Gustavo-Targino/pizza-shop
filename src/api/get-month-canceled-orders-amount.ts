import { api } from "@/lib/axios";

export interface GetMonthCanceledOrdersAmountRespose {
  amount: number;
  diffFromLastMonth: number;
}

export async function getMonthCanceledOrdersAmount() {
  const response = await api.get<GetMonthCanceledOrdersAmountRespose>(
    "metrics/month-canceled-orders-amount",
  );

  return response.data;
}
