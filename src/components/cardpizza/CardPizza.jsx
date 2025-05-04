import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './CardPizza.css'
import pizzas from './pizzas.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';


const CardPizza = () => {

  return (
  <>
    {pizzas.map(({ desc, id, img, ingredients, name, price }) => (
    <div className="custom-card" key={id}>
      <Card.Img variant="top" src={img} className='card-img'/>
      <Card.Body>
        <div className='card-title'>{name}</div>
        <div className="ingredients">
          <span className='ingredients-title'>Ingredients</span>
          <ul> {ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}{index < ingredients.length - 1 ? ', ' : ''} </li>
            ))}</ul> 
          </div>
        <div className='price'>Precio: ${price.toLocaleString()}</div>
        <div className='card-bottom'>
          <div className='card-btn'>Ver más&nbsp;<FontAwesomeIcon icon={faPlus} size='xs'/> </div>
          <div className='card-btn'>Añadir&nbsp;<FontAwesomeIcon icon={faCartPlus} size='xs'/></div>
       </div>
      </Card.Body>
      </div>
      ))}
    </>
  );
};

 export default CardPizza;