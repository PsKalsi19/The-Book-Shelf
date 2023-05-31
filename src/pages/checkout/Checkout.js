import { useContext } from "react";
import { AddressContext } from "../../contexts/AddressProvider";
import CartCheckoutDetails from "../../components/cart/CartCheckoutDetails";
import AddressCard from "../../components/AddressCard";
import { BooksContext } from "../../contexts/BooksProvider";
import Address from "../user/Address";

const Checkout = () => {
  const { addresses,setAddress } = useContext(AddressContext);
  const {
    booksState: { cart },
  } = useContext(BooksContext);
  return (
    <div className="mt-20">
      <h1 className="my-4 font-bold tracking-tight text-center text-gray-100 md:text-xl lg:text-4xl">
        Checkout
      </h1>
      {cart && cart.length > 0 && (
        <div className="justify-center max-w-5xl px-6 mx-auto md:flex md:space-x-6 xl:px-0">
          <div className="rounded-lg md:w-2/3">
            <Address/>
          </div>
          <CartCheckoutDetails cart={cart} />
        </div>
      )}
    </div>
  );
};

export default Checkout;
