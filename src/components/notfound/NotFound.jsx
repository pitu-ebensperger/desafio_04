import './NotFound.css'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

const NotFound = () => {
  return (
    <div className="error-page">
      <div className="error-container">
              <div className="error-img"></div>
        <h2>¡Ups! Página no encontrada</h2>
        <p>Lo sentimos, la página que estás buscando no existe.</p>
        <Link to='/' className="btn-home text-sm">Volver a Home <span aria-hidden="true">&rarr;</span></Link>
        <a href="#" className="text-sm font-semibold text-gray-900">
              Contact support <span aria-hidden="true">&rarr;</span>
            </a>
      </div>
    </div>
  );
};

export default NotFound;