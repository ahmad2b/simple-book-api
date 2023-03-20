// "use client";
import React from "react";
import { getBook } from "@/app/BookAPI";
import Link from "next/link";

const page = async ({ params }: { params: { id: string } }) => {
  const { id } = params;

  const book = await getBook(id);

  return (
    <div>
      <div className="max-w-lg mx-auto my-52 border p-4 py-8 shadow-xl rounded-md bg-gray-100">
        <div className="flex flex-col space-y-2 ">
          <h2 className="text-3xl font-semibold text-gray-800 pb-4  flex items-center">
            {book.name}
            <span className="ml-auto bg-black rounded-full w-8 h-8 text-white  flex  justify-center items-center align-middle ">
              <p className="text-base">{book.id}</p>
            </span>
          </h2>
          <h3>
            <strong>Author:</strong>
            {book.author}
          </h3>
          <p>
            <strong>Book Type:</strong> {book.type}
          </p>
          <p>
            <strong>Available:</strong> {book.available ? "Yes" : "No"}
          </p>
          <p>
            <strong>Price:</strong> {book.price}
          </p>
        </div>
        <div className="flex">
          <Link href={`/orders/${book.id}`}>
            <button className="mx-auto border-2 border-gray-600 px-6 py-2 rounded-md hover:scale-105">
              Order Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default page;
