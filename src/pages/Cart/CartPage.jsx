import { useState } from "react";
import "./Cart.css"
import pizzaCart from "../../components/cart/pizzaCart";

const Cart = () => {

return (
    <div className="page">
      <h1 className="page-title">Carrito</h1>

      <div className="cart-container">
        <ul>
          {pizzaCart.map((pizza, index) => (
            <div className="cart-item" key={pizza.id || index}>
              <img src={pizza.img} alt={pizza.name} className="item-img"/>
              <span className="item-title">{pizza.name}</span>
              <span className="item-price">Precio: ${pizza.price.toLocaleString()}</span>
              <span className="item-count">Cantidad: {pizza.count}</span>
              <span className="item-total">Total: ${(pizza.price * pizza.count).toLocaleString()}</span>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Cart;