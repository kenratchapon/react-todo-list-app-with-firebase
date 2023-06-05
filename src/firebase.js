// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCb8rzYPXj2TCGOZi-BA9OoEwiD11tu17o",
  authDomain: "todolist-app-with-firebase.firebaseapp.com",
  projectId: "todolist-app-with-firebase",
  storageBucket: "todolist-app-with-firebase.appspot.com",
  messagingSenderId: "55018576846",
  appId: "1:55018576846:web:e7bd4eb71c26c9c3d9e99f",
  measurementId: "G-22C8XV8CY8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app)
