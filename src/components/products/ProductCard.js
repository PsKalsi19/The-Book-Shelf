import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { BooksContext } from "../../contexts/BooksProvider";
import AddToCartButton from "../AddToCartButton";
import WishlistButton from "../WishlistButton";

const ProductCard = ({ product, fromWishlist }) => {
  const navigate = useNavigate();
  const { removeWishlistHandler } = useContext(BooksContext);

  const { imgUrl, price, rating, title, _id, discount } = product;

  const removeFromWishList = (e, product) => {
    e.stopPropagation();
    removeWishlistHandler(product._id);
  };

  const productOverview = (id) => {
    navigate(`/product-overview/${id}`);
  };

  return (
    <div
      onClick={(e) => productOverview(_id)}
      className="flex flex-col items-center self-start border border-gray-900 rounded-lg hover:bg-gray-800 hover:border hover:border-gray-700 "
    >
      <div className="relative">
        <img
          className="w-40 h-56 p-4 rounded-t-lg lg:w-56 lg:h-80"
          src={imgUrl}
          alt={title}
        />
        {!fromWishlist && <WishlistButton product={product} />}
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
          <AddToCartButton product={product} />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
