import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './styles/style.css';


const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí puedes enviar los datos del formulario al backend para el registro
  };

  return (

    
    <div class="wrapper">
      <div class="form-box login">
      <h1  class="todo">To Do List!</h1>
      <h2>Registrate</h2>
      <form onSubmit={handleSubmit}>
        <div class="input-box"> 
          <input type="text" id="username" name="username" placeholder="Usuario" value={username} onChange={handleUsernameChange} />
        </div>
        <div class="input-box">
          <input type="email" id="email"  name="email" placeholder="Email" value={email} onChange={handleEmailChange} />
        </div>
        <div class="input-box">
          <input type="password" id="password" name="password" placeholder="Contraseña" value={password} onChange={handlePasswordChange} />
        </div>
        <div>
          <button type="submit" class="btn">Registrarse</button>
        </div>
        <div className="login-register">
          <p>¿Ya tienes una cuenta? <Link to="/">Inicia sesión</Link></p>
        </div>
      </form>
      </div>
    </div>
  );
};

export default Register;
