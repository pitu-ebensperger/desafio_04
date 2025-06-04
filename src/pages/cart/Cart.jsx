import { useState, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";

import "./Cart.css";
import pizzaCart from "../../data/pizzaCart";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

import Decrement from "../../components/cartcounter/Decrement";
import Increment from "../../components/cartcounter/Increment";
import { CartContext } from "../../context/cartContext";
import { UserContext } from "../../context/UserContext";

const Cart = () => {
  const { token } = useContext(UserContext);
  const { cartItems } = useContext(CartContext);

  const handleCheckout = async () => {
    const response = await fetch("http://localhost:5000/api/checkout", {
              method: "POST",
              headers: {
                  "Content-Type": "application/json",
                  Authorization: `Bearer token_jwt`,
                  },
              body: JSON.stringify({
              cart: carrito,
              }),
              })
            };
  
  const cartTotal = cartItems 
    .filter((pizza) => pizza.quantity > 0) // Filtrar solo pizzas > 0 
    .reduce((total, pizza) => {
      return total + pizza.price * pizza.quantity;
    }, 0);

  return (
    <div className="cart page">
            <Link to='/home' className="btn-back"><FontAwesomeIcon icon={faArrowLeft} /></Link>
      
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
        {cartItems.filter((pizza) => pizza.quantity > 0).length === 0 ? ( // Carro vacío
          <p className="empty-cart">El carro está vacío</p>
        ) : (
          <div className="cart-bottom">
          <span className="cart-total">
            Total <strong>${cartTotal.toLocaleString()}</strong>
          </span>
          {token ? // Boton solo para visible para loggeados(token), sino link a login/registro
              <button className="btn btn-primary" onClick={handleCheckout}>Pagar</button> :
              <p className="alert-pay"> Haz<a href="/login"> &nbsp;Login&nbsp; </a> o <a href="/register"> &nbsp;Registrate&nbsp; </a>para pagar</p>
          }
        </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
