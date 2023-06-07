import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import axios from "axios";

import { filtersInitialState } from "./initialStates/FilterInitialState";
import { booksInitialState } from "./initialStates/BooksInitialState";
import filters from "./reducers/Filters";
import books from "./reducers/Books";
import { BOOKS_ACTIONS, FILTERS_ACTION } from "../constants/dispatchTypes";
import ENDPOINTS from "../constants/endpoints";
import {
  addToWishlist,
  addToWishlistInBulk,
  removeFromWishlist,
} from "../services/wishlist-service";
import { toast } from "react-hot-toast";
import {
  getCart,
  getWishlist,
  isExistingUser,
  updateCart,
  updateWishlist,
} from "../services/localstorage-service";
import { getProducts } from "../services/products-service";
import {
  changeItemQuantity,
  deleteCartItems,
  postCartItem,
  postCartItemInBulk,
} from "../services/cart-service";
import { AuthContext } from "./AuthProvider";

export const BooksContext = createContext();

const BooksProvider = ({ children }) => {
  const [filtersState, filtersDispatch] = useReducer(
    filters,
    filtersInitialState
  );
  const [booksState, booksDispatch] = useReducer(books, booksInitialState);
  const [buttonDisabled, setButtonDisable] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [disableQuantityButton, setDisableQuantityButtons] = useState(false);
  const { userState } = useContext(AuthContext);
  // states destructured
  const { priceSort, selectedCategory, priceSlider, ratingSlider } =
    filtersState;
  const { booksData } = booksState;

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
      toast.success("Removed from Wishlist");
      updateWishlist(data?.data?.wishlist);
    });
  };

  const searchProductsHandler = () =>
    searchTerm === ""
      ? booksData
      : booksData.filter((books) =>
          books.title.toLowerCase().includes(searchTerm.toLowerCase())
        );

  const changeCategoryHandler = (payload) => {
    return selectedCategory.length === 0
      ? payload
      : payload.filter(({ category }) => selectedCategory.includes(category));
  };

  const changePriceSliderHandler = (payload) => {
    return payload.filter(
      ({ price, discount }) => price - discount <= priceSlider
    );
  };

  const changeRatingsSliderHandler = (payload) => {
    return ratingSlider === 0
      ? payload
      : payload.filter(({ rating }) => rating >= ratingSlider);
  };

  const changePriceSort = (paylaod) => {
    if (priceSort === "") return paylaod;
    return paylaod
      .slice()
      .sort((a, b) =>
        priceSort === "ASC"
          ? a.price - a.discount - (b.price - b.discount)
          : b.price - b.discount - (a.price - a.discount)
      );
  };

  const handleFilterReset = () => {
    filtersDispatch({ type: FILTERS_ACTION.RESET, payload: "" });
  };

  const allSortsAndFilters = () => {
    let filteredData = searchProductsHandler();
    filteredData = changeCategoryHandler(filteredData);
    filteredData = changePriceSort(filteredData);
    filteredData = changePriceSliderHandler(filteredData);
    filteredData = changeRatingsSliderHandler(filteredData);
    return filteredData;
  };

  const addWishlistHandler = async (product, showToast = true) => {
    booksDispatch({
      type: BOOKS_ACTIONS.WISHLISTED,
      payload: product._id,
    });
    await addToWishlist({ product }).then((data) => {
      booksDispatch({
        type: BOOKS_ACTIONS.SAVE_WISHLIST,
        payload: data?.data?.wishlist,
      });
      showToast && toast.success("Added to Wishlist");
      updateWishlist(data?.data?.wishlist);
    });
  };

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
        toast.success("Added to Cart");
        setButtonDisable(null);
      });
    } catch (e) {
      setButtonDisable(null);
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
    toastMessage = "Removed from Cart",
    showToast = true
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
        showToast && toast.success(toastMessage);
      });
    } catch (error) {
      handleError(error);
    }
  };

  const saveOrderHistory = (items, totalAmount, orderId) => {
    const placedOrder = {
      products: items,
      totalBill: totalAmount,
      ...generateDateTimeAndId(orderId),
    };
    booksDispatch({
      type: BOOKS_ACTIONS.SAVE_PURCHASED_ITEMS,
      payload: placedOrder,
    });
  };

  const generateDateTimeAndId = (orderId) => {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth() + 1;
    const day = currentDate.getDate();
    const hours = currentDate.getHours();
    const minutes = currentDate.getMinutes();

    return {
      date: `${day}/${month}/${year}`,
      time: `${hours}:${minutes}`,
      orderId: orderId ?? `ORD#00${currentDate.getTime()}`,
    };
  };

  const moveToWishlistHandler = async (product) => {
    try {
      addWishlistHandler(product, false).then(() => {
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
        action === "increment"
          ? toast.success("Quantity Increased")
          : toast.success("Quantity Decreased");
        setDisableQuantityButtons(false);
      });
    } catch (error) {
      handleError(error);
    }
  };

  const handleError = (e) => {
    console.error(e);
    toast.error("Something Went Wrong, Try Later");
  };

  const syncCartData = async (payload) => {
    const {
      data: { cart },
    } = await postCartItemInBulk([payload]);
    booksDispatch({
      type: BOOKS_ACTIONS.SAVE_CART,
      payload: cart,
    });
  };

  const syncWishlistData = async (payload) => {
    const {
      data: { wishlist },
    } = await addToWishlistInBulk([payload]);
    booksDispatch({
      type: BOOKS_ACTIONS.SAVE_WISHLIST,
      payload: wishlist,
    });
  };

  useEffect(() => {
    getCategories(ENDPOINTS.CATEGORIES, booksDispatch);
    const addBooksData = async () => {
      try {
        const {
          data: { products },
        } = await getProducts();
        const updatedData = getUpdatedData(products);
        booksDispatch({
          type: BOOKS_ACTIONS.SAVE_BOOKS_DATA,
          payload: !isExistingUser() ? products : updatedData,
        });
      } catch (error) {
        handleError(error);
      }
    };
    addBooksData();
    if (!isExistingUser()) return;
    getCart() && getCart().length > 0 && syncCartData(getCart());
    getWishlist() &&
      getWishlist().length > 0 &&
      syncWishlistData(getWishlist());
  }, [userState]);

  return (
    <BooksContext.Provider
      value={{
        filtersState,
        filtersDispatch,
        booksState,
        booksDispatch,
        removeWishlistHandler,
        handleWishlistToggle,
        addToCartHandler,
        removeFromCartHandler,
        moveToWishlistHandler,
        cartItemQuantityHandler,
        searchProductsHandler,
        changeCategoryHandler,
        allSortsAndFilters,
        handleFilterReset,
        changePriceSort,
        saveOrderHistory,
        buttonDisabled,
        setButtonDisable,
        searchTerm,
        setSearchTerm,
        disableQuantityButton,
        setDisableQuantityButtons,
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
