import { useState } from "react";
import "./Register.css";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordAgain, setPasswordAgain] = useState("");
  const [missingFields, setMissingFields] = useState(false);
  const [errorEmail, setErrorEmail] = useState(false);
  const [errorPasswordRequirements, setPasswordRequirements] = useState(false);
  const [errorPasswordMatch, setPasswordMatch] = useState(false);
  const [successMessage, setSuccessMessage] = useState(false);

  const validateEmailFormat = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateRegister = (e) => {
    e.preventDefault();

    setMissingFields(false);
    setErrorEmail(false);
    setPasswordRequirements(false);
    setPasswordMatch(false);
    setSuccessMessage(false);

    if (!email || !password || !passwordAgain) {
        setMissingFields(true);
        if (!email || !validateEmailFormat(email)) setErrorEmail(true);
        if (!password || password.length < 6) setPasswordRequirements(true);
        if (password !== passwordAgain) setPasswordMatch(true);
        return;
      }
     
    if (!email || !validateEmailFormat(email) || password !== passwordAgain || password.length < 6){
      if (!email || !validateEmailFormat(email)) setErrorEmail(true);
      if (!password || password.length < 6) setPasswordRequirements(true);
      if (password !== passwordAgain) setPasswordMatch(true);
      return;
    }

  

    setSuccessMessage(true);
    setEmail('');
    setPassword('');
    setPasswordAgain('');
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
            {successMessage ? <p className="success">Registro exitoso</p> : null}
          </div>
        </div>
      </form>
    </>
  );
};

export default Register;