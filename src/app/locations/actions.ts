import { Location } from "@/generated/prisma";

export async function getLocation(locationId: string) {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/locations/${locationId}`,
      {
        method: "GET",
      }
    );
    return res.json();
  } catch {
    return [];
  }
}

export async function getLocations(): Promise<Location[]> {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/locations`,
      {
        method: "GET",
      }
    );
    return res.json();
  } catch {
    return [];
  }
}
