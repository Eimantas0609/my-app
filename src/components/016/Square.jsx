import { useReducer } from 'react';
import { addSq, remSq } from '../../Actions/square';
import square from '../../Reducers/square';

function Square() {
	const [squares, dispachSquares] = useReducer(square);

	return (
		<>
			<div className="container">
				{squares.map((_, i) => (
					<div className="kv" key={i}></div>
				))}
			</div>
			<button onClick={() => dispachSquares(addSq())}>New Square</button>
			<button onClick={() => dispachSquares(remSq())}>Remove Square</button>
		</>
	);
}

export default Square;
