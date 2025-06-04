import { useState } from "react";
import './Register.css'
import useInput from "../hooks/useInput";
import { isValidEmail } from "../utils/validators/email.validate";

import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

const Register = () => {

  const email = useInput("");
  const password = useInput("");
  const [passwordAgain, setPasswordAgain] = useState("");
  const [missingFields, setMissingFields] = useState(false);
  const [errorEmail, setErrorEmail] = useState(false);
  const [errorPasswordRequirements, setPasswordRequirements] = useState(false);
  const [errorPasswordMatch, setPasswordMatch] = useState(false);
  const [backendError, setBackendError] = useState("");
  const [successMessage, setSuccessMessage] = useState(false);


  const validateRegister = async (e) => {
    e.preventDefault();

    setMissingFields(false);
    setErrorEmail(false);
    setPasswordRequirements(false);
    setPasswordMatch(false);
    setBackendError("");
    setSuccessMessage(false);

    if (!email.value || !password.value || !passwordAgain) {
        setMissingFields(true);
        if (!email.value || !isValidEmail(email.value)) setErrorEmail(true);
        if (!password.value || password.value.length < 6) setPasswordRequirements(true);
        if (password.value !== passwordAgain) setPasswordMatch(true);
        return;
      }
     
    if (!email.value ||  !isValidEmail(email.value) || password.value !== passwordAgain || password.value.length < 6){
      if (!email.value ||  !isValidEmail(email.value)) setErrorEmail(true);
      if (!password.value || password.value.length < 6) setPasswordRequirements(true);
      if (password.value !== passwordAgain) setPasswordMatch(true);
      return;
    }

     try {
    const response = await fetch("http://localhost:5001/api/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: email.value, password: password.value }),
    });
    const data = await response.json();

    if (data?.error) {
        setErrorEmail(true);
        setBackendError(data.error); 
        return;
      }

     if (data.token) {
      localStorage.setItem("token", data.token);
      setSuccessMessage(true);
      email.setValue('');
      password.setValue('');
      setPasswordAgain('');
    }

    } catch (err) {
    console.error("Error during registration:", err);}
  };

  return (
    <>
    <div className="register-page">
          <Link to='/home' className="btn-back"><FontAwesomeIcon icon={faArrowLeft} /></Link>
          <h1 className="page-title">Registro</h1>
          <div className="page-form">
          <form onSubmit={validateRegister}>
                  <div className="form-group">
                    <div className="form-section">
                      <label htmlFor="Email" className="form-label">Email</label>
                      <input
                        className="form-control"
                        type="text"
                        name="Email"
                         {...email}
                      />
                    </div>

                    <div className="form-section">
                      <label htmlFor="Password" className="form-label">Contraseña</label>
                      <input
                        className="form-control"
                        type="password"
                        name="Password"
                        {...password}
                      />
                    </div>

                    <div className="form-section">
                      <label htmlFor="PasswordAgain" className="form-label">Confirma tu Contraseña</label>
                      <input
                        className="form-control"
                        type="password"
                        name="PasswordAgain"
                        onChange={(e) => setPasswordAgain(e.target.value)}
                        value={passwordAgain}
                      />
                    </div>

                    <button className="btn btn-primary" type="submit">
                      Enviar
                    </button>

                    <div className="message">
                    {missingFields ? <p className="error">Todos los campos son obligatorios</p> : null} 
                      {errorEmail ? <p className="error">El email ingresado no es válido</p> : null}
                      {errorPasswordRequirements ? <p className="error">La contraseña debe tener al menos 6 caracteres</p> : null}
                      {errorPasswordMatch ? <p className="error">Las contraseñas no son iguales</p> : null}
                      {backendError && <p className="error">{backendError}</p>}
                      {successMessage ? <p className="success">Registro exitoso</p> : null}
                    </div>
                  </div>
                </form>
          </div>
          </div>
              
    </>
  );
};

export default Register;