// app/locations/page.tsx

import { getLocations } from "./actions";
import LocationIntro from "./components/LocationIntro";
import LocationsList from "./components/LocationList";

export default async function LocationsPage() {
  const locations = await getLocations();

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
      <div className="min-h-screen">
        <section className="max-w-6xl mx-auto">
          <LocationsList locations={locations} />
        </section>
      </div>
      {/* Тут будут другие блоки */}
    </main>
  );
}
