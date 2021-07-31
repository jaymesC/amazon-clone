// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDURQFjrjlzEEN-tvOajK93_TnIaLGv-KM",
  authDomain: "clone-c5acd.firebaseapp.com",
  projectId: "clone-c5acd",
  storageBucket: "clone-c5acd.appspot.com",
  messagingSenderId: "398556966049",
  appId: "1:398556966049:web:186e0a418841a8327694e0",
  measurementId: "G-6Z42HD1WD1"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };