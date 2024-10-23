import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';
import 'firebase/firestore';
import { FieldValue } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyBHD-6qZtttt4ZHhVJrEdeFsCJTv4QTsYU",
  authDomain: "signalclonetest1.firebaseapp.com",
  projectId: "signalclonetest1",
  storageBucket: "signalclonetest1.appspot.com",
  messagingSenderId: "1084514490628",
  appId: "1:1084514490628:web:bf219e43186114a85ed851"
};

let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();

export { db, auth };
