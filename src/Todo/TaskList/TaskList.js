import React, { useState, useEffect } from 'react';
import Task from '../Task/Task';

export default function TaskList(props) {
    const { todo,deleteTask } = props;
    return (
        <ul>
            {todo && todo.map((task, index) => (
                <Task key={index} task={task}>
                    <li>  {task}<button onClick={()=>deleteTask(index)}>X</button></li>
                </Task>

            ))}
        </ul>
    )
}
