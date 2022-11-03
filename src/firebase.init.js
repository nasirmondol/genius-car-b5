// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA_3Jtgvvglf8Uz4-fX08QjsvMLNBoe5js",
  authDomain: "genius-car-mechanics-1995e.firebaseapp.com",
  projectId: "genius-car-mechanics-1995e",
  storageBucket: "genius-car-mechanics-1995e.appspot.com",
  messagingSenderId: "895300909598",
  appId: "1:895300909598:web:81d3f42b9d0d3a0c558c0f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;