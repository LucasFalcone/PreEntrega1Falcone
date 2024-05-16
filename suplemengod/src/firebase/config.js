// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD_U3ePITbSJV4Y_jEkhHxFfULPuLXfZ7U",
  authDomain: "suplemengod.firebaseapp.com",
  projectId: "suplemengod",
  storageBucket: "suplemengod.appspot.com",
  messagingSenderId: "863000860498",
  appId: "1:863000860498:web:ec81c8d7a6bf153a084c8b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);