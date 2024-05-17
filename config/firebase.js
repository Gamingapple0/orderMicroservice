const { getFirestore } = require("firebase/firestore");
const { initializeApp } = require("firebase/app");

const firebaseConfig = {
    apiKey: process.env.FIREBASE_KEY,
    authDomain: "corbett-jewelry.firebaseapp.com",
    projectId: "corbett-jewelry",
    storageBucket: "corbett-jewelry.appspot.com",
    messagingSenderId: "963640321962",
    appId: "1:963640321962:web:d57f51c96ead5d20362dd3"
  };
    
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  
  module.exports = {
    db: db,
    app:app
  };