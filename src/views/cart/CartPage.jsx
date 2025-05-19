import { useState, useContext } from "react";
import "./Cart.css";
import pizzaCart from "./pizzaCart";


import Decrement from "../../components/cartcounter/Decrement";
import Increment from "../../components/cartcounter/Increment";
import { CartContext } from "../../context/CartContext";


const Cart = () => {
  const { cartItems } = useContext(CartContext);
  
  const cartTotal = cartItems
    .filter((pizza) => pizza.quantity > 0) 
    .reduce((total, pizza) => {
      return total + pizza.price * pizza.quantity;
    }, 0);

  return (
    <div className="cart">
      <div className="cart-container card">
        <h1 className="cart-title">Detalles del Pedido</h1>
        <ul>
          {cartItems
            .filter((pizza) => pizza.quantity > 0)
            .map((pizza) => (
              <div className="cart-item" key={pizza.id}>
                <div className="item-row">
                  <div className="item-info">
                    <img
                      src={pizza.img}
                      alt={pizza.name}
                      className="item-img"
                    />
                    <span className="item-title">{pizza.name}</span>
                  </div>
                  <div className="item-price-count">
                    <div className="item-total">
                      ${(pizza.price * pizza.quantity).toLocaleString()}
                    </div>
                    <div className="item-count">
                          <Decrement id={pizza.id} />
                           <span className="item-count">{pizza.quantity}</span>
                          <Increment id={pizza.id} />
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </ul>
        {cartItems.filter((pizza) => pizza.quantity > 0).length === 0 ? (
          <p className="empty-cart">El carro está vacío</p>
        ) : (
          <div className="cart-bottom">
          <span className="cart-total">
            Total <strong>${cartTotal.toLocaleString()}</strong>
          </span>
          <button className="btn btn-primary">Pagar</button>
        </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
