export const createOrder = async ({ name, phone, address, notes, total }) => {
  const res = await fetch("/api/order", {
    method: "POST",
    body: JSON.stringify({
      name: name,
      phone: phone,
      address: address,
      notes: notes,
      total: parseFloat(total),
      status: 1,
    }),
  });
  const id = await res.json();
  return id;
};
