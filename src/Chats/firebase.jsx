import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDf31Y3rfkWSuffILSGVIRMMFYfx7BG0ig",
  authDomain: "doubtaway-797e8.firebaseapp.com",
  projectId: "doubtaway-797e8",
  storageBucket: "doubtaway-797e8.appspot.com",
  messagingSenderId: "389805152949",
  appId: "1:389805152949:web:f1bbed6e3f249b9cf1bcfc"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
