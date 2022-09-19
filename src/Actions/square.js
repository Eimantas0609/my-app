import { ADD_SQ, REM_SQ } from '../Constants/actions';

export function addSq() {
	return {
		type: ADD_SQ,
	};
}

export function remSq() {
	return {
		type: REM_SQ,
	};
}
