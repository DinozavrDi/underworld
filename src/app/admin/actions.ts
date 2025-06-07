export async function getAdminOrders() {
  try {
    const result = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/order`, {
      method: "GET",
    });

    if (result.status !== 200) return [];

    return result.json();
  } catch (error) {
    console.log(error);
    return null;
  }
}

export async function changeOrderStatus(formData: FormData, id: string) {
  const result = await fetch(`/api/order/${id}`, {
    method: "PATCH",
    body: formData,
  });

  if (result.status !== 200) return [];

  return result.json();
}
