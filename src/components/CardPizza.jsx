import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';


const CardPizza = ({name, price, ingredients, img}) => {
  return (
  <>
    <div className="card">
      <Card.Img variant="top" src={img} className='card-img'/>
      <Card.Body>
        <div className='card-title'>{name}</div>
        <div className="ingredients">
          <span className='ingredients-title'>Ingredients</span>
          <span className='ingredients-list'> {ingredients.map((ingredient, index) => (
              <span key={index}>{ingredient}{index < ingredients.length - 1 ? ', ' : ''} </span>
            ))}</span> 
          </div>
        <div className='price'>Precio: ${price}</div>
        <div className='card-bottom'>
          <Button variant="secondary" className='card-btn'>Ver más&nbsp;<FontAwesomeIcon icon={faPlus} size='xs'/> </Button>
          <Button variant="primary" className='card-btn'>Añadir&nbsp;<FontAwesomeIcon icon={faCartPlus} size='xs'/></Button>
       </div>
      </Card.Body>
     
    </div>
  </>
  )
  };

 export default CardPizza;