import React from "react";
import { orderBook } from "@/app/BookAPI";
import Link from "next/link";

const page = async ({ params }: { params: { slug: string } }) => {
  const { slug } = params;
  const bookId = parseInt(slug);

  if (bookId === 2) {
    return (
      <div>
        <div className="max-w-lg mx-auto my-52 border p-4 py-8 shadow-xl rounded-md bg-gray-100">
          <div className="flex flex-col space-y-2 ">
            <h2 className="text-3xl font-semibold text-gray-800 pb-4  flex items-center">
              Stock not Available
            </h2>
          </div>

          <div className="flex">
            <Link href={"/books"}>
              <button className="mx-auto border-2 border-gray-600 px-6 py-2 rounded-md hover:scale-105">
                Go Back
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const order = await orderBook(bookId, "John Doe");

  return (
    <div className=" w-8/12 mx-auto flex flex-col items-center justify-center align-middle min-h-screen ">
      <div className="bg-white w-full -mt-10  p-8 border-2 rounded-md text-center space-y-6 py-8 shadow-lg border-gray-500 hover:scale-105 duration-200">
        <div>
          {order && (
            <h2 className="text-4xl font-bold text-green-900 ">
              Order Created Successfull
            </h2>
          )}
        </div>
        <div>
          <h2>
            <strong>Order ID: </strong>
            {order.orderId}
          </h2>
        </div>
        <div className="flex justify-around">
          <div className="border px-6 py-2 rounded-md border-gray-800 hover:scale-105 w-2/5">
            <Link href={`/orders/singleorder/${order.orderId}`}>
              <button>Check Order Details</button>
            </Link>
          </div>
          <div className="border px-6 py-2 rounded-md border-gray-800 hover:scale-105 w-2/5">
            <Link href={"/allorders"}>
              <button>Check All Orders</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
