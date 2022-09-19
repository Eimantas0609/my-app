import { ADD_TWO, REMOVE_TWO } from '../Constants/actions';

export function add2() {
	return {
		type: ADD_TWO,
	};
}

export function rem2() {
	return {
		type: REMOVE_TWO,
	};
}
