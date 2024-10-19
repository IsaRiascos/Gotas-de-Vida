// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDpJTdcVIAqZiPxBEBj62XmQE78Wz1aC_Y",
    authDomain: "gotasdevida-d98b3.firebaseapp.com",
    projectId: "gotasdevida-d98b3",
    storageBucket: "gotasdevida-d98b3.appspot.com",
    messagingSenderId: "927188127563",
    appId: "1:927188127563:web:548690d7e9a0e59b7ae2ce",
    measurementId: "G-86BRWXV694",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth (app);
const db = getFirestore (app);
export { auth, db }
