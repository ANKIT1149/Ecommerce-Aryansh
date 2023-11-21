// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getAuth} from "firebase/auth"
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA4NPZhZCOU-8n9HNXT_7a_1JHod0htqMg",
  authDomain: "ecommerce-1768c.firebaseapp.com",
  projectId: "ecommerce-1768c",
  storageBucket: "ecommerce-1768c.appspot.com",
  messagingSenderId: "437684392785",
  appId: "1:437684392785:web:ebfaef3c61cbc003367970"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);
const auth = getAuth(app)
export {fireDB,auth } ;