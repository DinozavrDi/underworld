"use client";
import { Order, Prisma, User } from "@/generated/prisma";
import { format } from "date-fns";
import { getProviders, SessionProvider, useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { getOrderCabinet, getUserCabinet } from "../actions";
import Image from "next/image";
import OrderBlock from "./OrderBlock";

export default function UserDashboardWrapper() {
  return (
    <SessionProvider>
      <UserDashboard />
    </SessionProvider>
  );
}

function UserDashboard() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [user, setUser] = useState<User | null>();
  const session = useSession();

  useEffect(() => {
    const fetchOrders = async () => {
      if (!session.data) {
        console.log("no session");
        return null;
      }
      const newOrders = await getOrderCabinet(session.data.user.id);
      const newUser = await getUserCabinet(session.data.user.id);

      console.log(newOrders, newUser);

      setOrders(newOrders);
      setUser(newUser);
    };

    fetchOrders();
  }, [session.data]);

  if (!user) {
    return <div>loading</div>;
  }

  return (
    <div className="p-6 max-w-3xl mx-auto space-y-8">
      {/* Профиль */}
      <div className="bg-white p-12  rounded-2xl shadow-md flex items-start gap-10">
        <Image
          src={"/images/profile.png"}
          width={96}
          height={96}
          alt="user"
          className="w-24 h-24 rounded-full object-cover"
        />
        <div className="flex flex-col gap-3">
          <h2 className="text-xl font-semibold text-black">{user?.name}</h2>
          <div className="flex flex-col gap-3">
            <InfoBlock
              title="Дата регистрации"
              value={new Date(user.createdAt).toLocaleDateString("ru-RU")}
            />
            <InfoBlock title="Телефон" value={user.phone} />
            <InfoBlock title="Почта" value={user.email} />
          </div>
        </div>
      </div>

      {/* История погружений */}
      <div className="bg-white p-6 rounded-2xl shadow-md">
        <h3 className="text-lg font-semibold text-black mb-4">
          История погружений
        </h3>
        <div className="space-y-4">
          {orders.length === 0 && (
            <p className="text-gray-500">Нет записей о погружениях.</p>
          )}
          {orders.map((order: any) => (
            <OrderBlock key={order.id} order={order} />
          ))}
        </div>
      </div>
    </div>
  );
}

function InfoBlock({ title, value }: { title: string; value: string }) {
  return (
    <div className="flex w-full justify-between min-w-[300px]">
      <span className=" text-gray-500 ">{title}:</span>
      <span className="text-black font-medium">{value} </span>
    </div>
  );
}
