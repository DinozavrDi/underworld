import prisma from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const locations = await prisma.location.findMany({
    select: {
      id: true,
      name: true,
      description: true,
      requiredCertificationLevel: true,
      locationImgUrl: true,
    },
  });

  if (!locations) {
    return new Response(JSON.stringify([]), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  return new Response(JSON.stringify(locations), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
