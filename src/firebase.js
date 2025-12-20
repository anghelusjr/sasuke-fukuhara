// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAZmcZBT8ZUl2eBVvtIjiUy68hd3JDTZSM",
  authDomain: "sasuke-reviews.firebaseapp.com",
  projectId: "sasuke-reviews",
  storageBucket: "sasuke-reviews.firebasestorage.app",
  messagingSenderId: "683326347794",
  appId: "1:683326347794:web:29a6e72f15676aae1156cb",
  measurementId: "G-G58FT21685"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);