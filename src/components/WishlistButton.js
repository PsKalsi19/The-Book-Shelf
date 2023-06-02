import { useLocation, useNavigate } from "react-router";
import { getAuth } from "../services/localstorage-service";
import { toast } from "react-hot-toast";
import { useContext } from "react";
import { BooksContext } from "../contexts/BooksProvider";

const WishlistButton = ({product}) => {

    const {handleWishlistToggle}=useContext(BooksContext)
    const navigate=useNavigate()
    const location=useLocation();
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
    return (
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
            product.wishlisted && getAuth() !== null
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
    );
};

export default WishlistButton;