import { USER_LOGGED_IN } from '../actions/actionTypes';
const user = (state = {}, action = {}) => {
	switch (action.type) {
		case USER_LOGGED_IN:
			return {
				...state,
				user: action.user,
			};
		default:
			return state;
	}
};
export default user;
