import React, { useState, useEffect } from 'react';
import './styles/style.css';

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
    setTasks(storedTasks);
    localStorage.setItem('tasks', JSON.stringify(storedTasks));
  }, []);

  const handleTaskChange = (event) => {
    setNewTask(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (newTask.trim() !== '') {
      const updatedTasks = [...tasks, { text: newTask, completed: false }];
      setTasks(updatedTasks);
      localStorage.setItem('tasks', JSON.stringify(updatedTasks));
      setNewTask('');
    }
  };

  const handleToggleComplete = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
  };

  const handleDeleteTask = (index) => {
    const updatedTasks = tasks.filter((_, taskIndex) => taskIndex !== index);
    setTasks(updatedTasks);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
  };

  return (
    <div className="wrapper">
      <div className="task-container">
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
            <li key={index} className="task-list-item">
              <div className="task-item">
                <button onClick={() => handleToggleComplete(index)}>
                  {task.completed ? '✓' : '○'}
                </button>
                <span className={`task-text ${task.completed ? 'completed' : ''}`}>
                  {task.text}
                </span>
                <button onClick={() => handleDeleteTask(index)} className="task-delete"></button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TodoList;
