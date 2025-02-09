import { db } from '@/lib/fb';
import { collection, limit, onSnapshot, orderBy, query } from "firebase/firestore";
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

/**
 * Custom hook to fetch and listen for real-time updates on user posts.
 * The hook accepts search parameters to filter posts based on "likes" or "following".
 *
 * @returns {Array} An array containing the user posts fetched from Firestore.
 */
export default function useRealtimeUserPosts() {
  // State variable to store the user posts snapshot
  const [userPosts, setUserPostsSnapshot] = useState(null);
  // Use the useSearchParams hook from react-router-dom to access search parameters
  const [searchParams] = useSearchParams();

  useEffect(() => {
    // Function to create a query based on the search parameters
    function queryFilter() {
      switch (searchParams.get("filter")) {
        case "likes":
          // Query to fetch posts sorted by likes in descending order
          return query(collection(db, "userPosts"), orderBy("likes", "desc"));
        case "following":
          // Query to fetch posts from followed users, sorted by date created in descending order, limited to 10 posts
          return query(
            collection(db, "userPosts"),
            orderBy('dateCreated', 'desc'),
            limit(10));
        default:
          // Default query to fetch all posts, sorted by date created in descending order, limited to 10 posts
          return query(
            collection(db, "userPosts"),
            orderBy('dateCreated', 'desc'),
            limit(10)
          );
      }
    }

    // Create a query using the queryFilter function
    const myQuery = queryFilter();
    // Listen for real-time updates using the query
    const unsubscribe = onSnapshot(myQuery, (snapshot) => {
      if (snapshot.empty) {
        setUserPostsSnapshot([]);
      } else {
        const posts = snapshot.docs.map((doc) => ({
          ...doc.data(),
          postId: doc.id, // Use document ID as postId
        }));
        setUserPostsSnapshot(posts);
      }
      // for (const change of snapshot.docChanges()) {
      //   if (change.type === "added") {
      //     setUserPostsSnapshot((prevDocs) => [change.doc, ...prevDocs]); // Save document data
      //     console.log("New document added: ", change.doc.data());
      //   } else if (change.type === "modified") {
      //     console.log("Document modified: ", change.doc.data());
      //     // Update logic for modified documents, if needed
      //   } else if (change.type === "removed") {
      //     console.log("Document removed: ", change.doc.data());
      //     // Update logic for removed documents, if needed
      //   }
      // }
    });

    // Clean up the listener on component unmount or dependency change
    return () => {
      unsubscribe();
    };
  }, [searchParams]);

  return (
    userPosts
  )
}
