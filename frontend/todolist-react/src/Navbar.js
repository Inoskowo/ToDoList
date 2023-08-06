import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ username, handleLogout }) => {
  return (
    <div className='header'>  
      <nav className="navbar">
        <div className="navbar-logo">
          <h2>To-Do List</h2>
        </div>
        <div className="navbar-links">
          {username && <p>Bienvenido, {username}!</p>} {/* Verifica si hay un nombre de usuario */}
          {username && <button className='button'><Link to="/" onClick={handleLogout}>Cerrar Sesión</Link></button>} {/* Verifica si hay un nombre de usuario */}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
