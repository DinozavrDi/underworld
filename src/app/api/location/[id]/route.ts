import prisma from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const id = (await params).id;

  const location = await prisma.location.findUnique({
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

  if (!location) {
    return new Response(JSON.stringify([]), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  return new Response(JSON.stringify(location), {
    status: 201,
    headers: { "Content-Type": "application/json" },
  });
}
