// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCoujFheSOQK2oXWhMHkJMClFyR56tY9EY",
  authDomain: "netflixclone-8f160.firebaseapp.com",
  projectId: "netflixclone-8f160",
  storageBucket: "netflixclone-8f160.appspot.com",
  messagingSenderId: "3625314185",
  appId: "1:3625314185:web:61354dd9ed347998392358",
  measurementId: "G-TT2WYGG6HJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);