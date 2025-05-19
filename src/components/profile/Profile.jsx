import { useState } from "react";
import './Profile.css'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

const Profile = () => {
  const email= "nombre@email.com";
  return (
    <div className="profile-page page">
      <Link to='/home' className="btn-back"><FontAwesomeIcon icon={faArrowLeft} /></Link>
      <div className="custom-card">
      <h1 className="page-title">Perfil</h1>
      <div className="profile-container">
        <div className="profile-info">
          <p>Email: {email}</p>
     </div>
        </div>
        <div className="profile-actions">
          <button className="btn-primary">Cerrar sesión</button>
        </div>

      </div>
    </div>
  );
};

export default Profile;