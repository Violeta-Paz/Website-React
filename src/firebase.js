import { initializeApp } from "firebase/app";
//import firebase from "firebase/compat/app";
//import {getFirestore} from 'firebase/firestore'
//import 'firebase/compat/auth';
import {getAuth} from 'firebase/auth'


const firebaseConfig = {
    apiKey: "AIzaSyAALTcMYF7Uwc3kvW6nOOsno6Bu9sDmwQY",
    authDomain: "wr-website-f68a6.firebaseapp.com",
    projectId: "wr-website-f68a6",
    storageBucket: "wr-website-f68a6.appspot.com",
    messagingSenderId: "239258557964",
    appId: "1:239258557964:web:eb0877e20bc5df512d9829",
    measurementId: "G-ZET0F5FGGY"
};


export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
//export const db = getFirestore(app); 
//export  const auth = firebase.auth();

//export default firebaseConfig;

