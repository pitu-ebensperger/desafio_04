import { useState } from "react";
import './Profile.css'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

const Profile = () => {
  return (
    <div className="profile-page">
      <Link to='/home' className="btn-back"><FontAwesomeIcon icon={faArrowLeft} /></Link>
      <h1 className="page-title">Perfil</h1>
      <div className="profile-container">
        <div className="profile-info">
          <h2>Información de la cuenta</h2>
          <p>Nombre: Juan Pérez</p>
          <p>Email: email</p>
     </div>
  
        <div className="profile-actions">
          <h2>Acciones</h2>
          <button className="btn-edit">Editar perfil</button>
          <button className="btn-logout">Cerrar sesión</button>
        </div>
      </div>
    </div>
  );
};

export default Profile;