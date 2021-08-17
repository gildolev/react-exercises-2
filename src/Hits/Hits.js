import React, { useState, useEffect } from 'react';
import './Hits.css';

function Hits() {
	const [hits, setHits] = useState([]);
	useEffect(() => {
		const URL = 'https://netcraft2.s3-eu-west-1.amazonaws.com/hits.json';
		fetch(URL)
			.then(results => results.json())
			.then(data => setHits(data));
	}, [])

	console.log(hits)
	return (

		<div className="Hits">
			<h3>Hits:</h3>
			<p>
				Use the following API to make a list of hit titles:<br />
				<code>https://netcraft2.s3-eu-west-1.amazonaws.com/hits.json</code>
			</p>
			<ul>
				{hits.map((hit, index) => (
					<li key={index}>{hit.title}</li>
				))}
			</ul>
		</div>
	)
}

export default Hits;
