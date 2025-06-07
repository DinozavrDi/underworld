import prisma from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const id = (await params).id;

  const locations = await prisma.location.findUnique({
    where: {
      id: id.toString(),
    },
    select: {
      id: true,
      name: true,
      description: true,
      requiredCertificationLevel: true,
      locationImgUrl: true,
    },
  });

  if (!locations) {
    return new Response(
      JSON.stringify({ message: "Error while creating order" }),
      {
        status: 400,
        headers: { "Content-Type": "application/json" },
      }
    );
  }

  return new Response(JSON.stringify(locations), {
    status: 201,
    headers: { "Content-Type": "application/json" },
  });
}
