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
    <div>
      <div>{order && <h2>Order Created Successfull</h2>}</div>
      <div>
        <h2>
          <strong>Order ID: </strong>
          {order.orderId}
        </h2>
      </div>
      <div>
        <div>
          <Link href={`/orders/singleorder/${order.orderId}`}>
            <button>Check Order Details</button>
          </Link>
        </div>
        <div>
          <Link href={"/allorders"}>
            <button>Check All Orders</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default page;
