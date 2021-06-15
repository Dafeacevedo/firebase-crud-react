import firebase from "firebase/app";
import 'firebase/firestore'


// Initialize Firebase
const fb = firebase.initializeApp(firebaseConfig);
export const db= fb.firestore();
