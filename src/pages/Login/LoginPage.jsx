import React from 'react'
import Login from '../../components/login/login'
import './Login.css'

import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

function LoginPage() {
  return (
    <div className="login-page page">
      <a href='/home' className="btn-back"><FontAwesomeIcon icon={faArrowLeft} /></a>
      <h1 className="page-title">Login</h1>
      <div className="page-form">
        <Login />
      </div>
      </div>
  )
}

export default LoginPage;
