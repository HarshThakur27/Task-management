

import React, { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Create from './components/Create';
import Task from './components/Task';
import Edit from './components/Edit';
import Home from './components/Home';

function App() {
    const [tasks, setTasks] = useState([]); 
    const [currentTask, setCurrentTask] = useState(null); 

    const addTask = (task) => {
      setTasks([...tasks, { ...task, id: Date.now(), completed: false }]); 
  };
  

    const deleteTask = (id) => {  
        setTasks(tasks.filter(task => task.id !== id));
    };

    const editTask = (updatedTask) => {
      setTasks(tasks.map(task => (task.id === updatedTask.id ? updatedTask : task)));
  };
  const toggleCompletion = (id) => {
    setTasks(tasks.map(task => 
        task.id === id ? { ...task, completed: !task.completed } : task
    ));
};
  

    return (
        <div>
            <nav className="bg-blue-900 p-4">
                <ul className="flex space-x-4">
                    <li>
                        <Link to="/" className="text-white">Home</Link>
                    </li>
                    <li>
                        <Link to="/create" className="text-white">Create</Link>
                    </li>
                    <li>
                        <Link to="/task" className="text-white">Tasks</Link>
                    </li>
                </ul>
            </nav>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/create" element={<Create addTask={addTask} />} /> 
                <Route path="/task" element={<Task tasks={tasks} onEdit={setCurrentTask} onDelete={deleteTask} />} />  
                <Route path="/edit" element={<Edit task={currentTask} editTask={editTask} />} />  
            </Routes>
        </div>
    );
}

export default App;
