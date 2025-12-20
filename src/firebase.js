// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your Firebase config (from Firebase console)
const firebaseConfig = {
  apiKey: "AIzaSyAZmcZBT8ZUl2eBVvtIjiUy68hd3JDTZSM",
  authDomain: "sasuke-reviews.firebaseapp.com",
  projectId: "sasuke-reviews",
  storageBucket: "sasuke-reviews.appspot.com",
  messagingSenderId: "683326347794",
  appId: "1:683326347794:web:29a6e72f15676aae1156cb",
  measurementId: "G-G58FT21685"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export Firestore and Auth correctly
export const db = getFirestore(app);
export const auth = getAuth(app);
