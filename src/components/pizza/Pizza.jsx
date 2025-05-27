import { useContext } from 'react';
import { Link, useParams } from 'react-router-dom';


import './Pizza.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faCartPlus, faPlus } from '@fortawesome/free-solid-svg-icons';

import { CartContext } from '../../context/cartContext';
import { PizzaContext } from '../../context/pizzaContext';


const Pizza = () => {
  // Tomar función para agregar al carro
  const { addToCart } = useContext(CartContext); 

  const { id } = useParams();

  // Tomar pizzas, loading y error 
  const { pizzas, loading, error } = useContext(PizzaContext); 

   // Buscar pizza por id
  const pizza = pizzas.find(p => p.id === id);
  
  // Si no hay pizza:
  if (loading) return <p>Cargando...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!pizza) return <p>Pizza no encontrada</p>;


  return (
    <div className="pizza-page">
    <Link to='/home' className="btn-back"><FontAwesomeIcon icon={faArrowLeft} /></Link>
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
