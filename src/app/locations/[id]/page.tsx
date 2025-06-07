import { getLocations } from "../actions";

export default async function LocationPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const locationId = (await params).id;

  const location = await getLocations(locationId);

  const imageSrc =
    location.name === "Коралловый город"
      ? "/images/city.png"
      : location.name === "Безмолвный трон"
      ? "/images/trone.png"
      : "/images/zr.png";

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#fdfcdc] to-[#0081a7] text-white px-4 py-20">
      <div className="max-w-4xl mx-auto flex flex-col gap-10">
        <h1 className="text-4xl font-bold text-center text-[#16C9E2]">
          {location.name}
        </h1>
        <img
          src={imageSrc}
          alt={location.name}
          className="w-full max-w-3xl mx-auto transition-transform duration-300 hover:scale-105"
        />
        <p className="text-lg leading-relaxed text-white/90">
          {location.description}
        </p>
      </div>
    </div>
  );
}
