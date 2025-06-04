import { useContext} from "react";
import { Link, useNavigate } from 'react-router-dom';

import './Profile.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

import { UserContext } from "../../context/UserContext";

const Profile = () => {
  // Tomar token (estado y props) de userContext 
  const { profile, logout } = useContext(UserContext);
  
  // Función logout
    const navigate = useNavigate();

  
    const handleLogout = () => {
        logout();
        navigate('/login');
      };

  return (
    <div className="profile-page page">
      <Link to='/home' className="btn-back"><FontAwesomeIcon icon={faArrowLeft} /></Link>
      <div className="custom-card">
      <h1 className="page-title">Perfil</h1>
      <div className="profile-container">
        <div className="profile-info">
          <p>Usuario: {profile?.name}</p>
          <p>Email: {profile?.email}</p>
     </div>
        </div>
        <div className="profile-actions">
          <button className="btn-primary" onClick={handleLogout}>Cerrar sesión</button>
        </div>

      </div>
    </div>
  );
};

export default Profile;