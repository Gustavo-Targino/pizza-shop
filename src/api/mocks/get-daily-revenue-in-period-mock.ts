import { http, HttpResponse } from "msw";
import { GetDailyRevenueInPeriodRespose } from "../get-daily-revenue-in-period";

export const getDailyRevenueInPeriodMock = http.get<
  never,
  never,
  GetDailyRevenueInPeriodRespose
>("metrics/daily-receipt-in-period", () => {
  return HttpResponse.json([
    { date: "01/01/2024", receipt: 2000 },
    { date: "02/01/2024", receipt: 800 },
    { date: "03/01/2024", receipt: 5152 },
    { date: "04/01/2024", receipt: 152 },
    { date: "05/01/2024", receipt: 1512 },
    { date: "06/01/2024", receipt: 4334 },
    { date: "07/01/2024", receipt: 8331 },
  ]);
});
