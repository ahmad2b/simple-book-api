import React from "react";
import { allOrders } from "../../BookAPI";
import Link from "next/link";

const page = async () => {
  const orders = await allOrders();
  const allMyOrders = [...orders];

  let orderDate: string;
  let timeDate: string;

  return (
    <div>
      <div className="text-4xl font-bold text-gray-800 text-center my-8 ">
        Total Orders= {allMyOrders.length}
      </div>

      <div>
        {allMyOrders.length === 0 ? (
          <div className=" border mx-auto text-center text-xl font-medium shadow-md duration-300 px-6 py-2 rounded-md bg-white border-gray-800 hover:scale-105 w-1/5">
            <Link href={"/books"}>
              <button>Find new Books to order</button>
            </Link>
          </div>
        ) : (
          <div>
            {allMyOrders.map((item, index) => {
              {
                orderDate = new Date(item.timestamp).toLocaleDateString();
                timeDate = new Date(item.timestamp).toLocaleTimeString();
              }
              return (
                <div
                  key={index}
                  className="border-2 rounded-md bg-white border-gray-500 my-4 p-4 w-full"
                >
                  <div className=" ">
                    <h2>
                      {" "}
                      <strong>Order ID:</strong> {item.id}
                    </h2>
                    <h2>
                      <strong>Book ID:</strong> {item.bookId}
                    </h2>
                    <h2>
                      <strong>Customer Name:</strong> {item.customerName}
                    </h2>
                    <h2>
                      <strong>Created By:</strong> {item.createdBy}
                    </h2>
                    <h2>
                      <strong>Quantity:</strong> {item.quantity}
                    </h2>
                    <h2>
                      <strong>Timestamp:</strong> {orderDate + " " + timeDate}
                    </h2>
                  </div>
                  <div className="flex justify-between text-center mt-2">
                    <div className="border px-6 py-2 rounded-md border-gray-800 hover:scale-105 w-1/5">
                      <Link href={`/orders/singleorder/${item.id}`}>
                        <button>Check Order Details</button>
                      </Link>
                    </div>

                    <div className="border px-6 py-2 rounded-md border-gray-800 hover:scale-105 w-1/5">
                      <Link href={`/orders/delete/${item.id}`}>
                        <button>Delete Order</button>
                      </Link>
                    </div>
                    <div className="border px-6 py-2 rounded-md border-gray-800 hover:scale-105 w-1/5">
                      <Link href={`/update/${item.id}`}>
                        <button>Update Order</button>
                      </Link>
                    </div>
                    <div className="border px-6 py-2 rounded-md border-gray-800 hover:scale-105 w-1/5">
                      <Link href={"/books"}>
                        <button>Check New Books</button>
                      </Link>
                    </div>
                  </div>
                </div>
              );
            }, [])}
          </div>
        )}
      </div>
    </div>
  );
};

export default page;
