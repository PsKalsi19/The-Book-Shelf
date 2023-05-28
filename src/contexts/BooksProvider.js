import { createContext, useCallback, useEffect, useReducer, useState } from "react";
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
  updateCart,
  updateWishlist,
} from "../services/localstorage-service";
import { getProducts } from "../services/products-service";
import {
  changeItemQuantity,
  deleteCartItems,
  postCartItem,
} from "../services/cart-service";

export const BooksContext = createContext();

const BooksProvider = ({ children }) => {
  const [filtersState, filtersDispatch] = useReducer(
    filters,
    filtersInitialState
  );
  const [booksState, booksDispatch] = useReducer(books, booksInitialState);
  const [buttonDisabled, setButtonDisable] = useState("");

  const handleWishlistToggle = (product) => {
    try {
      // remove if already wishlisted
      product.wishlisted
        ? removeWishlistHandler(product._id)
        : addWishlistHandler(product);
    } catch (error) {
      booksDispatch({
        type: BOOKS_ACTIONS.REMOVE_WISHLISTED,
        payload: product._id,
      });
      handleError(error);
    }
  };

  const removeWishlistHandler = async (productID) => {
    booksDispatch({
      type: BOOKS_ACTIONS.REMOVE_WISHLISTED,
      payload: productID,
    });
    await removeFromWishlist(productID).then((data) => {
      booksDispatch({
        type: BOOKS_ACTIONS.SAVE_WISHLIST,
        payload: data?.data?.wishlist,
      });
      updateWishlist(data?.data?.wishlist);
    });
  };

  const addWishlistHandler = async (product) => {
    booksDispatch({
      type: BOOKS_ACTIONS.WISHLISTED,
      payload: product._id,
    });
    await addToWishlist({ product }).then((data) => {
      booksDispatch({
        type: BOOKS_ACTIONS.SAVE_WISHLIST,
        payload: data?.data?.wishlist,
      });
      updateWishlist(data?.data?.wishlist);
    });
  };

  const addBooksData = useCallback(async () => {
    try {
      const data = await getProducts();
      const updatedData = getUpdatedData(data?.data?.products);
      booksDispatch({
        type: BOOKS_ACTIONS.SAVE_BOOKS_DATA,
        payload: updatedData,
      });
    } catch (error) {
      handleError(error);
    }
  },[]);

  const addToCartHandler = async (product) => {
    try {
      booksDispatch({
        type: BOOKS_ACTIONS.ADD_TO_CART,
        payload: product._id,
      });
      await postCartItem({ product }).then((data) => {
        booksDispatch({
          type: BOOKS_ACTIONS.SAVE_CART,
          payload: data?.data?.cart,
        });
        booksDispatch({
          type: BOOKS_ACTIONS.STOP_LOADER,
          payload: product._id,
        });
        updateCart(data?.data?.cart);
        toast.success("Item added.");
        setButtonDisable(null);
      });
    } catch (e) {
      toast.error("Something Went Wrong, Try Again.");
      console.error(e);
      booksDispatch({
        type: BOOKS_ACTIONS.REMOVE_FROM_CART,
        payload: product._id,
      });
      booksDispatch({
        type: BOOKS_ACTIONS.STOP_LOADER,
        payload: product._id,
      });
    }
  };

  const removeFromCartHandler = async (
    product,
    toastMessage = "Item Removed."
  ) => {
    try {
      await deleteCartItems(product._id).then((data) => {
        booksDispatch({
          type: BOOKS_ACTIONS.SAVE_CART,
          payload: data?.data?.cart,
        });
        booksDispatch({
          type: BOOKS_ACTIONS.REMOVE_FROM_CART,
          payload: product._id,
        });
        updateCart(data?.data?.cart);
        toast.success(toastMessage);
      });
    } catch (error) {
      handleError(error);
    }
  };

  const moveToWishlistHandler = async (product) => {
    try {
      addWishlistHandler(product).then(() => {
        removeFromCartHandler(product, "Item moved to wishlist");
      });
    } catch (error) {
      handleError(error);
    }
  };

  const cartItemQuantityHandler = async (product, action) => {
    try {
      await changeItemQuantity(product._id, action).then((data) => {
        booksDispatch({
          type: BOOKS_ACTIONS.SAVE_CART,
          payload: data?.data?.cart,
        });
        updateCart(data?.data?.cart);
        action==='increment'?toast.success("Quantity Increased"):toast.success("Quantity Decreased")
      });
    } catch (error) {
      handleError(error);
    }
  };

  const handleError = (e) => {
    console.error(e);
    toast.error("Something Went Wrong, Try Later");
  };

  useEffect(() => {
    getCategories(ENDPOINTS.CATEGORIES, booksDispatch);
    addBooksData();
    booksDispatch({ type: BOOKS_ACTIONS.SAVE_CART, payload: [...getCart()] });
    booksDispatch({
      type: BOOKS_ACTIONS.SAVE_WISHLIST,
      payload: [...getWishlist()],
    });
  }, [addBooksData]);

  return (
    <BooksContext.Provider
      value={{
        filtersState,
        filtersDispatch,
        booksState,
        booksDispatch,
        addBooksData,
        removeWishlistHandler,
        handleWishlistToggle,
        addToCartHandler,
        removeFromCartHandler,
        moveToWishlistHandler,
        cartItemQuantityHandler,
        buttonDisabled,
        setButtonDisable,
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

const getUpdatedData = (products) => {
  const cart = getCart();
  const wishlist = getWishlist();
  if (cart && cart.length === 0 && wishlist.length === 0) return products;
  return products.map((product) => {
    const itemInCart = cart.find((item) => item._id === product._id);
    const itemInWishlist = wishlist.find((item) => item._id === product._id);
    return {
      ...product,
      wishlisted: !!itemInWishlist,
      addedToCart: !!itemInCart,
    };
  });
};
