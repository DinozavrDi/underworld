import { SessionProvider } from "next-auth/react";
import { getOrderCabinet, getUserCabinet } from "./actions";
import UserDashboard from "./components/UserDashboard";
import UserDashboardWrapper from "./components/UserDashboard";

export default async function Cabinet() {
  return (
    <main className="p-10 min-h-screen bg-gradient-to-br from-[#89f1f3] to-white">
      <h1 className="text-3xl font-bold">Личный кабинет</h1>
      <UserDashboardWrapper />
    </main>
  );
}
