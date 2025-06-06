import { prisma } from "@/lib/db";
import { createClient } from "@supabase/supabase-js";
import bcrypt from "bcrypt";

// Инициализируем Supabase client на сервере
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export async function POST(request: Request) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData.entries());

  const email = data.email?.toString();
  const password = data.password?.toString();
  const name = data.name?.toString();

  if (!email || !password || !name) {
    return new Response(JSON.stringify({ message: "Не хватает данных" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  // Проверяем, нет ли такого пользователя в Prisma
  const oldUser = await prisma.user.findUnique({
    where: { email },
  });

  if (oldUser) {
    return new Response(JSON.stringify({ message: "Пользователь уже существует" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  // Регистрируем в Supabase
  const { data: supaData, error: supaError } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        role: "user", // добавляется в metadata
        name,
      },
    },
  });

  if (supaError) {
    console.error("Ошибка Supabase:", supaError);
    return new Response(JSON.stringify({ message: supaError.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }

  // Если всё норм — создаём в Prisma
  const result = await prisma.user.create({
    data: {
      name,
      email,
      role: "user",
      password: await bcrypt.hash(password, 8),
    },
  });

  return new Response(JSON.stringify({ email: result.email }), {
    status: 201,
    headers: { "Content-Type": "application/json" },
  });
}