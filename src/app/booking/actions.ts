import { Prisma } from "@/generated/prisma";

export async function getBookingData() {
  try {
    const result = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/booking`,
      {
        method: "GET",
      }
    );

    if (result.status !== 201) return [];

    return result.json();
  } catch (error) {
    console.log(error);
    return null;
  }
}

export async function createBooking(formData: FormData) {
  try {
    const result = await fetch(`/api/booking`, {
      method: "POST",
      body: formData,
    });

    if (result.status !== 201) return null;

    return result;
  } catch (error) {
    console.log(error);
    return null;
  }
}
