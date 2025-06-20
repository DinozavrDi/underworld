import { getAdminOrders } from "./actions";
import StatusBlock from "./components/StatusBlock";

export default async function AdminPage() {
  return (
    <main className="py-10 sm:px-10 bg-[url('/images/main-bg.jpg')] bg-cover min-h-screen pt-[90px]">
      <StatusBlock />
    </main>
  );
}
