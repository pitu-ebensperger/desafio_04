import { useState } from "react";
import "./Cart.css";
import pizzaCart from "./pizzaCart";

const Cart = () => {
  const [cartItems, setCartItems] = useState(pizzaCart);

  const incrementCount = (id) => {
    const newCartItems = [...cartItems];
    const pizzaIndex = newCartItems.findIndex((pizza) => pizza.id === id);
    if (pizzaIndex !== -1) {
      newCartItems[pizzaIndex].count += 1;
      setCartItems(newCartItems);
    }
  };

  const decrementCount = (id) => {
    const newCartItems = [...cartItems];
    const pizzaIndex = newCartItems.findIndex((pizza) => pizza.id === id);
    if (pizzaIndex !== -1 && newCartItems[pizzaIndex].count > 0) {
      newCartItems[pizzaIndex].count -= 1;
      setCartItems(newCartItems);
    }
  };

  const cartTotal = cartItems
    .filter((pizza) => pizza.count > 0) 
    .reduce((total, pizza) => {
      return total + pizza.price * pizza.count;
    }, 0);

  return (
    <div className="cart page">
      <div className="cart-container">
        <h1 className="cart-title">Detalles del Pedido</h1>
        <ul>
          {cartItems
            .filter((pizza) => pizza.count > 0)
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
                      ${(pizza.price * pizza.count).toLocaleString()}
                    </div>
                    <div className="item-count">
                      <button
                        className="btn btn-primary"
                        onClick={() => decrementCount(pizza.id)}
                      >
                        -
                      </button>
                      {pizza.count}
                      <button
                        className="btn btn-primary"
                        onClick={() => incrementCount(pizza.id)}
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </ul>
        {cartItems.filter((pizza) => pizza.count > 0).length === 0 ? (
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
