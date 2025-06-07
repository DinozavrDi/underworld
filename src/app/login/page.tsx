"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { signIn } from "next-auth/react";
import { useState } from "react";
import Link from "next/link";

export default function LoginForm() {
  const router = useRouter();
  const [error, setError] = useState("");

  const onSignInHandler = async (formData: FormData) => {
    setError("");
    const result = await signIn("credentials", {
      email: formData.get("email"),
      password: formData.get("password"),
      redirect: false,
    });

    if (result?.error) {
      setError("Неверный email или пароль");
    } else if (result?.ok) {
      router.push("/profile");
      router.refresh();
    }
  };

  return (
    <div className="h-screen flex items-center justify-center bg-[#072B31] px-4">
      <div className="bg-white/5 backdrop-blur-sm border border-white/10 shadow-2xl rounded-2xl max-w-md w-full p-8 animate-fade-in text-white">
        <h2 className="text-2xl font-bold text-center text-[#16C9E2] mb-6">
          Вход в аккаунт
        </h2>
        <form action={onSignInHandler} className="space-y-5">
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
              Пароль
            </label>
            <input
              name="password"
              type="password"
              placeholder="Ваш пароль"
              required
              className="w-full px-4 py-3 rounded-lg border border-white/20 bg-transparent text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[#16C9E2]"
            />
          </div>
          {error && <p className="text-red-400 text-sm text-center">{error}</p>}
          <button
            type="submit"
            className="w-full bg-[#16C9E2] hover:bg-[#10a7bb] text-[#072B31] font-semibold py-3 px-6 rounded-lg transition"
          >
            Войти
          </button>
        </form>
        <p className="mt-6 text-sm text-center text-white/60">
          Нет аккаунта?{" "}
          <Link
            href="/registration"
            className="text-[#16C9E2] hover:underline font-medium"
          >
            Зарегистрироваться
          </Link>
        </p>
      </div>
    </div>
  );
}
