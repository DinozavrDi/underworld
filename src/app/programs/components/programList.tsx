"use client";

import { Prisma } from "@/generated/prisma";
import ProgramCard from "./programsCard";

export default function programList({
  programs,
}: {
  programs: Prisma.ProgramGetPayload<{ include: { prices: true } }>[];
}) {
  if (programs.length === 0) return null;

  return (
    <div className="space-y-12">
      {programs.map((program, index) => (
        <ProgramCard key={program.id} program={program} />
      ))}
    </div>
  );
}
