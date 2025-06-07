"use client";

import { SessionProvider } from "next-auth/react";
import {
  FormEvent,
  FormEventHandler,
  InputHTMLAttributes,
  SelectHTMLAttributes,
  useEffect,
  useState,
} from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";
import { createBooking } from "../actions";

export default function BookingFormWrapper({ programs, locations }: any) {
  return (
    <SessionProvider>
      <BookingForm programs={programs} locations={locations} />
    </SessionProvider>
  );
}

function BookingForm({ programs, locations }: any) {
  const router = useRouter();
  const { data: session } = useSession();
  const searchParams = useSearchParams();
  const programFromUrl = searchParams.get("program");

  const matchedProgram = programs.find((p: any) => p.title === programFromUrl);

  const [form, setForm] = useState({
    fio: "",
    phone: "",
    email: "",
    programId: matchedProgram?.id || "",
    locationId: "",
    dateTime: "",
  });

  useEffect(() => {
    if (matchedProgram?.id) {
      setForm((prev) => ({ ...prev, programId: matchedProgram.id }));
    }
  }, [matchedProgram]);

  const onBookingFormHandler = async (e: FormEvent<HTMLFormElement>) => {
    const formData = new FormData(e.currentTarget);

    if (session) {
      formData.append("userId", session.user.id);
      formData.append("email", session.user.email || "");
      formData.append("name", session.user.name || "");
      formData.append("phone", session.user.phone || "");
    }

    console.log("formData", Object.fromEntries(formData.entries()).dateTime);

    const result = await createBooking(formData);

    if (result?.status === 201) {
      alert("Заявка отправлена");
    } else {
      alert("Произошла ошибка");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#072B31] px-4">
      <div className="bg-transparent text-white max-w-xl w-full">
        <h2 className="text-3xl font-bold text-[#EEBF00] mb-8">Бронирование</h2>

        <form onSubmit={onBookingFormHandler}>
          <SessionBlock />
          <Select
            name="programId"
            label="Выберите программу"
            options={programs}
            defaultValue={matchedProgram?.id}
          />

          <Select
            name="locationId"
            label="Выберите локацию"
            options={locations}
          />

          <Field name="dateTime" label="Дата и время" type="datetime-local" />

          <div className="mt-8 text-center">
            <button
              type="submit"
              className="bg-[#EEBF00] px-6 py-2 rounded text-[#072B31] font-bold hover:bg-yellow-400 transition"
            >
              Отправить заявку
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

function Field({
  label,
  type = "text",
  ...props
}: {
  label: string;
  type?: string;
} & InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div className="mb-6">
      <input
        type={type}
        placeholder={label}
        {...props}
        className="w-full bg-transparent border-b border-gray-500 py-2 px-1 focus:outline-none placeholder-white"
      />
    </div>
  );
}

function Select({
  label,
  options,
  ...props
}: {
  label: string;
  options: any[];
} & SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <div className="mb-6">
      <select
        required
        className="w-full bg-transparent border-b border-gray-500 py-2 px-1 text-white focus:outline-none"
        {...props}
      >
        <option value="" disabled>
          {label}
        </option>
        {options.map((option: any) => (
          <option key={option.id} value={option.id} className="bg-[#072B31]">
            {option.title || option.name}
          </option>
        ))}
      </select>
    </div>
  );
}

function SessionBlock() {
  const { data: session } = useSession();

  return (
    <>
      {!session && (
        <>
          <Field name="name" label="ФИО" />
          <Field name="phone" label="Телефон" />
          <Field name="email" label="Почта" />
        </>
      )}
    </>
  );
}
