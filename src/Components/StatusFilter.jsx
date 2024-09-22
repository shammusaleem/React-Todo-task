import React from 'react';

function StatusFilter({ value, onChange }) {
    return (
        <select
            value={value}
            onChange={(e) => onChange(e.target.value)}
            style={{ display: 'block', margin: '10px auto 20px', padding: '8px', width: '200px' }}
        >
            <option value="All">All</option>
            <option value="Completed">Completed</option>
            <option value="Not Completed">Not Completed</option>
        </select>
    );
}
export default StatusFilter;
