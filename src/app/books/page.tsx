import React from "react";
import { getBooksList } from "@/app/BookAPI";
import Link from "next/link";
import { BiLinkExternal } from "react-icons/bi";

const page = async () => {
  const booksList = await getBooksList();

  const allBooks = [...booksList];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen my-8 md:my-0 ">
      <h1 className="text-6xl font-bold mb-16 underline text-gray-800 ">
        Books
      </h1>
      <div className="flex flex-wrap justify-center ">
        {allBooks.map((item, index) => {
          return (
            <div
              key={index}
              className="shadow-sm rounded-md hover:scale-105 duration-200 bg-gray-100 p-4 m-2 w-56 border-2 border-gray-500 flex flex-col justify-between "
            >
              <h2 className="text-2xl font-semibold text-gray-800 pb-4 ">
                {item.name}
              </h2>
              <div>
                <p className=" "> {item.type}</p>
                <div className="mb-2">
                  {item.available ? (
                    <p className="text-xs text-green-800 "> Available </p>
                  ) : (
                    <p className="text-xs text-red-800 ">Not Available</p>
                  )}
                </div>
                <Link
                  className=" items-center hover:text-gray-700 underline-offset-1 underline "
                  href={`/books/${item.id}`}
                  target="_blank"
                >
                  Book Details
                  <BiLinkExternal className="inline-block ml-2 " />
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default page;
