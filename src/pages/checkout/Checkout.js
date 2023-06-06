import { useContext, useEffect } from "react";
import CartCheckoutDetails from "../../components/cart/CartCheckoutDetails";
import { BooksContext } from "../../contexts/BooksProvider";
import Address from "../user/Address";

const Checkout = () => {
  const {
    booksState: { cart },
  } = useContext(BooksContext);

  useEffect(()=>{
    document.title="Checkout | The Book Shelf"
  },[])
  return (
    <div className="py-32">
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
