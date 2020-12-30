import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = firebase.initializeApp({
  apiKey: "AIzaSyC4uQr9SO2r9YaIdSNbUWCax_vfkCHVFHg",
  authDomain: "todoist-app-a4e98.firebaseapp.com",
  databaseURL: "https://todoist-app-a4e98-default-rtdb.firebaseio.com",
  projectId: "todoist-app-a4e98",
  storageBucket: "todoist-app-a4e98.appspot.com",
  messagingSenderId: "152324097325",
  appId: "1:152324097325:web:13542cd1275c36e4f9ffa4",
});

export { firebaseConfig as firebase };
