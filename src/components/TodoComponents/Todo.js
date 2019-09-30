import React from 'react'

import './Todo.css'

const Todo = props => {
    return (
        <div
            className={`task${props.item.completed ? ' completed' : ''}`}
            onClick={() => props.toggleTodo(props.item.id)}
            >
            <p>{props.item.task}</p>
            </div>
    );
};

export default Todo;