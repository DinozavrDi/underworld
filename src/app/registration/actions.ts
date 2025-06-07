export async function createUser(formData: FormData) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/auth/registration`,
    {
      method: "POST",
      body: formData,
    }
  );

  console.log(res);

  if (!res.ok) return null;

  return res.json(); // Вернёт { email }
}
