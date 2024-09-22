import React, { useState } from 'react';
import TodoItem from './TodoCard';

const TodoList = ({ todos, onUpdateTodo, onDeleteTodo }) => {
    const [statusFilter, setStatusFilter] = useState('All');

    // Filter todos based on the selected status
    const filteredTodos = todos.filter(todo => {
        if (statusFilter === 'All') return true;
        return todo.status === statusFilter;
    });

    return (
        <div>
            <div style={{ marginBottom: '20px' }}>
                <label>Status Filter: </label>
                <select value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)}>
                    <option value="All">All</option>
                    <option value="Completed">Completed</option>
                    <option value="Not Completed">Not Completed</option>
                </select>
            </div>

            <div>
                {filteredTodos.map(todo => (
                    <TodoItem
                        key={todo.id}
                        todo={todo}
                        onUpdateTodo={onUpdateTodo}
                        onDeleteTodo={onDeleteTodo}
                    />
                ))}
            </div>
        </div>
    );
};

export default TodoList;
