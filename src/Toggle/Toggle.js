import React, { useState } from 'react';
import logo from './logo.svg';
import './Toggle.css';

function Toggle() {
	const [toggle, setToggle] = useState(true)
	return (
		<div className="Toggle">
			<p>Make the logo show and disappear when clicking on the button.</p>
			<button onClick={() => { setToggle(!toggle) }}>Show / Hide</button>
			{toggle && <div className="Toggle__logo-wrapper">
				<img src={logo} alt="logo" />
			</div>}
		</div>
	)
}

export default Toggle;
