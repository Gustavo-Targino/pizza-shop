import { http, HttpResponse } from "msw";

import { GetDayOrdersAmountRespose } from "../get-day-orders-amount";

export const getDayOrdersAmountMock = http.get<
  never,
  never,
  GetDayOrdersAmountRespose
>("metrics/day-orders-amount", () => {
  return HttpResponse.json({
    amount: 14,
    diffFromYesterday: -7,
  });
});
