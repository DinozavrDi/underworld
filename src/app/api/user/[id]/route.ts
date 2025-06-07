import prisma from "@/lib/db";
import { OrderStatus } from "@prisma/client";
import { NextRequest } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const id = (await params).id;

  if (!id) {
    return new Response(
      JSON.stringify({ message: "Error while creating order" }),
      {
        status: 400,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
  const result = await prisma.user.findUnique({
    where: {
      id: id.toString(),
    },
  });
  return new Response(JSON.stringify(result), {
    status: 201,
    headers: { "Content-Type": "application/json" },
  });
}

export async function PATCH(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const id = (await params).id;
  const formData = await request.formData();
  const data = Object.fromEntries(formData.entries());

  if (!id || !data.status) {
    return new Response(JSON.stringify({ message: "Invalid input" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  // Преобразуем и проверим статус
  const status = data.status.toString().toUpperCase();

  if (!Object.values(OrderStatus).includes(status as OrderStatus)) {
    return new Response(JSON.stringify({ message: "Invalid status value" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  const result = await prisma.order.update({
    where: { id: id.toString() },
    data: {
      status: status as OrderStatus,
    },
  });

  if (!result) {
    return new Response(
      JSON.stringify({ message: "Failed to update order status" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }

  return new Response(JSON.stringify(result), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
