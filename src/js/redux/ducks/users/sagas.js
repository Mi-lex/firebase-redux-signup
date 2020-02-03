import { put, takeEvery, call } from 'redux-saga/effects';
import rsFirebase from '../../rsFirebase';
import actions from './actions';
import types from './consts';

export function* registerUser(action) {
	try {
		yield call(rsFirebase.firestore.addDocument, 'users', action.payload);
		yield put(actions.registerUserSuccess());
	} catch (err) {
		yield put(actions.registerUserError(err.message));
	}
}

export function* watchRegisterUserAsync() {
	yield takeEvery(types.REGISTER_REQUEST, registerUser);
}

export default [watchRegisterUserAsync];
