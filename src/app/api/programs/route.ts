import prisma from "@/lib/db";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const result = await prisma.program.findMany({
    select: {
      id: true,
      title: true,
      subtitle: true,
      description: true,
      included: true,
      prices: true,
      required: true,
      requiredCertificationLevel: true,
    },
  });

  if (!result) {
    return new Response(
      JSON.stringify({ message: "Error while creating order" }),
      {
        status: 400,
        headers: { "Content-Type": "application/json" },
      }
    );
  }

  return new Response(JSON.stringify(result), {
    status: 201,
    headers: { "Content-Type": "application/json" },
  });
}
