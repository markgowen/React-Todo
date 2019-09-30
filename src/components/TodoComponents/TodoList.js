// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react'

import Todo from './Todo'

const TodoList = props => {
    console.log(props.tasks)
    return (
        <div className='task-list'>
            {props.tasks.map(item => (
                <Todo key={item.id} item={item} toggleTodo={props.toggleTodo} />
            ))}
            <button className='clear-btn' onClick={props.clearTask}>
                Clear Task
            </button>
        </div>
    );
};

export default TodoList;

