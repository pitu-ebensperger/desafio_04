import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './CardPizza.css'
import pizzas from './pizzas.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';


const CardPizza = () => {
  const [pizzas, setPizzas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPizzas = async () => {
      try {
        const res = await fetch("http://localhost:5001/api/pizzas");
        if (!res.ok) throw new Error("Failed to fetch pizzas");
        const data = await res.json();
        setPizzas(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPizzas();
  }, []);

  if (loading) return <p>Cargando pizzas...</p>;
  if (error) return <p className='error'>Error: {error}</p>;

  return (
    <>
      {pizzas.map(({ desc, id, img, ingredients, name, price }) => (
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
              <div className='card-btn'>
                Añadir&nbsp;<FontAwesomeIcon icon={faCartPlus} size='xs' />
              </div>
            </div>
          </Card.Body>
        </div>
      ))}
    </>
  );
};

export default CardPizza;