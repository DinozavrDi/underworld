'use client';

import { SessionProvider } from 'next-auth/react';
import { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useSearchParams } from 'next/navigation';

export default function BookingFormWrapper({ programs, locations }: any){
  return(
    <SessionProvider>
      <BookingForm programs={programs} locations={locations} />
    </SessionProvider>
  )
}

function BookingForm({ programs, locations }: any) {
  const router = useRouter();
  const { data: session } = useSession();
  const searchParams = useSearchParams();
  const programFromUrl = searchParams.get('program');

  const matchedProgram = programs.find((p: any) => p.title === programFromUrl);

  const [form, setForm] = useState({
    fio: '',
    phone: '',
    email: '',
    programId: matchedProgram?.id || '',
    locationId: '',
    dateTime: '',
  });

  useEffect(() => {
    if (matchedProgram?.id) {
      setForm(prev => ({ ...prev, programId: matchedProgram.id }));
    }
  }, [matchedProgram]);

  const handleChange = (field: string, value: any) => {
    setForm(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async () => {
    const orderData = {
      ...form,
      fio: session?.user?.name || form.fio,
      email: session?.user?.email || form.email,
      userId: session?.user?.id || null,
    };

    try {
      const res = await fetch('/api/booking', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(orderData),
      });

      const result = await res.json();

      if (result.success) {
        alert('Бронирование успешно отправлено!');
        setForm({
          fio: '',
          phone: '',
          email: '',
          programId: '',
          locationId: '',
          dateTime: '',
        })
        router.push('/programs');
        router.refresh();
        ;
      } else {
        alert('Ошибка при отправке. Попробуйте позже.');
      }
    } catch (err) {
      console.error('Ошибка отправки:', err);
      alert('Произошла ошибка.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#072B31] px-4">
      <div className="bg-transparent text-white max-w-xl w-full">
        <h2 className="text-3xl font-bold text-[#EEBF00] mb-8">Бронирование</h2>

        <SessionBlock form={form} handleChange={handleChange} />

        <Select
          label="Выберите программу"
          options={programs}
          value={form.programId}
          onChange={v => handleChange('programId', v)}
        />

        <Select
          label="Выберите локацию"
          options={locations}
          value={form.locationId}
          onChange={v => handleChange('locationId', v)}
        />

        <Field label="Дата и время" type="datetime-local" value={form.dateTime} onChange={v => handleChange('dateTime', v)} />

        <div className="mt-8 text-center">
          <button
            onClick={handleSubmit}
            className="bg-[#EEBF00] px-6 py-2 rounded text-[#072B31] font-bold hover:bg-yellow-400 transition"
          >
            Отправить заявку
          </button>
        </div>
      </div>
    </div>
  );
}

function Field({ label, value, onChange, type = 'text' }: any) {
  return (
    <div className="mb-6">
      <input
        type={type}
        value={value}
        onChange={e => onChange(e.target.value)}
        placeholder={label}
        className="w-full bg-transparent border-b border-gray-500 py-2 px-1 focus:outline-none placeholder-white"
      />
    </div>
  );
}

function Select({ label, options, value, onChange }: any) {
  return (
    <div className="mb-6">
      <select
        value={value}
        onChange={e => onChange(e.target.value)}
        className="w-full bg-transparent border-b border-gray-500 py-2 px-1 text-white focus:outline-none"
      >
        <option value="" disabled>{label}</option>
        {options.map((option: any) => (
          <option key={option.id} value={option.id} className="bg-[#072B31]">
            {option.title || option.name}
          </option>
        ))}
      </select>
    </div>
  );
}

function SessionBlock({ form, handleChange }: { form: any, handleChange: (field: string, value: any) => void }) {
  const { data: session } = useSession();

  return (
    <>
      {!session && (
        <>
          <Field label="ФИО" value={form.fio} onChange={v => handleChange('fio', v)} />
          <Field label="Телефон" value={form.phone} onChange={v => handleChange('phone', v)} />
          <Field label="Почта" value={form.email} onChange={v => handleChange('email', v)} />
        </>
      )}
    </>
  );
}
