import { prisma } from '@/lib/prisma';

export async function getBookingData() {
  const programs = await prisma.program.findMany({
    include: { prices: true },
  });

  const locations = await prisma.location.findMany();

  return { programs, locations };
}