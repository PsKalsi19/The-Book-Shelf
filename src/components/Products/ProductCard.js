import { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { BooksContext } from "../../contexts/BooksProvider";
import { toast } from "react-hot-toast";
import { getAuth } from "../../services/localStorage-service";
const ProductCard = ({ product }) => {
  const navigate =useNavigate()
  const location =useLocation()
  const {handleWishlistToggle}=useContext(BooksContext)
  const { imgUrl, price, rating, title,wishlisted } = product;
  const wishlistHandler=(e,product)=>{
    e.stopPropagation()
    if (getAuth()===null) {
      toast.error("Log in to continue.");
      navigate("/login", { state: { from: location } });
      return 
    }
    handleWishlistToggle(product)
  }
  return (
    <div className="flex flex-col items-center border border-gray-900 rounded-lg hover:bg-gray-800 hover:border hover:border-gray-700 ">
      <div className="relative">
        <img className="w-40 h-56 p-4 rounded-t-lg lg:w-56 lg:h-80" src={imgUrl} alt={title} />
        <button type="button" onClick={(e)=> wishlistHandler(e,product)} className="absolute right-0 w-12 h-12 text-pink-600 rounded-full top-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className={`w-3/4 p-2 ${wishlisted && getAuth()!==null ?'fill-current':'hover:fill-current' } bg-pink-200 rounded-full bg-opacity-60 h-3/4`}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
            />
          </svg>
        </button>
      </div>
      <div className="flex flex-col flex-wrap content-between justify-center px-5 pb-5 align-middle">
        <h5 title={title} className="w-32 h-12 text-base font-semibold tracking-tight text-gray-100 lg:w-48 lg:text-lg lg:h-14 line-clamp-2">
          {title}
        </h5>
        <div className="flex flex-col space-y-2">
          <div className="text-lg lg:text-2xl relative before:mr-1 before:content-['₹'] font-bold text-gray-100">
            {price}
            <span className=" absolute text-xs right-0 bottom-1.5 font-semibold px-2.5 py-0.5 rounded bg-cyan-900 bg-opacity-80 text-gray-100">
              {rating}
            </span>
          </div>
          <button
            type="button"
            className="w-full px-5 py-2.5 text-xs lg:text-sm font-medium text-center text-gray-100 rounded-lg bg-cyan-900 focus:ring-4 focus:outline-none hover:bg-cyan-950 focus:ring-cyan-950"
          >
            {" "}
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
            ADD TO CART
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
