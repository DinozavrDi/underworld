import { Location } from "@/generated/prisma";

export async function getLocations(): Promise<Location[]> {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/location`, {
      method: "GET",
    });

    if (res.status !== 200) return [];

    return res.json();
  } catch {
    return [];
  }
}

export async function getLocation(locationId: string): Promise<Location> {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/location/${locationId}`,
      {
        method: "GET",
      }
    );
    return res.json();
  } catch {
    return {} as Location;
  }
}
