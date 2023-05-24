import { createContext, useEffect, useReducer } from "react";
import axios from "axios";

import { filtersInitialState } from "./initialStates/FilterInitialState";
import { booksInitialState } from "./initialStates/BooksInitialState";
import filters from "./reducers/Filters";
import books from "./reducers/Books";
import { BOOKS_ACTIONS } from "../constants/dispatchTypes";
import ENDPOINTS from "../constants/endpoints";
import {
  addToWishlist,
  removeFromWishlist,
} from "../services/wishlist-service";
import { toast } from "react-hot-toast";
import {
  getCart,
  getWishlist,
} from "../services/localStorage-service";

export const BooksContext = createContext();

const BooksProvider = ({ children }) => {
  const [filtersState, filtersDispatch] = useReducer(
    filters,
    filtersInitialState
  );
  const [booksState, booksDispatch] = useReducer(books, booksInitialState);

  const handleWishlistToggle = async (product) => {
    try {
      // Changing the value is local data first so as to
      booksDispatch({
        type: BOOKS_ACTIONS.WISHLIST_TOGGLE,
        payload: product._id,
      });
      // remove if already wishlisted
      if (product.wishlisted) {
        await removeFromWishlist(product._id).then((data) => {
          booksDispatch({
            type: BOOKS_ACTIONS.SAVE_WISHLIST,
            payload: data?.data?.wishlist,
          });
          // updateWishlist(data?.data?.wishlist);
        });
      } else {
        await addToWishlist({ product }).then((data) => {
          booksDispatch({
            type: BOOKS_ACTIONS.SAVE_WISHLIST,
            payload: data?.data?.wishlist,
          });
          // updateWishlist(data?.data?.wishlist);
        });
      }
    } catch (error) {
      booksDispatch({
        type: BOOKS_ACTIONS.WISHLIST_TOGGLE,
        payload: product._id,
      });
      console.log(error);
      toast.error("Could not add the item, try again.");
    }
  };

  useEffect(() => {
    getCategories(ENDPOINTS.CATEGORIES, booksDispatch);
    getBooks(ENDPOINTS.PRODUCTS, booksDispatch);
    booksDispatch({ type: BOOKS_ACTIONS.SAVE_CART, payload: getCart() });
    booksDispatch({
      type: BOOKS_ACTIONS.SAVE_WISHLIST,
      payload: getWishlist(),
    });
  }, []);

  return (
    <BooksContext.Provider
      value={{
        filtersState,
        filtersDispatch,
        booksState,
        booksDispatch,
        handleWishlistToggle,
      }}
    >
      {children}
    </BooksContext.Provider>
  );
};

export default BooksProvider;

const getCategories = async (url, dispatch) => {
  try {
    const data = await axios.get(url);
    dispatch({
      type: BOOKS_ACTIONS.SAVE_CATEGORY,
      payload: data.data.categories,
    });
  } catch (error) {
    console.error(error);
  }
};

const getBooks = async (url, dispatch) => {
  try {
    const data = await axios.get(url);
    const updatedData = getUpdatedData(data?.data?.products);
    dispatch({
      type: BOOKS_ACTIONS.SAVE_BOOKS_DATA,
      payload: updatedData,
    });
  } catch (error) {
    console.error(error);
  }
};

const getUpdatedData = (products) => {
  const cart = getCart();
  const wishlist = getWishlist();
  if (cart && cart.length === 0 && wishlist.length === 0) return products;
  return products.map((product) => {
    const itemInCart = cart.find((item) => item._id === product.id);
    const itemInWishlist = wishlist.find((item) => item._id === product.id);
    return {
      ...product,
      wishlisted: !!itemInWishlist,
      addedToCart: !!itemInCart,
    };
  });
};
