import React, { Fragment } from 'react';

function Sin(props) {
	return (
		<Fragment>
			<h3>{props.sin.name}</h3>
			<p>Identity: {props.sin.identity}</p>
			<p>Age: {props.sin.age}</p>
			<p>Best Friends: {props.sin.bestFriend}</p>
		</Fragment>
	);
}

export default Sin;
