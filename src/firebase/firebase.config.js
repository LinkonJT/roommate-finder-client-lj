// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBv8vOXlVpo8zOOqdaDK2vDO365MXi8jEM",
  authDomain: "roommate-finder-website-f7f07.firebaseapp.com",
  projectId: "roommate-finder-website-f7f07",
  storageBucket: "roommate-finder-website-f7f07.firebasestorage.app",
  messagingSenderId: "787572303698",
  appId: "1:787572303698:web:1f6b5f1a6d3239c5e07c8b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);