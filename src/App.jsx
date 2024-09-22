import React, { useState } from 'react';
import TodoForm from './Components/TodoForm';
import TodoList from './Components/TodoList';
import './app.css';

const App = () => {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState('all'); // 'all', 'completed', 'not-completed'

  // Add Todo Handler
  const addTodo = (todo) => {
    setTodos([...todos, { ...todo, status: 'not completed' }]);
  };

  // Edit Todo Handler
  const editTodo = (id, updatedTodo) => {
    setTodos(todos.map((todo) => (todo.id === id ? updatedTodo : todo)));
  };

  // Delete Todo Handler
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  // Update Status Handler
  const updateStatus = (id, status) => {
    setTodos(todos.map((todo) => (todo.id === id ? { ...todo, status } : todo)));
  };

  // Filter Todos
  const filteredTodos = todos.filter((todo) => {
    if (filter === 'all') return true;
    if (filter === 'completed') return todo.status === 'completed';
    if (filter === 'not-completed') return todo.status === 'not completed';
    return true;
  });


  return (
    <div className="todo-app">
      <h1 className="todo-heading">My Todo</h1>
      <TodoForm addTodo={addTodo} />
      <div className="todo-container">
        <TodoList 
          todos={filteredTodos} 
          deleteTodo={deleteTodo} 
          updateStatus={updateStatus} 
          editTodo={editTodo} 
        />
      </div>
    </div>
  );
};

export default App;
