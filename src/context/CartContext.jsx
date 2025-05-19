import { createContext, useState } from "react";
import pizzaCart from "../views/cart/pizzaCart";

export const CartContext = createContext();

const CartProvider = ({ children }) => {

  const [cartItems, setCartItems] = useState(pizzaCart);

  const addToCart = (pizza) => {
    setCartItems((prevCart) => {
      const exists = prevCart.find((item) => item.id === pizza.id);
      if (exists) {
        return prevCart.map((item) =>
          item.id === pizza.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevCart, { ...pizza, quantity: 1 }];
      }
    });
  };
  
   const incrementCount = (id) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decrementCount = (id) => {
  setCartItems((prevItems) =>
    prevItems
      .map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
      .filter((item) => item.quantity > 0) 
  );
};
        return (
        <CartContext.Provider value={{ cartItems, incrementCount, decrementCount, addToCart }}>
        {children}
        </CartContext.Provider>
        );
};
export default CartProvider;