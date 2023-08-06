// App.js
import React, { useState } from 'react';
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
  };

  return (
    <div className="App">
      <Router>
        <Navbar username={username} handleLogout={handleLogout} />
        <Routes>
          <Route
            path="/"
            element={
              isLoggedIn ? (
                <TodoList />
              ) : (
                <Login
                  setIsLoggedIn={setIsLoggedIn}
                  isLoggedIn={isLoggedIn}
                  setUsername={setUsername}
                />
              )
            }
          />
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
