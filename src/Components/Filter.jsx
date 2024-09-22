import React from 'react';

function Filter({ value, onChange }) {
    return (
        <select value={value} onChange={(e) => onChange(e.target.value)}>
            <option value="All">All</option>
            <option value="Completed">Completed</option>
            <option value="Not Completed">Not Completed</option>
        </select>
    );
}

export default Filter;
