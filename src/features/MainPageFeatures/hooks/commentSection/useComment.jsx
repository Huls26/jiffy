import { db } from "@/lib/fb";
import { collection, onSnapshot, query, orderBy } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

/**
 * Custom React hook to fetch and manage comments for a specific post.
 * 
 * @returns {Object} An object containing the usersComment and commentSize.
 */
export default function useComment() {
  const [usersComment, setUsersComment] = useState([]);
  const [commentSize, setCommentSize] = useState("");
  const [searchParams] = useSearchParams(); // Get the URL search parameters
  const commentId = searchParams.get('comment'); // Get the comment ID from the URL

  useEffect(() => {
    function fetchUsersComment() {
      if (!commentId) return; // If no comment ID, do nothing

      // Create a query to fetch comments from Firestore, ordered by createdAt in descending order
      const q = query(collection(db, "userPosts", commentId, "comments"), orderBy("createdAt", "desc"));

      // Subscribe to real-time updates on the query
      const unsubscribe = onSnapshot(q, (querySnapshot) => {
        // Map the query snapshot to an array of comment objects and update the usersComment state
        setUsersComment(querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
        // Update the commentSize state with the total number of comments
        setCommentSize(querySnapshot.size)
      });

      return unsubscribe; // Return the unsubscribe function to clean up the listener when the component unmounts
    }

    // Fetch the users comment when the commentId changes
    const unsubscribe = fetchUsersComment();

    // Clean up the listener when the component unmounts
    return () => {
      if (unsubscribe) unsubscribe(); // Cleanup listener on unmount
    };
  }, [commentId]);

  // Return the usersComment and commentSize
  return (
    { usersComment, commentSize }
  )
}
