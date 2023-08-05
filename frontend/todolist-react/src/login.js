// Archivo: Login.js

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './styles/style.css';


const Login = ({ setIsLoggedIn, isLoggedIn }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí puedes hacer la solicitud al backend para verificar las credenciales del usuario
    // Por ahora, simularemos un inicio de sesión exitoso
    console.log('Nombre de usuario:', username);
    console.log('Contraseña:', password);
    setIsLoggedIn(true); // Establecer el estado de inicio de sesión a verdadero
  };


  return (


    <div class="wrapper">
      <div class="form-box login">
      <h1  class="todo">To Do List!</h1>
        <h2>Iniciar sesión</h2>
      <form onSubmit={handleSubmit}>
      <div class="input-box">
                <span class="icon"></span>  
                <input type="text"  placeholder="Usuario" value={username} onChange={handleUsernameChange} />
        </div>
      <div class="input-box">
                  <span class="icon"></span>
    
                  <input type="password" placeholder="Contraseña" value={password} onChange={handlePasswordChange} />
      </div>
        <button type="submit" class="btn">Iniciar sesión</button>  
      <div class="login-register">
                  <p>¿No tienes una cuenta? <Link to="/registro">Regístrate</Link></p>
      </div> 
       
      </form>
      </div>    
    </div>
  );
};

export default Login;
