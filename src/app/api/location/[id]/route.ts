import { Location } from "@/generated/prisma";
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

  return new Response(JSON.stringify(locations), {
    status: 201,
    headers: { "Content-Type": "application/json" },
  });
}
