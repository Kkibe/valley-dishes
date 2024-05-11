// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {

  apiKey: "AIzaSyBQrZHsjg7EfD-6pVmRWmj6wvwluim4T2Q",

  authDomain: "valley-dishes.firebaseapp.com",

  projectId: "valley-dishes",

  storageBucket: "valley-dishes.appspot.com",

  messagingSenderId: "894065312920",

  appId: "1:894065312920:web:febbae192c603cbc48fced",

  measurementId: "G-QM7HDTFCZK"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);