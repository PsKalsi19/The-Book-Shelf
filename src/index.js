import React from "react";
import {createRoot} from "react-dom/client"
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import BooksProvider, { BooksContext } from "./contexts/BooksProvider";
import AuthProvider, { AuthContext } from "./contexts/AuthProvider";
import { Toaster } from "react-hot-toast";
import AddressProvider from "./contexts/AddressProvider";

export { BooksContext };
export { AuthContext };
// Call make Server
makeServer();

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <BooksProvider>
          <AddressProvider>
            <Toaster position="top-right" reverseOrder={false} />
            <App />
          </AddressProvider>
        </BooksProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
