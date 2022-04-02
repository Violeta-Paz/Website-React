import { initializeApp } from "firebase/app";
//import firebase from "firebase/compat/app";
//import {getFirestore} from 'firebase/firestore'
//import 'firebase/compat/auth';
import {getAuth} from 'firebase/auth'


const firebaseConfig = {
    apiKey: "",
    authDomain: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: "",
    measurementId: ""
};


export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
//export const db = getFirestore(app); 
//export  const auth = firebase.auth();

//export default firebaseConfig;

