import { useReducer } from 'react';
import { add2, rem2 } from '../../Actions/pairCount';
import pairCount from '../../Reducers/pairCount';

function PairCount() {
	const [counter, dispachCounter] = useReducer(pairCount, {
		number: 0,
	});

	return (
		<>
			<h2>{counter.number}</h2>
			<div className="container">
				<button onClick={() => dispachCounter(add2())}>+2</button>
				<button onClick={() => dispachCounter(rem2())}>-2</button>
			</div>
		</>
	);
}

export default PairCount;
