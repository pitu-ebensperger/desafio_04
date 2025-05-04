import React from 'react'
import Register from '../../components/register/register'
import './Register.css'

import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

function RegisterPage() {
  return (
    <div className="register-page page">
      <Link to='/home' className="btn-back"><FontAwesomeIcon icon={faArrowLeft} /></Link>
      <h1 className="page-title">Registro</h1>
      <div className="page-form">
        <Register />
      </div>
      </div>
  )
}

export default RegisterPage;
