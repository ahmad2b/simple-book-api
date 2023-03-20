import React from "react";
import { allOrders } from "../../BookAPI";
import Link from "next/link";

const page = async () => {
  const orders = await allOrders();

  const allMyOrders = [...orders];

  console.log(orders);

  return (
    <div>
      <div>Total Orders= {allMyOrders.length}</div>
      <div>
        {allMyOrders.map((item, index) => {
          return (
            <div key={index}>
              <>
                <h2>Order ID: {item.id}</h2>
                <h2>Book ID: {item.bookId}</h2>
                <h2>Customer Name: {item.customerName}</h2>
                <h2>Created By: {item.createdBy}</h2>
                <h2>Quantity: {item.quantity}</h2>
                <h2>Timestamp: {item.timestamp}</h2>
              </>
              <div>
                <Link href={`/orders/singleorder/${item.id}`}>
                  <button>Order Details</button>
                </Link>
              </div>
            </div>
          );
        }, [])}
      </div>
    </div>
  );
};

export default page;
