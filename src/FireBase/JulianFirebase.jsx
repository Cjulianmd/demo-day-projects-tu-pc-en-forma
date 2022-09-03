// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {GoogleAuthProvider} from "firebase/auth"
import { FacebookAuthProvider } from 'firebase/auth';
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBYO_DrsNqce-na6zPWE2MHD4UnrYleJOI",
  authDomain: "fir-day-44fe6.firebaseapp.com",
  projectId: "fir-day-44fe6",
  storageBucket: "fir-day-44fe6.appspot.com",
  messagingSenderId: "611996183589",
  appId: "1:611996183589:web:8c3b4d54a410f42dbda3cc",
  measurementId: "G-5JCJM2VM0P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const google = new GoogleAuthProvider();
const face = new FacebookAuthProvider();
const db = getFirestore(app);
export {
  app,
  google,
  face,
  db
}