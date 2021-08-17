import React, { useState,useEffect } from 'react';
import './RealNumber.css';

function RealNumber() {
	const [isNumber, setIsNumber] = useState(false);
	const[value,setValue]=useState(null);

	useEffect(() => {
		setIsNumber(!isNaN(value));
	},[value])
	return (
		<div className="RealNumber">
			<p>
				The button near the input should be visible only if the input contains <u>only</u> numbers.
				Examples:<br />
				"238764" - <span className="value--valid">valid</span> <br />
				"A13" - <span className="value--invalid">invalid</span>
			</p>


			<input type="text" className="text-box" onChange={e=>setValue(e.target.value)} value={value}/>
			{isNumber && <button>Submit</button>}
		</div>
	)
}

export default RealNumber;
