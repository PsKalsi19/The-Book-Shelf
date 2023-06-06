import { useContext, useEffect, useState } from "react";
import { createCouponData, getTotalAmount } from "../../services/cart-service";
import Dropdown from "./Dropdown";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { useLocation, useNavigate } from "react-router-dom";
import { BooksContext } from "../../contexts/BooksProvider";
import {
  getAddress,
  getPrimaryAddress,
  getUserEmail,
  getUserName,
} from "../../services/localstorage-service";
import { toast } from "react-hot-toast";

const CartCheckoutDetails = ({ cart }) => {
  const [amounts, setAmounts] = useState({
    totalAmount: 0,
    discountedAmount: 0,
  });
  const [coupon, setCoupon] = useState({ name: "", value: 0 });
  const allCoupons = createCouponData(cart);
  const location = useLocation();
  const navigate = useNavigate();
  const { removeFromCartHandler, saveOrderHistory } = useContext(BooksContext);

  const removeAllCartItems = () => {
    cart.map((item) => removeFromCartHandler(item, "", false));
  };

  const loadScript = async (url) => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = url;

      script.onload = () => {
        resolve(true);
      };

      script.onerror = () => {
        resolve(false);
      };

      document.body.appendChild(script);
    });
  };

  const displayRazorpay = async () => {
    const address = getPrimaryAddress();
    const { name, line1, line2, city, number } = address;
    try {
      const res = await loadScript(
        "https://checkout.razorpay.com/v1/checkout.js"
      );

      if (!res) {
        toast.error("Razorpay failed, Check your Connection.");
        return;
      }
      const options = {
        key: process.env.REACT_APP_MY_RZP_KEY,
        amount: (amounts.discountedAmount- coupon.value) * 100,
        currency: "INR",
        name: "The Book Shelf",
        description:
          "Your literary cravings have been duly noted and satisfied. Happy reading!",
        image:
          "https://ik.imagekit.io/pb97gg2as/E-Commerce-Assets/logo-color.png?updatedAt=1684597529138",

        handler: (response) => {
          saveOrderHistory(
            cart,
            amounts.discountedAmount - coupon.value,
            response.razorpay_payment_id
          );
          removeAllCartItems(cart);
          toast.success("Order Placed Successfully.")
          navigate("/thank-you", {
            state: { finalAmount: amounts.discountedAmount - coupon.value },
          });
        },
        prefill: {
          name: getUserName(),
          email: getUserEmail(),
          contact: number,
        },
        notes: {
          address: `${name}, ${line1}, ${line2}, ${city}`,
        },
        theme: {
          color: "#111827",
        },
      };
      const paymentObject = new window.Razorpay(options);
      paymentObject.open();
    } catch (error) {
      console.error(error);
      toast.error("Something Went Wrong, Try Later.");
    }
  };

  useEffect(() => {
    setAmounts(getTotalAmount(cart));
  }, [cart]);

  const checkoutHandler = () => {
    if (location.pathname === "/cart") {
      navigate("/checkout");
    } else {
      if (getAddress().length === 0) {
        toast.error("Please add a Primary Address to Proceed.");
        return;
      }
      displayRazorpay();
    }
  };
  return (
    <div className="relative mb-20 sm:w-1/3">
      <div className="sticky left-0 right-0 w-full p-6 mt-6 border rounded-lg shadow-md top-40 md:mt-0">
        {location.pathname === "/checkout" &&
          allCoupons &&
          allCoupons.length > 0 && (
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
              <span className="text-gray-600">X {qty} </span>
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
