import React from "react";
import { orderBook } from "@/app/BookAPI";
import Link from "next/link";
// import { useRouter } from "next/navigation";

const page = async () => {
  // const order = await orderBook(1, "John Doe");

  return (
    <div>
      {/* <div>
        {order && <h2>Order Created Successfull</h2>}
        <h2>
          <strong>Order ID: </strong>
          {order.orderId}
        </h2>
      </div>
      <div>
        <Link href={"/allorders"}>
          <button>Go Back</button>
        </Link>
      </div> */}
    </div>
  );
};

export default page;
