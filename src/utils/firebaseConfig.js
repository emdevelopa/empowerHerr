import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBgcUhozWi7KQJQlEcyUZklyieSXMavSM8",
  authDomain: "ngoo-8d665.firebaseapp.com",
  projectId: "ngoo-8d665",
  storageBucket: "ngoo-8d665.firebasestorage.app",
  messagingSenderId: "748880513131",
  appId: "1:748880513131:web:2f90d695b4069bfac5492e",
  measurementId: "G-T61MKBVGFJ",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
