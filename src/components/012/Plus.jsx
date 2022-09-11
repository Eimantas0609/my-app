import { useState, useEffect } from 'react';

function Plus() {
	const [pl, setPl] = useState(null);

	useEffect(() => {
		const data = localStorage.getItem('kv');
		if (null === data) {
			setPl('');
		} else {
			setPl(JSON.parse(data));
		}
	}, []);

	useEffect(() => {
		if (null === pl) {
			return;
		}
		localStorage.setItem('kv', JSON.stringify(pl));
	}, [pl]);

	return (
		<>
			<div className="container">
				<h1>{pl}</h1>
			</div>
			<button onClick={() => setPl((k) => k + '+')}>Add</button>
		</>
	);
}

export default Plus;
