import BookingFormWrapper from "@/components/BookingForm";
import { getBookingData } from "./actions";

export default async function BookingPage() {
  const { programs, locations } = await getBookingData();
  
  return (
    <div>
      <BookingFormWrapper programs={programs} locations={locations} />
    </div>
  );
}