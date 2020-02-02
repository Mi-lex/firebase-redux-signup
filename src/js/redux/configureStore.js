import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './ducks/rootReducer';

const configureStore = () => {
	const sagaMiddleware = createSagaMiddleware();
	const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

	return store;
};

export default configureStore;
