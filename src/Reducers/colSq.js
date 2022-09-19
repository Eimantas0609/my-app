import ColorSquares from '../Components/016/ColorSquares';
import { COL_SQ } from '../Constants/actions';

function colSq(state, action) {
	const newState = { ...state };

	switch (action.type) {
		case COL_SQ:
			newState.color = newState.color === 3 ? 1 : newState.color;
			break;
		default:
	}
	return newState;
}

export default colSq;
