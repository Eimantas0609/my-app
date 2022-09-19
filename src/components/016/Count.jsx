import { useReducer } from 'react';
import {
	add1,
	add2,
	add5,
	randC,
	rem1,
	rem2,
	rem5,
	randF,
	border,
} from '../../Actions/count';
import count from '../../Reducers/count';

function Count() {
	const [counter, dispachCounter] = useReducer(count, {
		number: 0,
		color: '#54aaaa',
		fontSize: '20px',
		border: false,
	});

	return (
		<>
			<h2
				style={{
					color: counter.color,
					fontSize: counter.fontSize,
					border: counter.border ? '1px solid crimson' : null,
				}}
			>
				{counter.number}
			</h2>
			<div className="container">
				<button onClick={() => dispachCounter(add1())}>+1</button>
				<button onClick={() => dispachCounter(rem1())}>-1</button>
				<button onClick={() => dispachCounter(add2())}>+2</button>
				<button onClick={() => dispachCounter(rem2())}>-2</button>
				<button onClick={() => dispachCounter(add5())}>+5</button>
				<button onClick={() => dispachCounter(rem5())}>-5</button>
				<button onClick={() => dispachCounter(randC())}>Color</button>
				<button onClick={() => dispachCounter(randF())}>Font 20-100</button>
				<button onClick={() => dispachCounter(border())}>Border</button>
			</div>
		</>
	);
}

export default Count;
