"use client";

import { createUser } from "@/app/registration/actions";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Link from "next/link";

export default function RegForm() {
  const router = useRouter();
  const [error, setError] = useState("");

  const onRegistrationFormHandler = async (formData: FormData) => {
    setError("");

    try {
      const response = await createUser(formData);
      const email = formData.get("email")?.toString();
      const password = formData.get("password")?.toString();

      if (response?.email && email && password) {
        const res = await signIn("credentials", {
          email,
          password,
          redirect: false,
        });

        if (res?.ok) {
          router.push("/profile");
          router.refresh();
        } else {
          setError("Ошибка входа");
        }
      } else {
        setError("Ошибка регистрации");
      }
    } catch (err: any) {
      setError(err.message || "Неизвестная ошибка. Попробуйте снова");
    }
  };

  return (
    <div className="h-screen flex items-center justify-center bg-[#072B31] px-4">
      <div className="bg-white/5 backdrop-blur-sm border border-white/10 shadow-2xl rounded-2xl max-w-md w-full p-8 animate-fade-in text-white">
        <h2 className="text-2xl font-bold text-center text-[#16C9E2] mb-6">
          Регистрация
        </h2>
        <form action={onRegistrationFormHandler} className="space-y-5">
          <div>
            <label className="block text-sm font-medium mb-1 text-white/80">
              Имя
            </label>
            <input
              name="name"
              type="text"
              placeholder="Иван"
              required
              className="w-full px-4 py-3 rounded-lg border border-white/20 bg-transparent text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[#16C9E2]"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1 text-white/80">
              Email
            </label>
            <input
              name="email"
              type="email"
              placeholder="example@mail.com"
              required
              className="w-full px-4 py-3 rounded-lg border border-white/20 bg-transparent text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[#16C9E2]"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1 text-white/80">
              Телефон
            </label>
            <input
              name="phone"
              type="tel"
              placeholder="+7 (000) 000-00-00"
              required
              className="w-full px-4 py-3 rounded-lg border border-white/20 bg-transparent text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[#16C9E2]"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1 text-white/80">
              Пароль
            </label>
            <input
              name="password"
              type="password"
              placeholder="Не менее 8 символов"
              required
              className="w-full px-4 py-3 rounded-lg border border-white/20 bg-transparent text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[#16C9E2]"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1 text-white/80">
              Повторите пароль
            </label>
            <input
              name="confirmPassword"
              type="password"
              placeholder="Повторите ваш пароль"
              required
              className="w-full px-4 py-3 rounded-lg border border-white/20 bg-transparent text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[#16C9E2]"
            />
          </div>
          {error && <p className="text-red-400 text-sm text-center">{error}</p>}
          <button
            type="submit"
            className="w-full bg-[#16C9E2] hover:bg-[#10a7bb] text-[#072B31] font-semibold py-3 px-6 rounded-lg transition"
          >
            Зарегистрироваться
          </button>
        </form>
        <p className="mt-6 text-sm text-center text-white/60">
          Уже есть аккаунт?{" "}
          <Link
            href="/login"
            className="text-[#16C9E2] hover:underline font-medium"
          >
            Войти
          </Link>
        </p>
      </div>
    </div>
  );
}
