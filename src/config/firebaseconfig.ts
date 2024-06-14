// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyChUpQK8iONiX89acLfIRr9h8bOGwL7Auk",
  authDomain: "react-first-f0ef6.firebaseapp.com",
  databaseURL: "https://react-first-f0ef6-default-rtdb.firebaseio.com",
  projectId: "react-first-f0ef6",
  storageBucket: "react-first-f0ef6.appspot.com",
  messagingSenderId: "843831688839",
  appId: "1:843831688839:web:12656169d353c312388222",
  measurementId: "G-Y9KNT3XSH1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app;
