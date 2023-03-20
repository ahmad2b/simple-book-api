const baseUrl = "https://simple-books-api.glitch.me";

export const getStatus = async () => {
  const res = await fetch(`${baseUrl}/status`);

  if (!res.ok) {
    throw new Error(`Failed to fetch data! status: ${res.status}`);
  }

  const data = await res.json();

  return data;
};

export const getBooksList = async () => {
  const res = await fetch(`${baseUrl}/books`);

  if (!res.ok) {
    throw new Error(`Failed to fetch data! status: ${res.status}`);
  }

  const data = await res.json();

  return data;
};

export const getBook = async (id: string) => {
  const res = await fetch(`${baseUrl}/books/${id}`);

  if (!res.ok) {
    throw new Error(`Failed to fetch data! status: ${res.status}`);
  }

  const data = await res.json();

  return data;
};

export const orderBook = async (bookId: number, customerName: string) => {
  console.log("orderBook", bookId, customerName);

  const res = await fetch(`${baseUrl}/orders`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.BOOK_TOKEN}`,
    },
    body: JSON.stringify({
      bookId,
      customerName,
    }),
    cache: "no-cache",
  });

  if (!res.ok) {
    throw new Error(`Failed to fetch data! status: ${res.status}`);
  }

  const data = await res.json();

  return data;
};

export const allOrders = async () => {
  const res = await fetch(`${baseUrl}/orders`, {
    headers: {
      Authorization: `Bearer ${process.env.BOOK_TOKEN}`,
    },
    cache: "no-cache",
  });

  if (!res.ok) {
    throw new Error(`Failed to fetch data! status: ${res.status}`);
  }

  const data = await res.json();

  return data;
};

export const getOrder = async (id: string) => {
  const res = await fetch(`${baseUrl}/orders/${id}`, {
    headers: {
      Authorization: `Bearer ${process.env.BOOK_TOKEN}`,
    },
    cache: "no-cache",
  });

  if (!res.ok) {
    throw new Error(`Failed to fetch data! status: ${res.status}`);
  }

  const data = await res.json();

  return data;
};

export const deleteOrder = async (id: string) => {
  const res = await fetch(`${baseUrl}/orders/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${process.env.BOOK_TOKEN}`,
    },
    cache: "no-cache",
  });

  if (!res.ok) {
    throw new Error(`Failed to fetch data! status: ${res.status}`);
  }

  const data = await res.json();

  return data;
};
