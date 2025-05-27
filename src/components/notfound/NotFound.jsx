import './NotFound.css'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

const NotFound = () => {
  return (
    <div className="error-page">
      <Link to='/home' className="btn-back"><FontAwesomeIcon icon={faArrowLeft} /></Link>

      <div className="error-container">
              <div className="error-img"></div>
        <h2>¡Ups! Página no encontrada</h2>
        <p>Lo sentimos, la página que estás buscando no existe.</p>
        <Link to='/' className="btn-home">Volver a la página de inicio</Link>
      </div>
    </div>
  );
};

export default NotFound;