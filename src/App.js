import { Route, Routes } from "react-router-dom";
import "./App.css";
import Mockman from "mockman-js";

// layouts
import RootLayout from "./layouts/RootLayout";
import ProductLayout from "./layouts/ProductLayout";

// pages
import Home from "./pages/home/Home";
import Products from "./pages/products/Products";
import Login from "./pages/login/Login";
import SignUp from "./pages/signUp/SignUp";
import User from "./pages/user/User";
import Cart from "./pages/cart/Cart";
import Wishlist from "./pages/wishlist/Wishlist";
import CanActivate from "./components/routegurad/CanActivate";
import AddressForm from "./pages/addressForm/AddressForm";
import Checkout from "./pages/checkout/Checkout";
import ThankYou from "./pages/thank-you/ThankYou";

function App() {
  return (
    <Routes>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="create-account" element={<SignUp />} />
        <Route
          path="cart"
          element={
            <CanActivate>
              <Cart />
            </CanActivate>
          }
        />
        <Route
          path="checkout"
          element={
            <CanActivate>
              <Checkout />
            </CanActivate>
          }
        />
        <Route
          path="thank-you"
          element={
            <CanActivate>
              <ThankYou />
            </CanActivate>
          }
        />
        <Route
          path="wishlist"
          element={
            <CanActivate>
              <Wishlist />
            </CanActivate>
          }
        />
        <Route path="user">
          <Route
            index
            element={
              <CanActivate>
                <User />
              </CanActivate>
            }
          />
          <Route
            path=":tab"
            element={
              <CanActivate>
                <User />
              </CanActivate>
            }
          />
        </Route>
        <Route path="address">
          <Route
            index
            element={
              <CanActivate>
                <AddressForm />
              </CanActivate>
            }
          />
          <Route
            path=":id"
            element={
              <CanActivate>
                <AddressForm />
              </CanActivate>
            }
          />
        </Route>
        <Route path="products" element={<ProductLayout />}>
          <Route index element={<Products />} />
          <Route path=":category" element={<Products />} />
        </Route>
      </Route>
      <Route path="mocks" element={<Mockman />} />
    </Routes>
  );
}

export default App;
