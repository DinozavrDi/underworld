import OfferSection from "@/components/OfferSection";
import ProgramList from "@/app/programs/components/programList";
import { getPrograms } from "./actions";

export default async function ProgramsPage() {
  const programs = await getPrograms();
  return (
    <main className="pt-32 bg-[url('/images/backPhoto.png')] bg-cover">
      <section className="max-w-4xl mb-16 mx-auto">
        <h1 className="text-4xl font-bold text-white mb-4">
          Программы дайвинга
        </h1>
        <p className="text-lg text-gray-400 mx-auto">
          Погрузитесь в мир подводных приключений с нашими профессиональными
          инструкторами
        </p>
      </section>

      <ProgramList programs={programs} />
      <OfferSection />
    </main>
  );
}
