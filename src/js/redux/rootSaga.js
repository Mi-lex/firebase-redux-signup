import { fork, all } from 'redux-saga/effects';

import usersSagas from './ducks/users/sagas';

const allSagas = [...usersSagas ];

export default function* rootSaga() {
	yield all(allSagas.map((saga) => fork(saga)));
}
