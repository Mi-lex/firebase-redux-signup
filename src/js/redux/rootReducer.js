import { combineReducers } from 'redux';
import users from './ducks/users/reducer';

const rootReducer = combineReducers({
	users
});

export default rootReducer;
