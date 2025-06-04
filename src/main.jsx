import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";

import UserProvider from "./context/UserContext";
import CartProvider from "./context/CartContext";
import PizzaProvider from "./context/PizzaContext";

import "./index.css";


ReactDOM.createRoot(document.getElementById("root")).render(
<React.StrictMode>
<BrowserRouter>
    <UserProvider>
    <CartProvider>
      <PizzaProvider>
        <App />
      </PizzaProvider>
    </CartProvider>
  </UserProvider>
</BrowserRouter>
</React.StrictMode>
);
