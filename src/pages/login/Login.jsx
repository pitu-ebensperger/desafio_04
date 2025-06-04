import { useState, useContext } from "react";
import { useNavigate, Link } from 'react-router-dom'; 
import { UserContext } from "../../context/UserContext";
import useInput from "../../hooks/useInput";
import { isValidEmail } from "../../utils/validators/email.validate";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import './Login.css'


const Login = () => {
    const { login } = useContext(UserContext);
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
  
      if (!email.value || !password.value) {
        setMissingFields(true);
        if (!email.value || !isValidEmail(email.value)) setErrorEmail(true);
        if (!password.value || password.value.length < 6) setPasswordRequirements(true);
        return;
      }
     
      if (!email.value || !isValidEmail(email.value) || password.value.length < 6){
        if (!email.value || !isValidEmail(email.value)) setErrorEmail(true);
        if (!password.value || password.value.length < 6) setPasswordRequirements(true);
        return;
      }

      const result = await login(email.value, password.value);

        if (!result.success) {
          setErrorMessage(result.error);
          return;
        }

        setSuccessMessage(true);
        email.setValue('');
        password.setValue('');
        window.alert("¡Login exitoso!");
          setTimeout(() => {// Delay para ver mensaje antes de redirigir al home 
          navigate('/home');
        }, 100); 

    };
  
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
                          {missingFields ? <p className="error">Todos los campos son obligatorios</p> : null}
                          {errorEmail ? <p className="error">El email ingresado no es válido</p> : null}
                          {errorPasswordRequirements ? <p className="error">La contraseña debe tener al menos 6 caracteres</p> : null}
                          {errorMessage && <p className="error">{errorMessage}</p>}
                          {successMessage ? <p className="success">Login exitoso</p> : null}
                        </div>
                      </div>
                </form>
            </div>
            </div>
      </>
    );
  };

export default Login;
