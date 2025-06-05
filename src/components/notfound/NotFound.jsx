import './NotFound.css'
import { Link } from 'react-router-dom';


const NotFound = () => {
  return (
    <div className="error-page">
      <div className="error-container">
              <div className="error-img"></div>
        <h2>¡Ups! Página no encontrada</h2>
        <p>Lo sentimos, la página que estás buscando no existe.</p>
        <Link to='/' className="text-sm font-semibold hover:text-blue-600 hover:bg-sky-700"><span aria-hidden="true">&larr; </span>Volver a Homes</Link>

    
      </div>
      
    </div>
  );
};

export default NotFound;