import React from 'react'
import Register from '../../components/register/register'
import './Register.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

function RegisterPage() {
  return (
    <div className="page">
      <a href='/' className="btn-back"><FontAwesomeIcon icon={faArrowLeft} /></a>
      <h1 className="page-title">Registro</h1>
      <div className="page-form">
        <Register />
      </div>
      </div>
  )
}

export default RegisterPage;
