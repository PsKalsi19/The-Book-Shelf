import { useContext, useEffect, useState } from "react";
import { createCouponData, getTotalAmount } from "../../services/cart-service";
import Dropdown from "./Dropdown";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { useLocation, useNavigate } from "react-router-dom";
import { BooksContext } from "../../contexts/BooksProvider";

const CartCheckoutDetails = ({ cart }) => {
  const [amounts, setAmounts] = useState({
    totalAmount: 0,
    discountedAmount: 0,
  });
  const [coupon, setCoupon] = useState({ name: "", value: 0 });
  const allCoupons = createCouponData(cart);
  const location = useLocation();
  const navigate = useNavigate();
  const {
    removeFromCartHandler,
    saveOrderHistory
  } = useContext(BooksContext);

  const removeAllCartItems = () => {
    cart.map((item) => removeFromCartHandler(item, "", false));
  };

  

  useEffect(() => {
    setAmounts(getTotalAmount(cart));
  }, [cart]);

  const checkoutHandler = () => {
    if (location.pathname === "/cart") {
      navigate("/checkout");
    } else {
      
      saveOrderHistory(cart,amounts.discountedAmount-coupon.value,)
      removeAllCartItems(cart);
      navigate("/thank-you", {
        state: { finalAmount: amounts.discountedAmount - coupon.value },
      });
      // navigate("/checkout")
    }
  };
  return (
    <div className="relative mb-20 sm:w-1/3">
      <div className="sticky left-0 right-0 w-full p-6 mt-6 border rounded-lg shadow-md top-40 md:mt-0">
        { location.pathname==='/checkout' && allCoupons && allCoupons.length > 0 && (
          <div className="pb-4 mb-4 border-b border-gray-700">
            <Dropdown
              dropdownData={allCoupons}
              setCouponHandler={setCoupon}
              heading={"Apply Coupons"}
            />
          </div>
        )}

        {cart &&
          cart.length > 0 &&
          cart.map(({ title, price, qty, _id }) => (
            <div key={_id} title={title} className="flex justify-between mb-2">
              <p className="w-40 text-gray-100 truncate">{title}</p>{" "}
              <span className="text-gray-700">X {qty} </span>
              <p className="text-gray-100 before:mr-1 before:content-['₹']">
                {price}
              </p>
            </div>
          ))}

        <div className="flex justify-between mb-2">
          <p className="text-gray-100">Subtotal</p>
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
          onClick={checkoutHandler}
          className="mt-6 
                w-full px-5 py-2.5 text-xs lg:text-sm font-medium text-center 
                text-gray-100 rounded-lg 
                bg-cyan-900 focus:ring-4 
                focus:outline-none 
                hover:bg-cyan-950 
                focus:ring-cyan-950"
        >
          {location.pathname === "/cart" ? "Check Out" : "Place Order"}
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