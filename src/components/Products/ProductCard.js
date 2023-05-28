import { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { BooksContext } from "../../contexts/BooksProvider";
import { toast } from "react-hot-toast";
import { getAuth } from "../../services/localstorage-service";

const ProductCard = ({ product, fromWishlist }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const {
    handleWishlistToggle,
    removeWishlistHandler,
    addToCartHandler,
    buttonDisabled,
    setButtonDisable,
  } = useContext(BooksContext);

  const {
    imgUrl,
    price,
    rating,
    title,
    wishlisted,
    addedToCart,
    _id,
    discount,
  } = product;
  const wishlistToggleHandler = (e, product) => {
    e.stopPropagation();
    if (checkForAuth()) return;
    handleWishlistToggle(product);
  };

  const checkForAuth = () => {
    if (getAuth() === null) {
      toast.error("Log in to continue.");
      navigate("/login", { state: { from: location } });
      return true;
    }
  };

  const removeFromWishList = (e, product) => {
    e.stopPropagation();
    removeWishlistHandler(product._id);
  };

  const handleAddToCart = (e, product) => {
    e.stopPropagation();
    if (checkForAuth()) return;
    if (product.addedToCart) {
      navigate("/cart");
      return;
    }
    setButtonDisable(product._id);
    addToCartHandler(product);
  };

  return (
    <div className="flex flex-col items-center self-start border border-gray-900 rounded-lg hover:bg-gray-800 hover:border hover:border-gray-700 ">
      <div className="relative">
        <img
          className="w-40 h-56 p-4 rounded-t-lg lg:w-56 lg:h-80"
          src={imgUrl}
          alt={title}
        />
        {!fromWishlist && (
          <button
            type="button"
            onClick={(e) => wishlistToggleHandler(e, product)}
            className="absolute right-0 w-12 h-12 text-pink-600 rounded-full top-1"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className={`w-3/4 p-2 ${
                wishlisted && getAuth() !== null
                  ? "fill-current"
                  : "hover:fill-current"
              } bg-pink-200 rounded-full bg-opacity-60 h-3/4`}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
              />
            </svg>
          </button>
        )}
        {fromWishlist && (
          <button
            type="button"
            onClick={(e) => removeFromWishList(e, product)}
            className="absolute right-0 w-12 h-12 text-pink-600 rounded-full top-1"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className={`w-3/4 p-2 fill-current hover:fill-current bg-pink-200 rounded-full bg-opacity-60 h-3/4`}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
              />
            </svg>
          </button>
        )}
      </div>
      <div className="flex flex-col flex-wrap content-between justify-center px-5 pb-5 align-middle">
        <h5
          title={title}
          className="w-32 h-12 text-base font-semibold tracking-tight text-gray-100 lg:w-48 lg:text-lg lg:h-14 line-clamp-2"
        >
          {title}
        </h5>
        <div className="flex flex-col space-y-2">
          <div className="text-lg lg:text-2xl relative before:mr-1 before:content-['₹'] font-bold text-gray-100">
            {price - discount}
            <p className="text-xs sm:text-sm  before:mr-1 before:content-['₹'] line-through text-gray-200">
              {price}
            </p>

            <span className=" absolute text-xs right-0 bottom-1.5 font-semibold px-2.5 py-0.5 rounded bg-cyan-900 bg-opacity-80 text-gray-100">
              {rating}
            </span>
          </div>
          <button
            disabled={buttonDisabled === _id}
            id={_id}
            onClick={(e) => handleAddToCart(e, product)}
            type="button"
            className="w-full px-5 py-2.5 text-xs lg:text-sm font-medium text-center text-gray-100 rounded-lg bg-cyan-900 focus:ring-4 focus:outline-none hover:bg-cyan-950 focus:ring-cyan-950"
          >
            {buttonDisabled === _id && (
              <svg
                aria-hidden="true"
                role="status"
                className="inline w-4 h-4 mr-3 text-gray-200 animate-spin dark:text-gray-600"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="currentColor"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="#1C64F2"
                />
              </svg>
            )}

            {buttonDisabled !== _id && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="hidden w-6 h-6 mr-2 lg:inline-block"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                />
              </svg>
            )}
            {addedToCart ? "GO TO CART" : "ADD TO CART"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
