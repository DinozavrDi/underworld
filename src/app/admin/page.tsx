import { getAdminOrders } from "./actions";
import StatusBlock from "./components/StatusBlock";

export default async function AdminPage() {
  const orders = await getAdminOrders();

  return (
    <main className="p-10 bg-[url('/images/main-bg.jpg')] bg-cover min-h-screen pt-[90px]">
      <StatusBlock orders={orders} />
    </main>
  );
}
