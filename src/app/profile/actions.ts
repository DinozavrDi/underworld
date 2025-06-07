import { Order } from "@/generated/prisma";

export async function getOrderCabinet(userID: string): Promise<Order[]> {
  const result = await fetch(`/api/order/user/${userID}`, {
    method: "GET",
    cache: "no-cache",
  });

  if (result.status !== 201) {
    return [];
  }

  return result.json();
}

export async function getUserCabinet(userID: string) {
  try {
    const res = await fetch(`/api/user/${userID}`, {
      method: "GET",
    });

    return res.json();
  } catch {
    return null;
  }
}
