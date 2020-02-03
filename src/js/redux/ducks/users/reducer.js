import types from './consts';

const INITIAL_STATE = {
	registerSuccess: false,
	error: null,
	loading: false,
};

const users = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case types.REGISTER_REQUEST:
			return {
				...state,
				loading: true,
			};
		case types.REGISTER_SUCCESS:
			return {
				...state,
				registerSuccess: true,
				loading: false,
			};
		case types.REGISTER_ERROR:
			return {
				...state,
				error: action.payload,
				loading: false,
			};
		default:
			return state;
	}
};

export default users;
