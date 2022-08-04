
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import {

    
    getAuth
} from "firebase/auth";



const firebaseConfig = {

    apiKey: "AIzaSyDVvFDUVP-ozWOy4s9Mub0b2MEy4xFPoug",

    authDomain: "travel-agency-backend-43ee9.firebaseapp.com",

    projectId: "travel-agency-backend-43ee9",

    storageBucket: "travel-agency-backend-43ee9.appspot.com",

    messagingSenderId: "155914377019",

    appId: "1:155914377019:web:e351f02dc0122c5d76c91e",

    measurementId: "G-T2W71CMYG1"

};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);


export const db = getFirestore(app);
