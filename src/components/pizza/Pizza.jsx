import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

import './Pizza.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';


const Pizza = () => {
  const { id } = useParams();
  const [pizza, setPizza] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPizza = async () => {
      try {
        const res = await fetch(`http://localhost:5001/api/pizzas/${id}`);
        if (!res.ok) throw new Error("Pizza no encontrada");
        const data = await res.json();
        setPizza(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchPizza();
  }, [id]);

  if (loading) return <p>Cargando pizza...</p>;
  if (error) return <p className='error'>Error: {error}</p>;
  if (!pizza) return <p className='error'>No hay data</p>;

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
      <button className="btn btn-primary">Add to Cart</button>
      </div>
      </div>
      </div>
      </div>
  );
};

export default Pizza;
