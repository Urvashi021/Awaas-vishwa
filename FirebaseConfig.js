// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getStorage} from "firebase/storage";      //New
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBShmrffj0-VD9C2lQhXLFokYtyrqv5R4s",
  authDomain: "awaas-vishwa-e2a33.firebaseapp.com",
  projectId: "awaas-vishwa-e2a33",
  storageBucket: "awaas-vishwa-e2a33.appspot.com",
  messagingSenderId: "862006789774",
  appId: "1:862006789774:web:d80f5f02a70dfbb31febdf",
  measurementId: "G-G4T6PEPR1X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const storage = getStorage(app);      // New