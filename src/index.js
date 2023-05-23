import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import BooksProvider, { BooksContext } from "./contexts/BooksProvider";
import AuthProvider, { AuthContext } from "./contexts/AuthProvider";
import { Toaster } from "react-hot-toast";

export { BooksContext };
export { AuthContext };
// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <BooksProvider>
        <AuthProvider>
          <Toaster toastOptions={{
            className:"toaster-classes"
          }} position="top-right" reverseOrder={false} />
          <App />
        </AuthProvider>
      </BooksProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
