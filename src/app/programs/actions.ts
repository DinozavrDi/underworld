import { Prisma } from "@/generated/prisma";

export async function getPrograms(): Promise<
  Prisma.ProgramGetPayload<{ include: { prices: true } }>[]
> {
  try {
    const result = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/programs`,
      {
        method: "GET",
      }
    );

    if (result.status !== 201) return [];

    return result.json();
  } catch (error) {
    console.log(error);
    return [];
  }
}
