import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './login';
import Register from './registro';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Estado de inicio de sesión

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login setIsLoggedIn={setIsLoggedIn} isLoggedIn={isLoggedIn} />} />
          <Route path="/registro" element={!isLoggedIn ? <Register /> : <Navigate to="/" />} />
          {/* Agrega aquí tus otras rutas y componentes */}
        </Routes>
      </Router>
    </div>
  );
}
  
export default App;
