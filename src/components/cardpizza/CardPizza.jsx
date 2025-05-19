import React from 'react'
import { useEffect, useState, useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './CardPizza.css'
import pizzas from './pizzas.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

import { CartContext } from '../../context/CartContext';
import { PizzaContext } from '../../context/PizzaContext';


const CardPizza = () => {
  const { addToCart } = useContext(CartContext);
  
  const { pizzas, loading, error } = useContext(PizzaContext);

  if (loading) return <p>Cargando pizzas...</p>;
  if (error) return <p className='error'>Error: {error}</p>;


  return (
    <>
      {pizzas.map((pizza) => {
      const { desc, id, img, ingredients, name, price } = pizza;
      return(
        <div className="custom-card card-pizza" key={id}>
          <Card.Img variant="top" src={img} className='card-img' />
          <Card.Body>
            <div className='card-title'>{name}</div>
            <div className="ingredients">
              <span className='ingredients-title'>Ingredients</span>
              <ul>
                {ingredients.map((ingredient, index) => (
                  <li key={index}>
                    {ingredient}{index < ingredients.length - 1 ? ', ' : ''}
                  </li>
                ))}
              </ul>
            </div>
            <div className='price'>Precio: ${price.toLocaleString()}</div>
            <div className='card-bottom'>
              <Link to={`/pizza/${id}`} className='card-btn'>
                Ver más&nbsp;<FontAwesomeIcon icon={faPlus} size='xs' />
              </Link>
              <button className='card-btn btn btn-primary' onClick={() => addToCart(pizza)}>
                Añadir&nbsp;<FontAwesomeIcon icon={faCartPlus} size='xs' />
              </button>
            </div>
          </Card.Body>
        </div>
      )})
}
    </>
  );
};

export default CardPizza;