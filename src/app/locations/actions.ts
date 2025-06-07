export async function getLocations(locationId: string) {
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
