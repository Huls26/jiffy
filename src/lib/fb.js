import { initializeApp } from "firebase/app";
import {
  FieldValue,
  connectFirestoreEmulator,
  getFirestore,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FBK_KEY,
  authDomain: import.meta.env.VITE_FBK_AUTHDOMAIN,
  projectId: import.meta.env.VITE_PROJECTID,
  storageBucket: import.meta.env.VITE_STORAGEBUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGINGSENDERID,
  appId: import.meta.env.VITE_APPID,
  measurementId: import.meta.env.VITE_MEASUREMENTID,
};

// Initialize Firebase app
const app = initializeApp(firebaseConfig);

//firestore
const db = getFirestore(app);
// for firestore emulator
connectFirestoreEmulator(db, "127.0.0.1", 8080);

export { app, FieldValue, db };
