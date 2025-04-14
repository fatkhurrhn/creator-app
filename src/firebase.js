import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore";
import { getAuth } from "firebase/auth"; // Tambahkan ini

const firebaseConfig = {
  apiKey: "AIzaSyBJCuaD9XZ80_L8mfzZA9jPuW9cI25-J94",
  authDomain: "quote-app-3e01f.firebaseapp.com",
  projectId: "quote-app-3e01f",
  storageBucket: "quote-app-3e01f.firebasestorage.app",
  messagingSenderId: "1009969715759",
  appId: "1:1009969715759:web:17f1a3b7ac69b9a14904da"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const quotesCollection = collection(db, "quotes");
export const auth = getAuth(app); // Export auth


