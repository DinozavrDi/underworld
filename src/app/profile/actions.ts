import { Order } from "@prisma/client"
import { User } from "@prisma/client"

export async function getOrderCabinet(): Promise<Order[]> {
  const user = await getUserCabinet();

  if (!user?.id) {
    console.error("Нет user.id");
    return [];
  }

  const result = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/order?userId=${user.id}`,
    { method: "GET" }
  );

  if (!result.ok) {
    console.error("Ошибка при загрузке заявок:", await result.text());
    return [];
  }

  return result.json();
}

export async function getUserCabinet() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/user`, {
    method: "GET",
    credentials: "include", // <== важно!
    headers: {
      "Content-Type": "application/json",
    },
    cache: "no-store",
  });

  if (!res.ok) return null;

  return res.json();
}