import React from 'react'
import Login from '../../components/login/login'
import './Login.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

function LoginPage() {
  return (
    <div className="page">
      <a href='/' className="btn-back"><FontAwesomeIcon icon={faArrowLeft} /></a>
      <h1 className="page-title">Login</h1>
      <div className="page-form">
        <Login />
      </div>
      </div>
  )
}

export default LoginPage;
