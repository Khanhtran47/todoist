import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = firebase.initializeApp({
  apiKey: 'AIzaSyBAVULF6635kaTuYn2z0NcQGit03c8MCis',
  authDomain: 'todoist-db-bac6b.firebaseapp.com',
  projectId: 'todoist-db-bac6b',
  storageBucket: 'todoist-db-bac6b.appspot.com',
  messagingSenderId: '801749822611',
  appId: '1:801749822611:web:028973e9a7e6d0cba7b166',
});

export { firebaseConfig as firebase };
