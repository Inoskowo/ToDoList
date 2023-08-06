import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './styles/style.css';

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const userData = {
      usuario: username,
      email: email,
      contrasena: password,
    };

    try {
      const response = await fetch('http://localhost:8080/api/usuarios/registro', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      if (response.ok) {
        setSuccessMessage('Te has registrado con éxito. Ahora puedes iniciar sesión.');
        setTimeout(() => {
          // Redirigir al usuario a la página de inicio de sesión
          window.location.href = '/login'; // Cambia la URL según la configuración de tu enrutamiento
        }, 3000);
      } else {
        console.log('Error al registrar usuario.');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="wrapper">
      <div className="form-box login">
        <h1 className="todo">To Do List!</h1>
        <h2>Registrate</h2>
        {successMessage && <p className="success-message">{successMessage}</p>}
        <form onSubmit={handleSubmit}>
          <div className="input-box">
            <input type="text" id="usuario" name="usuario" placeholder="Usuario" value={username} onChange={handleUsernameChange} />
          </div>
          <div className="input-box">
            <input type="email" id="email" name="email" placeholder="Email" value={email} onChange={handleEmailChange} />
          </div>
          <div className="input-box">
            <input type="password" id="contrasena" name="contrasena" placeholder="Contraseña" value={password} onChange={handlePasswordChange} />
          </div>
          <div>
            <button type="submit" className="btn">Registrarse</button>
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
