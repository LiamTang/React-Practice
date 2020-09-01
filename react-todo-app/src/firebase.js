import firebase from 'firebase';

const API_KEY = process.env.API_KEY;
const firebaseApp = firebase.initializeApp({
  apiKey: `${API_KEY}`,
  authDomain: 'react-todo-app-40f47.firebaseapp.com',
  databaseURL: 'https://react-todo-app-40f47.firebaseio.com',
  projectId: 'react-todo-app-40f47',
  storageBucket: 'react-todo-app-40f47.appspot.com',
  messagingSenderId: '5158361633',
  appId: '1:5158361633:web:61efbda6b2b2359bc66160',
  measurementId: 'G-9GVRCFVVKF',
});

const db = firebaseApp.firestore();

export default db;
