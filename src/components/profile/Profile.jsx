import { useContext} from "react";
import { Link, useNavigate } from 'react-router-dom';

import './Profile.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

import { UserContext } from "../../context/userContext";

const Profile = () => {
  // Tomar token (estado y props) de userContext 
  const { token, setToken } = useContext(UserContext); 
  const email = token?.email; 
  const name = token?.displayName;

  // Función logout
    const navigate = useNavigate();
    const logout = () => { 
              setToken(null);
              navigate('/login');
          }
  


  return (
    <div className="profile-page page">
      <Link to='/home' className="btn-back"><FontAwesomeIcon icon={faArrowLeft} /></Link>
      <div className="custom-card">
      <h1 className="page-title">Perfil</h1>
      <div className="profile-container">
        <div className="profile-info">
          <p>Usuario: {name}</p>
          <p>Email: {email}</p>
     </div>
        </div>
        <div className="profile-actions">
          <button className="btn-primary"  onClick={() => { logout();}}>Cerrar sesión</button>
        </div>

      </div>
    </div>
  );
};

export default Profile;