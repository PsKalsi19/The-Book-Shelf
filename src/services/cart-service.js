import axios from "axios";
import ENDPOINTS from "../constants/endpoints";
import { DEFAULT_HEADERS } from "./auth-service";

export const postCartItem = (payload) =>
  axios.post(ENDPOINTS.CART, payload, DEFAULT_HEADERS());
export const postCartItemInBulk = (payload) =>{
 return axios.post(ENDPOINTS.CART_BULK, payload, DEFAULT_HEADERS())}

export const getCartItems = () => axios.get(ENDPOINTS.CART, DEFAULT_HEADERS());

export const deleteCartItems = (productId) =>
  axios.delete(`${ENDPOINTS.CART}/${productId}`, DEFAULT_HEADERS());

export const changeItemQuantity = (productId, changeType) => {
  return axios.post(
    `${ENDPOINTS.CART}/${productId}`,
    { action: { type: changeType } },
    DEFAULT_HEADERS()
  );
};

export const getTotalAmount = (payload) => {
  const amounts= payload.reduce(
    (acc, item) => ({
      totalAmount: item.price * item.qty + acc.totalAmount,
      discountedAmount:
        (item.price - item.discount) * item.qty + acc.discountedAmount,
    }),
    {
      totalAmount: 0,
      discountedAmount: 0,
    }
  );
  return amounts
};

export const createCouponData = (payload) => {
  const itemsLength = payload.length;
  let coupons = [
    {
      name: "Free Delivery",
      value: 50,
    },
    {
      name: "Bookworms",
      value: 100,
    },
  ];
  switch (true) {
    case itemsLength === 3:
      coupons = [...coupons, { name: "3 Combo", value: 150 }];
      break;

    case itemsLength === 4:
      coupons = [...coupons, { name: "4 Combo", value: 250 }];
      break;

    case itemsLength > 4:
      coupons = [...coupons, { name: "Bibliophilia", value: 500 }];
      break;

    default:
      coupons = [...coupons];
      break;
  }

  return coupons;
};
