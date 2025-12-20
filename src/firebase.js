// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage"; // <-- add this

const firebaseConfig = {
  apiKey: "AIzaSyAZmcZBT8ZUl2eBVvtIjiUy68hd3JDTZSM",
  authDomain: "sasuke-reviews.firebaseapp.com",
  projectId: "sasuke-reviews",
  storageBucket: "sasuke-reviews.appspot.com", // make sure this is correct
  messagingSenderId: "683326347794",
  appId: "1:683326347794:web:29a6e72f15676aae1156cb",
  measurementId: "G-G58FT21685"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export Firestore, Auth, Storage
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app); // <-- export storage
