import { put, takeEvery, call } from 'redux-saga/effects';
import rsFirebase from '../../rsFirebase';
import actions, { registerUserError } from './actions';
import types from './consts';

export function* registerUser() {
	try {
		const snapshot = yield call(
			rsFirebase.firestore.getDocument,
			'users/ksBjK7zqbTFlwat96RTt',
		);

		yield put(actions.registerUserSuccess());
		console.log(snapshot.data());
	} catch (err) {
		console.log(err);

		yield put(actions.registerUserError(err.message));
	}
}

export function* watchRegisterUserAsync() {
	yield takeEvery(types.REGISTER_REQUEST, registerUser);
}

export function* watchRegisterUserErrorAsync() {
	yield takeEvery(types.REGISTER_ERROR, registerUserError);
}

export default [watchRegisterUserAsync, watchRegisterUserErrorAsync];
