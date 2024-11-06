import { http, HttpResponse } from "msw";

import { GetMonthOrdersAmountRespose } from "../get-month-orders-amount";

export const getMonthOrdersAmountMock = http.get<
  never,
  never,
  GetMonthOrdersAmountRespose
>("metrics/month-orders-amount", () => {
  return HttpResponse.json({
    amount: 20,
    diffFromLastMonth: -5,
  });
});
