import React, { useState, useEffect } from 'react';
import './Todo.css';
import TaskList from './TaskList/TaskList';
function Todo() {
	const [todos, setTodos] = useState([]);
	const [task, setTask] = useState('');
	const handleClick = (e) => {
		if (task) {
			setTodos([...todos, task]);
			setTask('');
		}
	}
	const deleteTask = (key) => {
		setTodos(todos.filter((task, index) => {
			return index !== key;
		}))

	}
	return (
		<div className="Todo">
			<h3>Todo List:</h3>
			<p>Make a Todo list (add & delete options):</p>
			<input placeholder="Your task..." onChange={e => setTask(e.target.value)} value={task} />
			<button onClick={handleClick}>Add task</button>
			<TaskList todo={todos} deleteTask={deleteTask} />
		</div>
	)
}

export default Todo;
