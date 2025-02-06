import { doc, getDoc } from "firebase/firestore";
import { db } from "@/lib/fb";

import { useEffect, useState } from "react";

export default function useFetchUserData(userId) {
  const [userInfo, setUserInfo] = useState({});

  useEffect(() => {
    if (!userId) return; // Prevent fetching if userId is missing

    async function fetchUserData() {
      try {
        const docRef = doc(db, "users", userId); // Create a reference to the user document in the database
        const docSnap = await getDoc(docRef); // Fetch the document snapshot

        // Check if the document exists
        if (docSnap.exists()) {
          // If it exists, set the user info state with the document data
          setUserInfo(docSnap.data());
        } else {
          // If it doesn't exist, log an error and set the user info state to an empty object
          console.error("No such document!");
          setUserInfo({});
        }
      } catch (error) {
        // Catch and log any errors that occur during the fetch operation
        console.error("Error fetching user data:", error);
        // Set the user info state to an empty object in case of an error
        setUserInfo({});
      }
    }

    // Call the fetchUserData function to fetch the user data
    fetchUserData();
  }, [userId]); // Runs when userId changes

  return (
    userInfo
  )
}
