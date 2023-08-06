// Archivo: Login.js
import React, { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import './styles/style.css';

const Login = ({ setIsLoggedIn, isLoggedIn, setUsername }) => {
  const [username, setLocalUsername] = useState(''); // Cambia el nombre de la variable para evitar conflicto
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleUsernameChange = (event) => {
    setLocalUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const userData = {
      usuario: username,
      contrasena: password,
    };

    try {
      const response = await fetch('http://localhost:8080/api/usuarios/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      if (response.ok) {
        setIsLoggedIn(true);
        setUsername(username);
        localStorage.setItem('isLoggedIn', true); // Guarda el estado de autenticación
        localStorage.setItem('username', username);  // Establecer el nombre de usuario en App.js
      } else {
        setErrorMessage('Credenciales incorrectas. Inténtalo de nuevo.');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  if (isLoggedIn) {
    return <Navigate to="/" />;
  }

  return (
    <div className="wrapper">
      <div className="form-box login">

        <h2>Iniciar sesión</h2>
        {/* Mostrar mensaje de error con la clase CSS */}
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        <form onSubmit={handleSubmit}>
          <div className="input-box">
            <span className="icon"></span>
            <input
              type="text"
              placeholder="Usuario"
              value={username}
              onChange={handleUsernameChange}
            />
          </div>
          <div className="input-box">
            <span className="icon"></span>

            <input
              type="password"
              placeholder="Contraseña"
              value={password}
              onChange={handlePasswordChange}
            />
          </div>
          <button type="submit" className="btn">
            Iniciar sesión
          </button>
          <div className="login-register">
            <p>
              ¿No tienes una cuenta? <Link to="/registro">Regístrate</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
