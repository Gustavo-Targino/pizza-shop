import { http, HttpResponse } from "msw";
import { GetMonthRevenueRespose } from "../get-month-revenue";

export const getMonthRevenueMock = http.get<
  never,
  never,
  GetMonthRevenueRespose
>("metrics/month-receipt", () => {
  return HttpResponse.json({
    receipt: 20000,
    diffFromLastMonth: 10,
  });
});
