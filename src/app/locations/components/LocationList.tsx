"use client";
import prisma from "@/lib/db";
import Link from "next/link";
import { getLocations } from "../actions";
import { Location } from "@/generated/prisma";
import { useEffect, useState } from "react";

export default async function LocationsList() {
  const [locations, setLocations] = useState<Location[]>([]);

  useEffect(() => {
    const fetchLocations = async () => {
      const locations = await getLocations();
      setLocations(locations);
    };
    fetchLocations();
  }, []);

  return (
    <div className="flex flex-col gap-24 px-4 py-20">
      {locations.map((location: Location) => (
        <div
          key={location.id}
          className="flex flex-col md:flex-row items-center md:items-stretch md:justify-between gap-10"
        >
          {/* Левая часть: текст */}
          <div className="md:w-1/2 flex flex-col justify-center text-white">
            <Link href={`/locations/${location.id}`}>
              <h3 className="text-3xl font-bold text-[#16C9E2] mb-4 px-20 hover:underline cursor-pointer">
                {location.name}
              </h3>
            </Link>
            <p className="text-black/80 text-base leading-relaxed px-20">
              {location.description}
            </p>
          </div>

          {/* Правая часть: фото */}
          <div className="md:w-1/2 flex justify-end">
            <Link href={`/locations/${location.id}`}>
              <img
                src={
                  location.name === "Коралловый город"
                    ? "/images/city.png"
                    : location.name === "Безмолвный трон"
                    ? "/images/trone.png"
                    : "/images/zr.png"
                }
                alt={location.name}
                className="w-full max-w-xl transition-transform duration-300 hover:scale-105 cursor-pointer"
              />
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
