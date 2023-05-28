import { useEffect, useState } from "react";
import { createCouponData, getTotalAmount } from "../../services/cart-service";
import Dropdown from "./Dropdown";
import { XMarkIcon } from "@heroicons/react/24/outline";

const CartCheckoutDetails = ({ cart }) => {
  const [amounts, setAmounts] = useState({
    totalAmount: 0,
    discountedAmount: 0,
  });
  const [coupon, setCoupon] = useState({ name: "", value: 0 });
  const allCoupons = createCouponData(cart);
  useEffect(() => {
    setAmounts(getTotalAmount(cart));
  }, [cart]);
  return (
    <div className="relative mb-20 sm:w-1/3">
      <div className="sticky left-0 right-0 w-full p-6 mt-6 border rounded-lg shadow-md top-40 md:mt-0">
       { allCoupons && allCoupons.length>0 && 
       <div className="pb-4 mb-4 border-b border-gray-700">
          <Dropdown
            dropdownData={allCoupons}
            setCouponHandler={setCoupon}
            heading={"Apply Coupons"}
          />
        </div>}
        <div className="flex justify-between mb-2">
          <p className="text-gray-100">Bill</p>
          <p className="text-gray-100 before:mr-1 before:content-['₹']">
            {amounts.totalAmount}
          </p>
        </div>
        <div className="flex justify-between mb-2">
          <p className="text-gray-100">Discount</p>
          <p className="text-gray-100 before:mr-1 before:content-['-₹']">
            {amounts.totalAmount - amounts.discountedAmount}
          </p>
        </div>

        {coupon.name !== "" && (
          <div className="flex justify-between">
            <p className="text-gray-100">Coupon Applied</p>
            <p className="text-gray-100 before:mr-1 before:content-['-₹']">
              {" "}
              {coupon.value}
            </p>
          </div>
        )}
        <hr className="my-4" />
        <div className="flex justify-between text-gray-100">
          <p className="text-lg font-bold">Total</p>
            <div>
              <p className="mb-1 text-lg before:mr-1 before:content-['₹'] font-bold">
                {amounts.discountedAmount - coupon.value}
              </p>
            </div>
        </div>
        <button
          className="mt-6 
                w-full px-5 py-2.5 text-xs lg:text-sm font-medium text-center 
                text-gray-100 rounded-lg 
                bg-cyan-900 focus:ring-4 
                focus:outline-none 
                hover:bg-cyan-950 
                focus:ring-cyan-950"
        >
          Check out
        </button>

        {coupon.name !== "" && (
          <div className="flex justify-end ">
            <div className="px-2 py-1 my-2 hover:bg-gray-800 hover:rounded">
              <button
                type="button"
                onClick={() => setCoupon({ name: "", value: 0 })}
                className="text-xs text-gray-100"
              >
                {coupon.name} <XMarkIcon className="inline-block w-4 h-4 " />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartCheckoutDetails;
