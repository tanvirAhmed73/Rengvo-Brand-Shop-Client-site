// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA_zMyIMo_Z036SZT6Tb6jxWhnBhIWZg-g",
  authDomain: "brand-shop-60342.firebaseapp.com",
  projectId: "brand-shop-60342",
  storageBucket: "brand-shop-60342.appspot.com",
  messagingSenderId: "1064682880340",
  appId: "1:1064682880340:web:c70a755c6ac79076cb5cc1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;