import { ADD_TWO, REMOVE_TWO } from '../Constants/actions';

function pairCount(state, action) {
	let newState = { ...state };
	switch (action.type) {
		case ADD_TWO:
			newState.number += 2;
			break;
		case REMOVE_TWO:
			newState.number -= 2;
			break;
		default:
	}

	return newState;
}

export default pairCount;
