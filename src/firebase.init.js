// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAEfTedCY5rfLGq0VEhfnZqv3w-ye0wS-A",
  authDomain: "react-visa-agency.firebaseapp.com",
  projectId: "react-visa-agency",
  storageBucket: "react-visa-agency.appspot.com",
  messagingSenderId: "175208401325",
  appId: "1:175208401325:web:ae24a27bff914223743924"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;