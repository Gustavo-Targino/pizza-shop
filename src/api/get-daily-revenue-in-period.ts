import { api } from "@/lib/axios";
import { DateRange } from "react-day-picker";

interface GetDailyRevenueInPeriodQuery {
  from?: Date;
  to?: Date;
}

export type GetDailyRevenueInPeriodRespose = {
  date: string;
  receipt: number;
}[];

export async function getDailyRevenueInPeriod({
  from,
  to,
}: GetDailyRevenueInPeriodQuery) {
  const response = await api.get<GetDailyRevenueInPeriodRespose>(
    "metrics/daily-receipt-in-period",
    {
      params: {
        from,
        to,
      },
    },
  );

  return response.data;
}
