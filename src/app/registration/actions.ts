export async function createUser(formData: FormData) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/registration`, {
    method: "POST",
    body: formData,
  });

  if (!res.ok) {
    const error = await res.json().catch(() => ({ message: "Неизвестная ошибка" }));
    throw new Error(error.message || "Ошибка регистрации");
  }

  return res.json(); // Вернёт { email }
}