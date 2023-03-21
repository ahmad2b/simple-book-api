import React from "react";
import { deleteOrder } from "@/app/BookAPI";
import Link from "next/link";

const page = async ({ params }: { params: { slug: string } }) => {
  const { slug } = params;

  console.log(slug);

  const orderStatus = await deleteOrder(slug);

  console.log(orderStatus);

  return (
    <div className="max-w-2xl w-full mx-auto my-52 border p-4 py-8 shadow-xl rounded-md bg-gray-100">
      <h2 className="text-lg text-gray-800  flex flex-col items-center">
        <span>
          <strong>Order ID:</strong> <>{slug}</>
        </span>
        <span className="text-3xl font-semibold mt-4">
          {orderStatus ? "Successfuly Deleted" : "Failed to Delete"}
        </span>
      </h2>
      <div className="border px-6 py-2 mt-8 text-center rounded-md border-gray-800 hover:scale-105 mx-auto w-3/5">
        <Link href={`/allorders`} prefetch={false}>
          <button>Go Back to All Orders</button>
        </Link>
      </div>
    </div>
  );
};

export default page;
