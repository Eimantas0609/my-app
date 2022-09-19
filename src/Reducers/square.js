import { ADD_SQ, REM_SQ } from '../Constants/actions';
import randColor from '../Functions/randColor';
import rand from '../Functions/rand';

function square(state, action) {
	let newState = { ...state };

	switch (action.type) {
		case ADD_SQ:
			newState.push('');
			break;
		case REM_SQ:
			newState.shift();
			break;
		default:
	}
	return newState;
}
export default square;
