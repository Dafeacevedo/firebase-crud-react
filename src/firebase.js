import firebase from "firebase/app";
import 'firebase/firestore'

var firebaseConfig = {
  apiKey: "AIzaSyDHBA0NCcMLlk9OnDDdK3xsK9XvS0b2bGg",
  authDomain: "fb-crud-react-aa903.firebaseapp.com",
  projectId: "fb-crud-react-aa903",
  storageBucket: "fb-crud-react-aa903.appspot.com",
  messagingSenderId: "948244978295",
  appId: "1:948244978295:web:d228bffebe1be4bce7c472",
};
// Initialize Firebase
const fb = firebase.initializeApp(firebaseConfig);
export const db= fb.firestore();
