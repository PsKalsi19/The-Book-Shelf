import { useContext, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { BooksContext } from "../../contexts/BooksProvider";

const ThankYou = () => {
  const location = useLocation();
  const finalAmount = location?.state?.finalAmount;
  const {booksState:{orders}}=useContext(BooksContext)
  const navigate = useNavigate();
  useEffect(() => {
  document.title="Thank You | The Book Shelf"
    if (orders.length===0) {
      navigate("/products");
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [orders]);
  return (
    <div className="relative px-6 isolate pt-14 lg:px-8">
      <div
        className="absolute inset-x-0 overflow-hidden -top-40 -z-10 transform-gpu blur-3xl sm:-top-80"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
      <div className="max-w-2xl py-32 mx-auto sm:py-32 lg:py-32">
        <div className="text-center">
          <h1 className="text-4xl text-gradient-to-tr opacity-80 font-bold tracking-tight  text-transparent bg-clip-text bg-gradient-to-tr from-[#ff4694] to-[#776fff]  sm:text-5xl">
            <p className="text-gray-100">Dear</p>
            Bookworm Extraordinaire,
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-100">
            Your order of amount{" "}
            <span className="before:mr-1 text-xl before:content-['₹']">
              {finalAmount}
            </span>{" "}
            has been received, and we're eagerly dancing with joy to bring you
            words that will ignite your imagination and leave you spellbound.
            You can check the order history by clicking the button below. Happy
            reading!
          </p>
          <div className="flex items-center justify-center mt-10 gap-x-6">
            <Link
              to="/products"
              className=" px-5 py-2.5 text-xs lg:text-sm font-medium text-center text-gray-100 rounded-lg bg-cyan-900 focus:ring-4 focus:outline-none hover:bg-cyan-950 focus:ring-cyan-950"
            >
              Shop More
            </Link>
            <Link
              to={`/user/orders`}
              className="text-sm font-semibold leading-6 text-gray-100 hover:underline"
            >
              Order History <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>
      <div
        className="absolute inset-x-0 top-[calc(100%-40rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-40rem)]"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
    </div>
  );
};

export default ThankYou;
