// app/locations/page.tsx

import LocationIntro from "./components/LocationIntro";
import LocationsList from "./components/LocationList";

export default function LocationsPage() {
  return (
    <main>

      <img
        src="/images/image34.png"
        alt="Waves2"
        className="absolute top-0 left-0 w-full h-auto pointer-events-none"
      />
      <LocationIntro />
      <>
      <img
        src="/images/image33.png"
        alt="Waves1"
        className="absolute top-120 left-0 w-full h-auto pointer-events-none"
      />
      </>
      <main className="min-h-screen">
        <section className="max-w-6xl mx-auto">
          <LocationsList />
        </section>
      </main>
      {/* Тут будут другие блоки */}
    </main>
  );
}
