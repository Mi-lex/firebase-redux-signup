import React from 'react';
import { Provider } from 'react-redux';
import store from '../redux/configureStore';

export default function App() {
	return (
		<Provider store={store}>
			<h1>Checking</h1>{' '}
		</Provider>
	);
}
