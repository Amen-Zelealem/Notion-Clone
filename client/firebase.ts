import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBiOBgUHvnooOahTiRj6n2PiMrGDEfv4WA",
  authDomain: "notion-clone-e2878.firebaseapp.com",
  projectId: "notion-clone-e2878",
  storageBucket: "notion-clone-e2878.firebasestorage.app",
  messagingSenderId: "186995251291",
  appId: "1:186995251291:web:18ae6892fd1502c9f0477e",
};

// Initialize Firebase
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();

const db = getFirestore(app);

export { db };
