import axios from "axios";
import ENDPOINTS from "../constants/endpoints";
import { DEFAULT_HEADERS } from "./auth-service";

export const getWishlist = () => axios.get(ENDPOINTS.WISHLIST, DEFAULT_HEADERS());

export const addToWishlist = (product) =>
  axios.post(ENDPOINTS.WISHLIST, product, DEFAULT_HEADERS());

export const addToWishlistInBulk = (product) =>
  axios.post(ENDPOINTS.WISHLIST_BULK, product, DEFAULT_HEADERS());

export const removeFromWishlist = (productId) =>
  axios.delete(`${ENDPOINTS.WISHLIST}/${productId}`, DEFAULT_HEADERS());