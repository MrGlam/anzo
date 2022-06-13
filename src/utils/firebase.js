import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { doc, getDoc } from "firebase/firestore";
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import "firebase/compat/storage";










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

const mainPhotoPath = "88GmbvxLNFH3TxOw7iCU"
const allAltPhotosPath = "0KndNbxQ4wdQ05Donnq3"

firebase.initializeApp(firebaseConfig);
const projectStorage = firebase.storage();
const projectFireStore = firebase.firestore();
const timestemp = firebase.firestore.FieldValue.serverTimestamp;







export async function  fetchAnzoMainPhoto  ()  {
  const docRef = doc(db, "anzoPhotos",mainPhotoPath);
  const docSnap = await getDoc(docRef);
  const picDetails = docSnap.data()
  const mainPohtoCard ={
    imageUrl:picDetails.mainPhoto.url,
    cardTital:picDetails.mainPhoto.titel,
    cardContent:picDetails.mainPhoto.content
  }
  
  return (mainPohtoCard)
}

export async function  fetchAnzoAlternativesPhoto  ()  {
  const docRef = doc(db, "anzoPhotos",allAltPhotosPath);
  const docSnap = await getDoc(docRef);
  const picDetails = docSnap.data().anzoAlternativePics
  return picDetails
}




export { projectStorage, projectFireStore,timestemp};






