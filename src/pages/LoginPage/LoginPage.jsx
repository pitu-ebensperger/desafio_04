import React from 'react'
import Login from '../../components/login/Login'
import './LoginPage.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

function RegisterPage() {
  return (
    <div className="login-page">
      <a href='#' className="btn-back"><FontAwesomeIcon icon={faArrowLeft} /></a>
      <h1 className="login-title">Login</h1>
      <div className="login-form">
        <Login />
      </div>
      </div>
  )
}

export default RegisterPage;
