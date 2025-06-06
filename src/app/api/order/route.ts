import { prisma } from "@/lib/db";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const userId = searchParams.get("userId");

    if (!userId) {
      return new Response(
        JSON.stringify({ message: "userId is required" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    const orders = await prisma.order.findMany({
      where: {
        userId, // фильтруем только заявки авторизованного пользователя
      },
      select: {
        id: true,
        email: true,
        fio: true,
        createdAt: true,
        dateTime: true,
        status: true,
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
    return new Response(
      JSON.stringify({ message: "Ошибка сервера" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
