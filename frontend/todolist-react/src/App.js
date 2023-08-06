import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './login';
import Register from './registro';
import Navbar from './Navbar';
import TodoList from './TodoList';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername('');
    localStorage.removeItem('isLoggedIn'); // Borra la información de autenticación
    localStorage.removeItem('username'); // Borra el nombre de usuario
  };

  // Verifica si hay información de autenticación en localStorage al cargar la página
  useEffect(() => {
    const storedIsLoggedIn = localStorage.getItem('isLoggedIn');
    const storedUsername = localStorage.getItem('username');  
    if (storedIsLoggedIn === 'true' && storedUsername) {
      setIsLoggedIn(true);
      setUsername(storedUsername);
    }
  }, []);

  return (
    <div className="App">
      <Router>
        <Navbar username={username} handleLogout={handleLogout} />
        <Routes>
          <Route   path="/"  element={isLoggedIn ? ( <TodoList />) : (<Login setIsLoggedIn={setIsLoggedIn}isLoggedIn={isLoggedIn}setUsername={setUsername} />)} />
          <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} isLoggedIn={isLoggedIn} />} />
          <Route
            path="/registro"
            element={!isLoggedIn ? <Register /> : <Navigate to="/" />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
  