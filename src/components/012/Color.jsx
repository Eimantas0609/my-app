import { useState, useEffect } from 'react';
import randColor from '../../Functions/randColor';

function Color() {
	const [cl, setCl] = useState(null);

	useEffect(() => {
		const data = localStorage.getItem('kv');
		if (null === data) {
			setCl(randColor());
		} else {
			setCl(JSON.parse(data));
		}
	}, []);

	useEffect(() => {
		if (null === cl) {
			return;
		}
		localStorage.setItem('kv', JSON.stringify(cl));
	}, [cl]);

	return (
		<>
			<div className="container">
				<div style={{ background: cl }}></div>
			</div>
			<button onClick={() => setCl(randColor())}>color</button>
		</>
	);
}

export default Color;
