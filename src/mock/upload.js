import MOCK_DATA from './data.json' assert { type: 'json'}
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { addDoc, collection, doc, getFirestore } from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDHAw4ZWBGx50FMFOyQ_lWVFi9GRxfpSXU",
  authDomain: "proyecto-rj-base-de-datos.firebaseapp.com",
  projectId: "proyecto-rj-base-de-datos",
  storageBucket: "proyecto-rj-base-de-datos.appspot.com",
  messagingSenderId: "689160196816",
  appId: "1:689160196816:web:94c17f34d3641f37ad04d5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
const productosRef = collection(db, 'productos')

MOCK_DATA.forEach(item =>{
    delete item.id
    addDoc(productosRef, item)
})