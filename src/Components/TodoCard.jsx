import React, { useState } from 'react';

const styles = {
    card: 'todo-card', // base card style
    completed: 'completed', // specific style for completed tasks
    notCompleted: 'not-completed' // specific style for not completed tasks
};

function TodoCard({ todo, onUpdateTodo, onDeleteTodo }) {
    const [isEditing, setIsEditing] = useState(false);
    const [name, setName] = useState(todo.name);
    const [description, setDescription] = useState(todo.description);
    const [status, setStatus] = useState(todo.status);

    const handleUpdate = () => {
        onUpdateTodo(todo.id, { name, description, status });
        setIsEditing(false);
    };

    const cardStyle = `${styles.card} ${todo.status === 'Completed' ? styles.completed : styles.notCompleted}`;

    return (
        <div className={cardStyle} style={{ 
            border: '1px solid gray', 
            padding: '15px', 
            margin: '10px', 
            backgroundColor: '#b3e6b3', 
            width: '300px', 
            display: 'inline-block', 
            verticalAlign: 'top',
        }}>
            {isEditing ? (
                <>
                    <input type="text" value={name} onChange={e => setName(e.target.value)} />
                    <input type="text" value={description} onChange={e => setDescription(e.target.value)} />
                    <select value={status} onChange={e => setStatus(e.target.value)}>
                        <option value="Not Completed">Not Completed</option>
                        <option value="Completed">Completed</option>
                    </select>
                    <button onClick={handleUpdate}>Update</button>
                    <button onClick={() => setIsEditing(false)}>Cancel</button>
                </>
            ) : (
                <>
                    <h4>Name: {name}</h4>
                    <p>Description: {description}</p>
                    <p>Status: 
                        <select value={status} onChange={e => {
                            setStatus(e.target.value);
                            handleUpdate();
                        }}>
                            <option value="Not Completed">Not Completed</option>
                            <option value="Completed">Completed</option>
                        </select>
                    </p>
                    <button onClick={() => setIsEditing(true)} style={{ 
                        backgroundColor: '#4CAF50', 
                        color: 'white',
                        marginRight: '10px',
                        border: 'none',
                        padding: '8px',
                    }}>Edit</button>
                    <button onClick={() => onDeleteTodo(todo.id)} style={{
                        backgroundColor: '#FF5722', 
                        color: 'white',
                        border: 'none',
                        padding: '8px',
                    }}>Delete</button>
                </>
            )}
        </div>
    );
}

export default TodoCard;
