import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // Import getFirestore

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB3qhkXEPO9i85B12M3ovM7S-xJrDOTVr8",
    authDomain: "sane-rk9.firebaseapp.com",
    projectId: "sane-rk9",
    storageBucket: "sane-rk9.firebasestorage.app",
    messagingSenderId: "135964554670",
    appId: "1:135964554670:web:59a0337819a7568326443f",
    measurementId: "G-PFLYCC4SF2"
  };
  

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Get Firestore instance
export const db = getFirestore(app);