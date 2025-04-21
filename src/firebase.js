import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBfOtl2xzd3CMK2-lCWHpf9q9Lvn5yxNA8",
  authDomain: "esp32-17d6e.firebaseapp.com",
  projectId: "esp32-17d6e",
  storageBucket: "esp32-17d6e.firebasestorage.app",
  messagingSenderId: "756996340127",
  appId: "1:756996340127:web:ff98ba30df010d4c8fe5aa",
  measurementId: "G-2V3MHJW87R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { db, auth, googleProvider };