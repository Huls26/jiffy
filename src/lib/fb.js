import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { addDoc, collection } from "firebase/firestore";

console.log(import.meta.env);

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FBK_KEY,
  authDomain: import.meta.env.VITE_FBK_AUTHDOMAIN,
  projectId: import.meta.env.VITE_PROJECTID,
  storageBucket: import.meta.env.VITE_STORAGEBUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGINGSENDERID,
  appId: import.meta.env.VITE_APPID,
  measurementId: import.meta.env.VITE_MEASUREMENTID,
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default app;
export { db };

try {
  async function addDocument() {
    const docRef = await addDoc(collection(db, "cities"), {
      name: "Tokyo",
      country: "Japan",
    });
    console.log("Document written with ID: ", docRef.id);
  }
  // addDocument();
} catch (e) {
  console.error("Error adding document: ", e);
}
