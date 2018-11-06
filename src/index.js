import React from 'react';
import ReactDOM from 'react-dom';

import SevenDeadlySins from './components/SevenDeadlySins';

import './styles.css';

function App() {
	return (
		<div className="App">
			<SevenDeadlySins />
		</div>
	);
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
