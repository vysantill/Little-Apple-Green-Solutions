/*
Not in use, couldnt export data
*/

// Import the functions you need from the SDKs you need 

import { initializeApp } from "firebase/app"; 

import { getAnalytics } from "firebase/analytics"; 

// TODO: Add SDKs for Firebase products that you want to use 

// https://firebase.google.com/docs/web/setup#available-libraries 

 

// Your web app's Firebase configuration 

// For Firebase JS SDK v7.20.0 and later, measurementId is optional 

const firebaseConfig = { 

  apiKey: "AIzaSyCNsA_i85-6iHBiB7u05LzQzry89GqwUTY", 

  authDomain: "recyclingdirectory-3c41e.firebaseapp.com", 

  projectId: "recyclingdirectory-3c41e", 

  storageBucket: "recyclingdirectory-3c41e.firebasestorage.app", 

  messagingSenderId: "457002997529", 

  appId: "1:457002997529:web:6e542f6ed3369e7a79d788", 

  measurementId: "G-VRVTJ4Y24T" 

}; 

 

// Initialize Firebase 

const app = initializeApp(firebaseConfig); 

const analytics = getAnalytics(app); 
const db = getFirestore(app);
 

// Export db to use it elsewhere in your app 

export { db }; 