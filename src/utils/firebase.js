
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyCxyyX9zV7Bij9p4dCpYlqXTCc81Fdc2Ms",
    authDomain: "my-first-project-7a53e.firebaseapp.com",
    databaseURL: "https://my-first-project-7a53e-default-rtdb.firebaseio.com",
    projectId: "my-first-project-7a53e",
    storageBucket: "my-first-project-7a53e.appspot.com",
    messagingSenderId: "1098543569516",
    appId: "1:1098543569516:web:cf053ddb3557b6cb441649",
    measurementId: "G-8TN4GJ2FZG"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

