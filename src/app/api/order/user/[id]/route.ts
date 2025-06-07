import prisma from "@/lib/db";
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
  const result = await prisma.order.findMany({
    where: {
      userId: id.toString(),
    },
    select: {
      id: true,
      email: true,
      fio: true,
      createdAt: true,
      date: true,
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
          included: true,
        },
      },
    },
  });

  console.log("result", result);

  return new Response(JSON.stringify(result), {
    status: 201,
    headers: { "Content-Type": "application/json" },
  });
}
