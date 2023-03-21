// "use client";

import React, { useState } from "react";
import { updateOrder } from "@/app/BookAPI";
import Link from "next/link";

const Page = async ({ params }: { params: { id: string } }) => {
  const { id } = params;

  //   const [customerName, setCustomerName] = useState("");
  //   const [orderStatus, setOrderStatus] = useState("");

  //   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  //     e.preventDefault();

  //     setOrderStatus(status);
  //   };

  const status = await updateOrder(id, "New Customer Name");

  console.log(status);

  return (
    <div>
      <div>
        <h1>Update Order</h1>
      </div>
      <div>
        {/* <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="customerName">Customer Name</label>
            <input
              type="text"
              name="customerName"
              id="customerName"
              value={customerName}
              onChange={(e) => setCustomerName(e.target.value)}
            />

            <button type="submit">Update Order</button>
          </div>
        </form> */}
        {
          <div>
            {/* <p>Order status: {orderStatus}</p> */}
            <Link href={`/allorders`} prefetch={false}>
              Back to Order Details
            </Link>
          </div>
        }
      </div>
    </div>
  );
};

export default Page;
