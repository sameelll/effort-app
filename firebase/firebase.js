// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDKNToTlydCQH-SFnzc8R-XTnnkkMkkwiw",
  authDomain: "effort-app-89a2a.firebaseapp.com",
  projectId: "effort-app-89a2a",
  storageBucket: "effort-app-89a2a.appspot.com",
  messagingSenderId: "896911819964",
  appId: "1:896911819964:web:cef71a3054a5995c053cb9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default getFirestore();