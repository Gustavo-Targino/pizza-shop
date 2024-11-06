import { http, HttpResponse } from "msw";
import { GetMonthCanceledOrdersAmountRespose } from "../get-month-canceled-orders-amount";

export const getMonthCanceleOrdersAmountMock = http.get<
  never,
  never,
  GetMonthCanceledOrdersAmountRespose
>("metrics/month-canceled-orders-amount", () => {
  return HttpResponse.json({
    amount: 5,
    diffFromLastMonth: -5,
  });
});
