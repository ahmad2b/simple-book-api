import React from "react";
import { getOrder } from "@/app/BookAPI";
import Link from "next/link";

const page = async ({ params }: { params: { id: string } }) => {
  const { id } = params;

  const order = await getOrder(id);

  const orderDate = new Date(order.timestamp).toLocaleDateString();
  const timeDate = new Date(order.timestamp).toLocaleTimeString();

  return (
    <div className=" w-8/12 mx-auto flex flex-col items-center justify-center align-middle min-h-screen ">
      <div className="bg-white w-full -mt-10  p-8 border-2 rounded-md space-y-2 py-8 shadow-lg border-gray-500 hover:scale-105 duration-200">
        <h2 className="text-4xl font-bold text-gray-800 text-center mb-6 ">
          Order Details
        </h2>
        <h2>
          <strong>Order ID: </strong>
          {order.id}
        </h2>
        <h2>
          <strong>Book ID: </strong>
          {order.bookId}
        </h2>
        <h2>
          <strong>Customer Name: </strong>
          {order.customerName}
        </h2>
        <h2>
          <strong>Order Date: </strong>
          {orderDate + " " + timeDate}
        </h2>
        <div className="">
          <div className="flex justify-around mt-8 text-center">
            <div className="border px-6 py-2 rounded-md border-gray-800 hover:scale-105 w-2/5">
              <Link href={`/books`}>
                <button>Check New Books!</button>
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
    </div>
  );
};

export default page;
