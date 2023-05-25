import { BOOKS_ACTIONS } from "../../constants/dispatchTypes";
import { booksInitialState } from "../initialStates/BooksInitialState";
// import { booksInitialState } from "../initialStates/BooksInitialState";

const books = (state, { type, payload }) => {
  switch (type) {
    case BOOKS_ACTIONS.SAVE_CATEGORY:
      return { ...state, categories: payload };

    case BOOKS_ACTIONS.SAVE_BOOKS_DATA:
      return { ...state, booksData: payload };

    case BOOKS_ACTIONS.SAVE_WISHLIST:
      return { ...state, wishlist: payload };

    case BOOKS_ACTIONS.SAVE_CART:
      return { ...state, cart: payload };

    case BOOKS_ACTIONS.WISHLISTED:
      return {
        ...state,
        booksData: state.booksData.map((ele) => wishlisted(ele, payload)),
      };

    case BOOKS_ACTIONS.REMOVE_WISHLISTED:
      return {
        ...state,
        booksData: state.booksData.map((ele) => removeWishlisted(ele, payload)),
      };

    case BOOKS_ACTIONS.CART_TOGGLE:
      return {
        ...state,
        booksData: state.booksData.map((ele) =>
          addAndRemoveCartItems(ele, payload)
        ),
      };

    case BOOKS_ACTIONS.RESET_CART_WISHLIST:
      return {...state,cart:[],wishlist:[]};

    case BOOKS_ACTIONS.RESET:
      return booksInitialState;

    default:
      return state;
  }
};
export default books;

const wishlisted = (element, payloadId) =>
  element._id === payloadId
    ? { ...element, wishlisted: true }
    : element;

const removeWishlisted = (element, payloadId) =>
  element._id === payloadId
    ? { ...element, wishlisted: false }
    : element;

const addAndRemoveCartItems = (element, payloadId) =>
  element._id === payloadId
    ? { ...element, addedToCart: !element.addedToCart }
    : element;
