import { useState } from 'react';
import Header from '../../components/Header';
import ToDoList from '../../components/ToDoList';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState('');

  const addTask = () => {
    if (input.trim()) {
      const newTask = {
        id: Date.now(),
        text: input,
        completed: false,
        editing: false,
      };
      setTasks([...tasks, newTask]);
      setInput('');
    }
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const toggleComplete = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const toggleEdit = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, editing: !task.editing } : task
    ));
  };

  const updateTask = (id, newText) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, text: newText, editing: false } : task
    ));
  };

  return (
    <div className="app-container">
      <Header />
      <div className="input-container">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter a task"
        />
        <button onClick={addTask}>Add</button>
      </div>
      <ToDoList
        tasks={tasks}
        deleteTask={deleteTask}
        toggleComplete={toggleComplete}
        toggleEdit={toggleEdit}
        updateTask={updateTask}
      />
    </div>
  );
}

export default App;
