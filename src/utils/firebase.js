// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCFQv73eQUJFbMPwAszSH7LBuKuhxeV5TU",
  authDomain: "netflixgpt-ak.firebaseapp.com",
  projectId: "netflixgpt-ak",
  storageBucket: "netflixgpt-ak.appspot.com",
  messagingSenderId: "899711506085",
  appId: "1:899711506085:web:d7157c3cb1baf54acb5f4c",
  measurementId: "G-4J37TZ7S81"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();