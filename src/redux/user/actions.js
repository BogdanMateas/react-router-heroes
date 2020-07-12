import { LOGIN, LOGOUT } from "./constants";

export const userLogin = () => {
	return {
		type: LOGIN,
		userData: {}
	}
}
