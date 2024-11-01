import { api } from "@/lib/axios";

export interface GetMonthRevenueRespose {
  receipt: number;
  diffFromLastMonth: number;
}

export async function getMonthRevenue() {
  const response = await api.get<GetMonthRevenueRespose>(
    "metrics/month-receipt",
  );

  return response.data;
}
