import ReduxSagaFirebase from 'redux-saga-firebase';
import firebase from 'firebase/app';
import 'firebase/firestore';

// My web app's Firebase configuration
const firebaseApp = firebase.initializeApp({
	apiKey: 'AIzaSyANfPoLAZdSOkhS1WxBKf9CvLrnOXKq1Y4',
	authDomain: 'saga-of-ducks.firebaseapp.com',
	databaseURL: 'https://saga-of-ducks.firebaseio.com',
	projectId: 'saga-of-ducks',
	storageBucket: 'saga-of-ducks.appspot.com',
	messagingSenderId: '341655705233',
	appId: '1:341655705233:web:5fc05b045bff0d046d1130',
	measurementId: 'G-2NFVJ7RVPT',
});

const rsFirebase = new ReduxSagaFirebase(firebaseApp);

export default rsFirebase;
