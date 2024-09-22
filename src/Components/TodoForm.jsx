import React, { useState } from 'react';

const TodoForm = ({ addTodo }) => {
  const [todo, setTodo] = useState({ name: '', description: '', status: 'Not Completed' }); // Default status

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTodo({
      ...todo,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todo.name && todo.description) {
      addTodo({ ...todo, id: Date.now() });
      setTodo({ name: '', description: '', status: 'Not Completed' }); // Reset status to default
    }
  };

  return (
    <form className="input-wrapper" onSubmit={handleSubmit}>
      <input 
        type="text" 
        name="name" 
        placeholder="Todo Name" 
        value={todo.name} 
        onChange={handleChange} 
        className="input-box" 
      />
      <input 
        type="text" 
        name="description" 
        placeholder="Todo Description" 
        value={todo.description} 
        onChange={handleChange} 
        className="input-box" 
      />
  
      <button type="submit" className="add-button">Add Todo</button>
    </form>
  );
};

export default TodoForm;
