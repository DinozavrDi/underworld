import { Order, Prisma } from "@/generated/prisma";

export default function OrderBlock({
  order,
}: {
  order: Prisma.OrderGetPayload<{ include: { program: true; location: true } }>;
}) {
  const getStatus = () => {
    if (order.status === "NEW") {
      return "Новый";
    } else if (order.status === "CONFIRMED") {
      return "Подтвержден";
    } else if (order.status === "COMPLETED") {
      return "Завершен";
    } else if (order.status === "CANCELLED") {
      return "Отменен";
    }
  };

  return (
    <div className="bg-[#082b31] p-5 rounded-lg flex flex-col gap-2">
      <div className="flex justify-between">
        <p className="text-white font-bold">
          Программа: <span className="font-normal">{order.program.title}</span>
        </p>
        <p className="text-white font-bold">
          {new Date(order.date).toLocaleDateString()}
        </p>
      </div>
      <div>
        <p className="font-bold">
          Локация:{" "}
          <span className="font-normal text-yellow-500">
            {order.location.name}
          </span>
        </p>
      </div>
      <div className="flex justify-between items-end">
        <div>
          <p className="font-bold">Включено: </p>
          <ul className="flex flex-col gap-1 list-disc ml-5">
            {order.program.included.map((item) => (
              <li className="text-white" key={item}>
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p>
            Статус: <span className="text-green-500">{getStatus()}</span>
          </p>
        </div>
      </div>
    </div>
  );
}
