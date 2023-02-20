// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC4qiUSslSq3ENYzGsJjt56isd51W9As-Y",
    authDomain: "house-market-d50fc.firebaseapp.com",
    projectId: "house-market-d50fc",
    storageBucket: "house-market-d50fc.appspot.com",
    messagingSenderId: "362404011496",
    appId: "1:362404011496:web:31c3e06b94bd4043c1985d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore();

