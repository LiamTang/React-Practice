// config
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: process.env.API_KEY,
  authDomain: "messenger-clone-app-1b1ab.firebaseapp.com",
  databaseURL: "https://messenger-clone-app-1b1ab.firebaseio.com",
  projectId: "messenger-clone-app-1b1ab",
  storageBucket: "messenger-clone-app-1b1ab.appspot.com",
  messagingSenderId: "42313561390",
  appId: "1:42313561390:web:a530f80470d36af1a676bf",
  measurementId: "G-N852J5TG4S",
});

const db = firebaseApp.firestore();

export default db; //the same as export {db}
