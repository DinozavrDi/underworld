import OfferSection from '@/components/OfferSection'
import ProgramList from '@/app/programs/components/programList'
import { prisma } from "@/lib/prisma";

export default async function ProgramsPage() {
  const programs = await prisma.program.findMany({
    include: {
      prices: true,
    },
  });

  return (
    <div className="pt-32">
      <header className="max-w-4xl mb-16 mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Программы дайвинга</h1>
        <p className="text-lg text-gray-600 mx-auto">
          Погрузитесь в мир подводных приключений с нашими профессиональными инструкторами
        </p>
      </header>

      <ProgramList programs={programs} />
      <OfferSection />
    </div>
  );
}