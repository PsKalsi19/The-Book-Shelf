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

function App() {
  return (
    <Routes>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="login" element={<Login/>}/>
        <Route path="create-account" element={<SignUp/>}/>
        <Route path="mocks" element={<Mockman />} />
        <Route path="products" element={<ProductLayout/>}>
          <Route index element={<Products/>} />
          <Route path=":category" element={<Products/>} />
        </Route>

      </Route>
    </Routes>
  );
}

export default App;
