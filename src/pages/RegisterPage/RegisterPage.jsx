import React from 'react'
import Register from '../../components/register/Register'
import './RegisterPage.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

function RegisterPage() {
  return (
    <div className="register-page">
      <a href='#' className="btn-back"><FontAwesomeIcon icon={faArrowLeft} /></a>
      <h1 className="register-title">Registro</h1>
      <div className="register-form">
        <Register />
      </div>
      </div>
  )
}

export default RegisterPage;
