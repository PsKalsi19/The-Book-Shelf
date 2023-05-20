import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Mockman from "mockman-js";
import RootLayout from "./layouts/RootLayout";
import Products from "./components/Products/Products";

function App() {
  return (
    <Routes>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="mocks" element={<Mockman />} />
        <Route path="products">
          <Route index element={<Products/>} />
          <Route path=":category" element={<Products/>} />
          <Route path="best-sellers" element={<Products/>} />
        </Route>

      </Route>
    </Routes>
  );
}

export default App;
