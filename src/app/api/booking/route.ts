import prisma from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET() {
  const programs = await prisma.program.findMany({
    include: { prices: true },
  });

  const locations = await prisma.location.findMany({
    select: { id: true, name: true },
  });

  return new Response(JSON.stringify({ programs, locations }), {
    status: 201,
    headers: { "Content-Type": "application/json" },
  });
}

export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    const data = Object.fromEntries(formData.entries());
    const { name, phone, email, programId, locationId, dateTime } = data;
    console.log(data);

    if (!programId || !locationId || !dateTime) {
      return new Response(JSON.stringify({ message: "User already exists" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    const order = await prisma.order.create({
      data: {
        fio: name.toString(),
        phone: phone.toString(),
        email: email.toString(),
        programId: programId.toString(),
        locationId: locationId.toString(),
        date: new Date(dateTime.toString()).toISOString(),
        userId: data.userId.toString() ?? undefined,
      },
    });

    console.log("order", order);

    return new Response(JSON.stringify(order), {
      status: 201,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Ошибка при создании заказа:", error);
    return NextResponse.json(
      { success: false, error: "Ошибка при создании заказа" },
      { status: 500 }
    );
  }
}
