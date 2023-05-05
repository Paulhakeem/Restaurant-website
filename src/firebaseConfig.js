
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBZqrIpa-bZflDQXoeu2yJPHW3G1oZJ4Cs",
  authDomain: "restaurant-website-357a3.firebaseapp.com",
  projectId: "restaurant-website-357a3",
  storageBucket: "restaurant-website-357a3.appspot.com",
  messagingSenderId: "1028635343078",
  appId: "1:1028635343078:web:38b2dfdecb4df133e7e327",
  measurementId: "G-1BFHLRJRG6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);