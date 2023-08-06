// TodoList.js
import React, { useState } from 'react';

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

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
      <h2>Bienvenido al To-Do List</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Agregar una nueva tarea"
          value={newTask}
          onChange={handleTaskChange}
        />
        <button type="submit">Agregar</button>
      </form>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
