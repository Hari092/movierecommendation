// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB9DGKgPq3bSHqs4FyCYmWllo209VhZVtc",
    authDomain: "netflixgpt-c4cef.firebaseapp.com",
    projectId: "netflixgpt-c4cef",
    storageBucket: "netflixgpt-c4cef.appspot.com",
    messagingSenderId: "689777098575",
    appId: "1:689777098575:web:45c71f5842369a1da38f3a",
    measurementId: "G-VEM3NMW4LB"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);


export const auth = getAuth(app);
