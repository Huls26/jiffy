import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { addDoc, collection } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDpmIdoj8THgtb8g6jQx3OOKvmQU3DkM-s",
  authDomain: "jiffy-ver-2.firebaseapp.com",
  projectId: "jiffy-ver-2",
  storageBucket: "jiffy-ver-2.appspot.com",
  messagingSenderId: "7344292796",
  appId: "1:7344292796:web:8fe78c8304add4e97e61b9",
  measurementId: "G-BJPPB2E6P4",
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
