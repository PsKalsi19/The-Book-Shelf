const AUTH_TOKEN = "auth_token";
const USER = "user";
const CART = "cart";
const WISHLIST = "wishlist";

export const setAuth = (token) => localStorage.setItem(AUTH_TOKEN, token);

export const setUser = (user) =>
  localStorage.setItem(USER, JSON.stringify(user));

export const getAuth = () => {
  return localStorage.getItem(AUTH_TOKEN);
};

export const getUser = () => {
  return JSON.parse(localStorage.getItem(USER)) ?? {};
};

export const getCart = () => {
  return getUser().hasOwnProperty(CART) ? getUser()[CART] : [];
};

export const getWishlist = () => {
  return getUser().hasOwnProperty(WISHLIST) ? getUser()[WISHLIST] : [];
};

export const handleLocalStorageLogOut = () => {
  localStorage.removeItem(AUTH_TOKEN);
  localStorage.removeItem(USER);
};

// export const updateCart = (payload) => {
//   const userData = getUser();
//   setUser({ ...userData, [CART]: payload });
// };

// export const updateWishlist = (payload) => {
//   const userData = getUser();
//   setUser({ ...userData, [WISHLIST]: payload });
// };
