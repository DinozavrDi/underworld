import prisma from "@/lib/db";

export async function GET(request: Request) {
  try {
    const orders = await prisma.order.findMany({
      select: {
        id: true,
        email: true,
        fio: true,
        createdAt: true,
        date: true,
        status: true,
        user: {
          select: {
            name: true,
            id: true,
          },
        },
        location: {
          select: {
            id: true,
            name: true,
          },
        },
        program: {
          select: {
            id: true,
            title: true,
            subtitle: true,
          },
        },
      },
    });

    return new Response(JSON.stringify(orders), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Ошибка при получении заявок:", error);
    return new Response(JSON.stringify({ message: "Ошибка сервера" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
