import { LOGIN, LOGOUT } from "./constants";

const initialUserState = {
	token: null,
}

export const userReducer = (state = initialUserState, action) => {
	switch (action.type) {
		case LOGIN:
			return {
				...state,
				token: action.token,
			}
		case LOGOUT:
			return initialUserState;
		default:
			return state
	}
}
