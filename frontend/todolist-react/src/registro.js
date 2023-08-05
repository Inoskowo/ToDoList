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

    const handleSubmit = async (event) => {
      event.preventDefault();

      const userData = {
        Usuario: username,
        Email: email,
        Contrasena: password,
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
          console.log('Usuario registrado exitosamente.');
          // Aquí podrías redirigir al usuario a otra página o mostrar un mensaje de éxito
        } else {
          console.log('Error al registrar usuario.');
          // Aquí podrías manejar el caso de un error en el registro
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
          <form onSubmit={handleSubmit}>
            <div className="input-box">
              <input type="text" id="username" name="username" placeholder="Usuario" value={username} onChange={handleUsernameChange} />
            </div>
            <div className="input-box">
              <input type="email" id="email" name="email" placeholder="Email" value={email} onChange={handleEmailChange} />
            </div>
            <div className="input-box">
              <input type="password" id="password" name="password" placeholder="Contraseña" value={password} onChange={handlePasswordChange} />
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
