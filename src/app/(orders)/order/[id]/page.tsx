"use client";
import React from "react";
import { deleteOrder, getOrder } from "@/app/BookAPI";
import Link from "next/link";

const page = async ({ params }: { params: { id: string } }) => {
  // const { id } = params;

  // const order = await getOrder(id);

  // const orderDate = new Date(order.timestamp).toLocaleDateString();
  // const timeDate = new Date(order.timestamp).toLocaleTimeString();

  return (
    <div>
      <div>
        <h2>Order Details</h2>
        {/* <h2>
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
        </h2> */}
      </div>
      <div>
        <div>{/* <Link>Update Order</Link> */}</div>
        <div>
          {/* <button onClick={(e) => deleteOrder(order.id)}>Delete Order</button> */}
        </div>
      </div>
      <div>
        {/* <Link href={"/allorders"}>
          <button>Go to All orders</button>
        </Link> */}
      </div>
    </div>
  );
};

export default page;
