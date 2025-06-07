"use client";

import { Prisma } from "@/generated/prisma";
import { changeOrderStatus, getAdminOrders } from "../actions";
import { useEffect, useState } from "react";

export default function StatusBlock() {
  const [orders, setOrders] = useState<
    Prisma.OrderGetPayload<{
      include: { program: true; location: true; user: true };
    }>[]
  >([]);

  useEffect(() => {
    const fetchOrder = async () => {
      const orders = await getAdminOrders();
      setOrders(orders);
    };

    fetchOrder();
  }, []);

  return (
    <section className="bg-white px-3 py-2 rounded-lg">
      <table className="w-full rounded-lg ">
        <thead>
          <tr>
            <CustomTH>ID заказа</CustomTH>
            <CustomTH>Пользователь</CustomTH>
            <CustomTH>Локация</CustomTH>
            <CustomTH>Программа</CustomTH>
            <CustomTH>Дата</CustomTH>
            <CustomTH>Статус</CustomTH>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <OrderInTable order={order} key={order.id} />
          ))}
        </tbody>
      </table>
    </section>
  );
}

function CustomTH({ children }: { children: React.ReactNode }) {
  return (
    <th className="rounded-lg text-black font-semibold text-left">
      {children}
    </th>
  );
}

function CustomTD({ children }: { children: React.ReactNode }) {
  return <td className="text-black">{children}</td>;
}

function OrderInTable({
  order,
}: {
  order: Prisma.OrderGetPayload<{
    include: { program: true; location: true; user: true };
  }>;
}) {
  const onStatusChange = async (e: React.ChangeEvent<HTMLSelectElement>) => {
    const formData = new FormData();
    formData.append("status", e.target.value);
    await changeOrderStatus(formData, order.id);
  };
  return (
    <tr>
      <CustomTD>{order.id}</CustomTD>
      <CustomTD>{order.user?.name}</CustomTD>
      <CustomTD>{order.location.name}</CustomTD>
      <CustomTD>{order.program.title}</CustomTD>
      <CustomTD>{new Date(order.date).toLocaleDateString()}</CustomTD>
      <CustomTD>
        <select
          onChange={onStatusChange}
          defaultValue={order.status}
          className="text-black"
        >
          <option value={"NEW"}>Новый</option>
          <option value={"CONFIRMED"}>Подтвержден</option>
          <option value={"COMPLETED"}>Завершен</option>
          <option value={"CANCELLED"}>Отменен</option>
        </select>
      </CustomTD>
    </tr>
  );
}
