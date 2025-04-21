import { useState } from "react";
import "./Login.css";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorEmail, setErrorEmail] = useState(false);
    const [errorPasswordRequirements, setPasswordRequirements] = useState(false);
    const [successMessage, setSuccessMessage] = useState(false);
  
    const validateEmailFormat = (email) => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    };
  
    const validateRegister = (e) => {
      e.preventDefault();
  
      setErrorEmail(false);
      setPasswordRequirements(false);
      setSuccessMessage(false);
  
      if (!email || !password) {
        if (!email || !validateEmailFormat(email)) setErrorEmail(true);
        if (!password || password.length < 6) setPasswordRequirements(true);

        return;
      }
  
      if (!email) {
        setErrorEmail("Debes ingresar tu email");
        return;
      }
      if (!validateEmailFormat(email)) {
        setErrorEmail("El formato del email no es válido");
        return;
      }
  
      if (password.length < 6) {
        setPasswordRequirements(true);
        return;
      }

      setSuccessMessage(true);
      setEmail('');
      setPassword('');
    };
  
    return (
      <>
        <form onSubmit={validateRegister}>
          <div className="form-group">
            <div className="form-section">
              <label htmlFor="Email" className="form-label">Email</label>
              <input
                className="form-control"
                type="text"
                name="Email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
            </div>
  
            <div className="form-section">
              <label htmlFor="Password" className="form-label">Contraseña</label>
              <input
                className="form-control"
                type="password"
                name="Password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
            </div>
  
      
  
            <button className="btn btn-primary" type="submit">
              Enviar
            </button>
  
            <div className="message">
              {errorEmail ? <p className="error">Debes ingresar tu email</p> : null}
              {errorPasswordRequirements ? <p className="error">La contraseña debe tener al menos 6 caracteres</p> : null}
              {successMessage ? <p className="success">Login exitoso</p> : null}
            </div>
          </div>
        </form>
      </>
    );
  };

export default Login;
