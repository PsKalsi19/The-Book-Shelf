import { TrashIcon } from "@heroicons/react/24/outline";
import { useContext } from "react";
import { BooksContext } from "../../contexts/BooksProvider";
const CartCard = ({ product }) => {
  const {
    moveToWishlistHandler,
    removeFromCartHandler,
    cartItemQuantityHandler,
    disableQuantityButton,
    setDisableQuantityButtons,
    booksState:{booksData}
  } = useContext(BooksContext);

  const changeQuantity = ( product, action) => {
    setDisableQuantityButtons(true)
    cartItemQuantityHandler(product, action);
  };


  const { _id, imgUrl, author, price, qty, title, discount } = product;
  const wishlisted=booksData.find(books=>books._id===_id).wishlisted

  return (
    <div
      id={_id}
      className="flex flex-col justify-between p-6 mb-6 border-b border-gray-700 sm:flex-row hover:rounded-lg hover:bg-gray-800 sm:justify-start"
    >
      <img
        className="self-center w-32 h-48 sm:h-40 sm:w-18"
        src={imgUrl}
        alt={title}
      />
      {/* Actions for mobile */}
      <div className="relative">
        <div className="absolute bottom-0 items-center space-y-2 text-gray-100 right-16 sm:hidden">
          <TrashIcon
            onClick={(e) => removeFromCartHandler(product)}
            title="Remove From Cart"
            className="w-8 h-8 p-2 text-red-400 duration-150 bg-red-100 rounded-full cursor-pointer opacity-80 hover:text-red-500"
          />
          <button
            type="button"
                          title={wishlisted?'Already Wishlisted':'Move to Wishlist'}

            disabled={wishlisted}
            onClick={(e) => moveToWishlistHandler(product)}
            className="text-pink-500"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className={`w-8 p-2 m-auto ${wishlisted?'fill-pink-500':'hover:fill-current'} bg-pink-100 opacity-80 rounded-full h-8`}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className="flex flex-col items-center sm:items-start sm:flex-row sm:ml-4 sm:w-full sm:justify-between">
        <div className="flex flex-col justify-between mt-5 align-center sm:mt-0">
          <div className="flex flex-col items-center sm:items-start">
            <h2 className="text-lg font-bold text-gray-100 lg:text-xl">
              {title}
            </h2>
            <p className="mt-1 text-xs text-gray-200 sm:text-sm">{author}</p>
          </div>
          <div className="flex flex-col items-center mt-4 space-x-4 text-gray-100 sm:flex-row">
            <p className="text-xs before:mr-1 before:content-['₹'] line-through text-gray-200">
              {price}
            </p>
            <p className="text-xl before:mr-1 before:content-['₹'] font-bold sm:text-2xl">
              {price - discount}
            </p>
          </div>
        </div>

        <div className="flex flex-col justify-between mt-4 sm:space-y-6 sm:mt-0 sm:block">
          <div className="flex items-center justify-center text-gray-100 bg-gray-800 border border-gray-700 rounded w-min">
            <button
              onClick={(e) => changeQuantity( product, "decrement")}
              type="button"
              disabled={qty === 1 || disableQuantityButton}
              className={`
               rounded-l
                py-1
                 px-3.5 
                 duration-100
                  hover:bg-gray-900
                   hover:text-white
                   ${
                     qty === 1 || disableQuantityButton
                       ? "cursor-not-allowed"
                       : "cursor-pointer"
                   }
                   ${qty===1?'bg-gray-700':''}
                   `}
            >
              -
            </button>
            <span className="w-8 text-xs text-center text-gray-100 outline-none cursor-default">
              {qty}
            </span>
            <button
            disabled={disableQuantityButton}
              onClick={(e) => changeQuantity( product, "increment")}
              type="button"
              className={`px-3 py-1 duration-100 rounded-r  ${disableQuantityButton?'cursor-not-allowed ':'cursor-pointer'} hover:text-white hover:bg-gray-900 `}
            >
              +
            </button>
          </div>

          {/* For Desktop */}
          <div className="relative items-center hidden space-x-4 text-gray-100 sm:flex">
            <TrashIcon
              onClick={(e) => removeFromCartHandler(product)}
              title="Remove From Cart"
              className="w-8 h-8 p-2 text-red-400 duration-150 bg-gray-800 border border-gray-700 rounded-full cursor-pointer hover:text-red-500"
            />
            <button
              type="button"
              title={wishlisted?'Already Wishlisted':'Move to Wishlist'}
              disabled={wishlisted}
              onClick={(e) => moveToWishlistHandler(product)}
              className="absolute right-0 w-12 h-12 p-0 m-0 text-pink-500 rounded-full"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className={`w-8 p-2 m-auto ${wishlisted?'fill-pink-500':'hover:fill-current'}  border border-gray-700  bg-gray-800 rounded-full h-8`}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartCard;
