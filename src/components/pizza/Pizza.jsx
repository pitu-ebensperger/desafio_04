import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';


import './Pizza.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

import { CartContext } from '../../context/cartContext';
import { PizzaContext } from '../../context/pizzaContext';


const Pizza = () => {
  const { addToCart } = useContext(CartContext);

  const { id } = useParams();
  const { pizzas, loading, error } = useContext(PizzaContext);

  const pizza = pizzas.find(p => p.id === id);

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!pizza) return <p>Pizza no encontrada</p>;


  return (
    <div className="pizza-page">
    <a href='/home' className="btn-back"><FontAwesomeIcon icon={faArrowLeft} /></a>
    <div className="pizza">
      <div className='img-container'><img src={pizza.img} alt={pizza.name} />      <div className='pizza-title'>{pizza.name}</div>
      </div>
      <div className='pizza-info'>
      <div className='ingredients'><span className='title'>Ingredientes:&nbsp;&nbsp;</span> {pizza.ingredients.join(', ')}</div>
      <div className='description'><span className='title'>Descripción:</span> {pizza.desc}</div>
      <div className='price'><span className='title'>Precio:</span> ${pizza.price.toLocaleString()}</div>

    <div className="pizza-btns">
         <button className='btn btn-primary' onClick={() => addToCart(pizza)}>
                         <FontAwesomeIcon icon={faCartPlus} size='xs' />&nbsp;&nbsp;Añadir
                                       </button>

      </div>
      </div>
      </div>
      </div>
  );
};

export default Pizza;
