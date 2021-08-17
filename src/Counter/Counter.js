import React, { useState }from 'react';
import './Counter.css';

function Counter() {
	const[counter,setCounter]=useState(0);
	return (
		<div className="Counter">
			<p>Make the button increase the value:</p>
			<button onClick={()=>setCounter(counter +1)}>Increase</button>
			<div className="Counter__value">{counter}</div>
		</div>
	)
}

export default Counter;
