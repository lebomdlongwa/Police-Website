// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCNJ7v7Ydi9H7_b39gEdFb8VnD3hoPl7yY",
  authDomain: "report-app-5e571.firebaseapp.com",
  projectId: "report-app-5e571",
  storageBucket: "report-app-5e571.firebasestorage.app",
  messagingSenderId: "318926166465",
  appId: "1:318926166465:web:6aebe2de0a01efe0c7f740",
  measurementId: "G-J55ZHE357D",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
