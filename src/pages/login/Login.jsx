import { useEffect, useState, useContext } from "react";
import { useNavigate, Link } from 'react-router-dom'; 
import { UserContext } from "../../context/UserContext";
import useInput from "../../hooks/useInput";
import { isValidEmail } from "../../utils/validators/email.validate";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import './Login.css'

import Alert from 'react-bootstrap/Alert';
import Fade from 'react-bootstrap/Fade';
import 'bootstrap/dist/css/bootstrap.min.css';



const Login = () => {
    const { login, } = useContext(UserContext);
    const email = useInput("");
    const password = useInput("");
    const [missingFields, setMissingFields] = useState(false);
    const [errorEmail, setErrorEmail] = useState(false);
    const [errorPasswordRequirements, setPasswordRequirements] = useState(false);
    const [successMessage, setSuccessMessage] = useState(false);
    const [errorMessage, setErrorMessage] = useState(""); 
    const navigate = useNavigate();
    
  
  
    const handleLogin = async (e) => {
      e.preventDefault();
  
      setMissingFields(false);
      setErrorEmail(false);
      setPasswordRequirements(false);
      setSuccessMessage(false);
      setErrorMessage("");
  
      
      if (!email.value || !isValidEmail(email.value)) {
      setErrorEmail(true);
      }
      if (!password.value || password.value.length < 6) {
        setPasswordRequirements(true);
      }
      if (!email.value || !password.value || !isValidEmail(email.value) || password.value.length < 6) {
        setMissingFields(true);
        return;
      }

      const result = await login(email.value, password.value);

        if (!result.success) {
          setErrorMessage(result.error);
          return;
        }

        setSuccessMessage(true);
        email.setValue('');
        password.setValue('');s
        };

    
        useEffect(() => {
            if (successMessage) {
              const timer = setTimeout(() => {
                navigate('/home');
              }, 2000);
              return () => clearTimeout(timer);
            }
          }, [successMessage, navigate]);



  
    return (
      <>
      <div className="login-page">
          <Link to='/home' className="btn-back"><FontAwesomeIcon icon={faArrowLeft} /></Link>
            <h1 className="page-title">Login</h1>
            <div className="page-form">
                <form onSubmit={handleLogin}>
                      <div className="form-group">
                        <div className="form-section">
                          <label htmlFor="Email" className="form-label">Email</label>
                          <input
                            className="form-control"
                            type="text"
                            name="Email"
                            onChange={email.onChange}
                            value={email.value}
                          />
                        </div>
      
                        <div className="form-section">
                          <label htmlFor="Password" className="form-label">Contraseña</label>
                          <input
                            className="form-control"
                            type="password"
                            name="Password"
                            onChange={password.onChange}
                            value={password.value}
                          />
                        </div>
      
                        <button className="btn btn-primary" type="submit">
                          Enviar
                        </button>
              
                        <div className="message">
                          {missingFields && <p className="error">Todos los campos son obligatorios</p>}
                          {errorEmail && <p className="error">El email ingresado no es válido</p>}
                          {errorPasswordRequirements && <p className="error">La contraseña debe tener al menos 6 caracteres</p>}
                          {errorMessage && (
                                 
                            <Alert variant="danger" onClose={() => setErrorMessage("")} dismissible>
                              {errorMessage}
                            </Alert>
                          )}
                          {successMessage && (
                                  <div className="centered-alert">
                                      <Fade in={successMessage}>
                                        <Alert
                                          variant="success"
                                          
                                          className="shadow-lg alertsuccess"
                                          transition={false}
                                        >
                                          ¡Login exitoso! Redirigiendo...
                                        </Alert>
                                      </Fade>
                                    </div>
                              )}
                        </div>
                        
                      </div>
                </form>
            </div>
            </div>
      </>
    );
  };

export default Login;
