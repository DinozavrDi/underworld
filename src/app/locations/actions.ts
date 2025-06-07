export async function getLocations() {
  try {
    const res = await fetch(`/api/locations`, {
      method: "GET",
    });
    return res.json();
  } catch {
    return [];
  }
}
