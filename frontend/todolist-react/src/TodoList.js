import React, { useState, useEffect } from 'react';
import './styles/style.css';

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  // Cargar tareas desde localStorage al cargar la página
  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
    setTasks(storedTasks);
  }, []);

  // Guardar tareas en localStorage cada vez que cambien
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const handleTaskChange = (event) => {
    setNewTask(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (newTask.trim() !== '') {
      setTasks([...tasks, newTask]);
      setNewTask('');
    }
  };

  return (
    <div className="wrapper">
      <div className="task-container"> {/* Nuevo contenedor */}
        <form onSubmit={handleSubmit} className="task-form">
          <input
            type="text"
            placeholder="Agregar una nueva tarea"
            value={newTask}
            onChange={handleTaskChange}
          />
          <button type="submit">Agregar</button>
        </form>
        <ul className="task-list">
          {tasks.map((task, index) => (
            <li key={index}>{task}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TodoList;
