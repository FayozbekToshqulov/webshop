import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCoXduzFDaNNXivbfTBLPvl7oFPAAGg0kc",
  authDomain: "signupin-eaf42.firebaseapp.com",
  projectId: "signupin-eaf42",
  storageBucket: "signupin-eaf42.appspot.com",
  messagingSenderId: "118571623597",
  appId: "1:118571623597:web:fff7db8d74069c60cfd224",
  measurementId: "G-D3G1DN3M4T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
