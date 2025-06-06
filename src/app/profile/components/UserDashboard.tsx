import { format } from "date-fns";

export default function UserDashboard({ user, orders }) {
  return (
    <div className="p-6 max-w-3xl mx-auto space-y-8">
      {/* Профиль */}
      <div className="bg-white p-6 rounded-2xl shadow-md flex items-start gap-4">
        <img
          src={user.userImageUrl || "https://via.placeholder.com/150"}
          alt="user"
          className="w-24 h-24 rounded-full object-cover"
        />
        <div>
          <h2 className="text-xl font-semibold">{user.name}</h2>
          <p className="text-gray-500">{user.email}</p>
        </div>
      </div>

      {/* История погружений */}
      <div className="bg-white p-6 rounded-2xl shadow-md">
        <h3 className="text-lg font-semibold mb-4">История погружений</h3>
        <div className="space-y-4">
          {orders.length === 0 && (
            <p className="text-gray-500">Нет записей о погружениях.</p>
          )}
          {orders.map((order) => (
            <div
              key={order.id}
              className="border-l-4 pl-4 py-2 rounded-md bg-gray-50"
            >
              <p className="font-medium">{order.program.title}</p>
              <p className="text-sm text-gray-600">
                Локация: {order.location.name || "—"}
              </p>
              <p className="text-sm text-gray-500">
                Дата заявки: {format(new Date(order.createdAt), "dd.MM.yyyy")}
              </p>
              <span
                className={`inline-block mt-1 px-2 py-0.5 text-xs rounded-full ${
                  order.status === "DONE"
                    ? "bg-green-100 text-green-800"
                    : order.status === "NEW"
                    ? "bg-yellow-100 text-yellow-800"
                    : "bg-gray-200 text-gray-600"
                }`}
              >
                Статус: {order.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
