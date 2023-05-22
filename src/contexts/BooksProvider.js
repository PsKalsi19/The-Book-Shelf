import { createContext, useEffect, useReducer } from "react";
import axios from "axios";


import { filtersInitialState } from "./initialStates/FilterInitialState";
import { booksInitialState } from "./initialStates/BooksInitialState";
import filters from "./reducers/Filters";
import books from "./reducers/Books";
import { BOOKS_ACTIONS } from "../constants/dispatchTypes";

export const BooksContext = createContext();

const BooksProvider = ({ children }) => {
  const [filtersState, filtersDispatch] = useReducer(
    filters,
    filtersInitialState
  );
  const [booksState, booksDispatch] = useReducer(books, booksInitialState);
  useEffect(() => {
    getCategories("/api/categories", booksDispatch);
    getBooks("/api/products", booksDispatch);
  }, []);
  return (
    <BooksContext.Provider
      value={{ filtersState, filtersDispatch, booksState, booksDispatch }}
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
    dispatch({
      type: BOOKS_ACTIONS.SAVE_BOOKS_DATA,
      payload: data.data.products,
    });
  } catch (error) {
    console.error(error);
  }
};
