import firebase from 'firebase';
import dotenv from "dotenv";

dotenv.config();


const firebaseConfig = {
    apiKey: "AIzaSyABUsZ7DsrieZ7NbbjUlGsybsHzcp0WDlU",
    authDomain: "hieuflix-aa48f.firebaseapp.com",
    projectId: "hieuflix-aa48f",
    storageBucket: "hieuflix-aa48f.appspot.com",
    messagingSenderId: "738592301419",
    appId: "1:738592301419:web:9da3da0841302bc4bfac2e"
  };

firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();

export default storage;