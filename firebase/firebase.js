// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import  { getFirestore } from "firebase/firestore";
import  { getStorage } from "firebase/storage";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD3-SWsPBQF4FeLQ3v8Zv7r-H3mHBiIsso",
  authDomain: "restapi-60745.firebaseapp.com",
  projectId: "restapi-60745",
  storageBucket: "restapi-60745.appspot.com",
  messagingSenderId: "615781086545",
  appId: "1:615781086545:web:ffa9a730f2b1db2f2d4f70"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore();

export const storage = getStorage();
