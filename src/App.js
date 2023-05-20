
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Mockman from "mockman-js";
import RootLayout from "./layouts/RootLayout";

function App() {
  return (

    <Routes>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="mocks" element={<Mockman />} />
      </Route>
    </Routes>
  );
}

export default App;
