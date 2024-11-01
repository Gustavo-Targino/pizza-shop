import { api } from "@/lib/axios";

export interface CancelOrdemParams {
  orderId: string;
}

export async function cancelOrder({ orderId }: CancelOrdemParams) {
  await api.patch(`orders/${orderId}/cancel`);
}
