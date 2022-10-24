// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBiiKUx4YyJcnbr8PzXaIERoaOiJnYGlB4",
  authDomain: "studycation-589a3.firebaseapp.com",
  projectId: "studycation-589a3",
  storageBucket: "studycation-589a3.appspot.com",
  messagingSenderId: "387052884549",
  appId: "1:387052884549:web:1ca0cbfb6da31fed25092c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app