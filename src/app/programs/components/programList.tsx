'use client';

import ProgramCard from "./programsCard";

type Price = {
  dayType: string;
  amount: number;
};

type Program = {
  id: string;
  title: string;
  subtitle: string;
  included: string[];
  required: string[];
  prices: Price[];
};

export default function programList({ programs }: { programs: Program[] }) {
  return (
    <div className="space-y-12">
      {programs.map((program, index) => (
        <ProgramCard
          key={program.id}
          delay={index * 0.2}
          title={program.title}
          subtitle={program.subtitle}
          included={program.included}
          required={program.required}
          prices={program.prices}
        />
      ))} 
    </div>
  );
}