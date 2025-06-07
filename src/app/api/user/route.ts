// app/api/user/route.ts

import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import prisma from "@/lib/db";
import { options } from "../auth/[...nextauth]/options";
export async function GET() {
  const session = await getServerSession(options);

  if (!session || !session.user?.email) {
    return new NextResponse("Unauthorized", { status: 401 });
  }

  const user = await prisma.user.findUnique({
    where: {
      email: session.user.email,
    },
  });

  return NextResponse.json(user);
}
