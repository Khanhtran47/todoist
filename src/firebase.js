import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = firebase.initializeApp({
  apiKey: 'AIzaSyC84zVK0D7MrRSw2DY2qO_SAa8WMjwebp4',
  authDomain: 'todoist-dbdd9.firebaseapp.com',
  databaseURL: 'https://todoist-dbdd9.firebaseio.com',
  projectId: 'todoist-dbdd9',
  storageBucket: 'todoist-dbdd9.appspot.com',
  messagingSenderId: '901967905499',
  appId: '1:901967905499:web:2af5d9a0ae4e8b851282fe',
  measurementId: 'G-9FJT16FF0Z',
});

export { firebaseConfig as firebase };
