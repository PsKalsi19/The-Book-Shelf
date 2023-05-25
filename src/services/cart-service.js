import axios from "axios";
import ENDPOINTS from "../constants/endpoints";
import { DEFAULT_HEADERS } from "./auth-service";

export const postCartItem = (payload) =>
  axios.post(ENDPOINTS.CART, payload, DEFAULT_HEADERS);

export const getCartItems = () => axios.get(ENDPOINTS.CART, DEFAULT_HEADERS);

export const deleteCartItems = (productId) =>
  axios.delete(`${ENDPOINTS.CART}/${productId}`, DEFAULT_HEADERS);

export const changeItemQuantity = (productId, changeType) => {
  axios.post(
    `${ENDPOINTS.CART}/${productId}`,
    { action: { type: changeType } },
    DEFAULT_HEADERS
  );
};
