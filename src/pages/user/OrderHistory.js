import { useContext } from "react";
import { BooksContext } from "./../../contexts/BooksProvider";
import OrderCard from "../../components/OrderCard";

const OrderHistory = () => {
  const {
    booksState: { orders },
  } = useContext(BooksContext);
  return (
    <>
      {orders &&
        orders.length > 0 &&
        orders.map(({ date, orderId, products, totalBill }) => (
          <div key={orderId} className="pt-2 m-4 border border-gray-700 ">
            <div className="grid grid-cols-1 grid-rows-1 gap-4 px-6 pb-2 border-b border-gray-700 sm:grid-cols-4">
              <div className="col-span-2">
                <dt className="text-gray-400">Order number</dt>
                <dd className="font-semibold">{orderId}</dd>
              </div>
              <div>
                <dt className="text-gray-400">Date placed</dt>
                <dd className="font-semibold">
                  <time dateTime={date}>{date}</time>
                </dd>
              </div>
              <div>
                <dt className="text-gray-400">Total amount</dt>
                <dd className="font-semibold before:mr-1 before:content-['₹']">
                  {totalBill}
                </dd>
              </div>
            </div>
            {products.map((order) => (
              <OrderCard key={order._id} order={order} />
            ))}
          </div>
        ))}
      {orders && orders.length === 0 && <p>No order history.</p>}
    </>
  );
};

export default OrderHistory;
