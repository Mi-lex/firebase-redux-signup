import types from './consts';

export const registerUserRequest = (user) => ({
	type: types.REGISTER_REQUEST,
	payload: user,
});

export const registerUserSuccess = () => ({
	type: types.REGISTER_SUCCESS,
});

export const registerUserError = (error) => ({
	type: types.REGISTER_ERROR,
	payload: error,
});

export default {
	registerUserRequest,
	registerUserError,
	registerUserSuccess,
};
