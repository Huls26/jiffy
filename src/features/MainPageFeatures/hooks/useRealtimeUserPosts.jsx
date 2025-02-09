import { db } from '@/lib/fb';
import { collection, limit, onSnapshot, orderBy, query } from "firebase/firestore";
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

export default function useRealtimeUserPosts() {
  const [userPosts, setUserPostsSnapshot] = useState(null);
  const [searchParams] = useSearchParams();

  useEffect(() => {
    // Create a query defending on the search parameters
    function queryFilter() {
      switch (searchParams.get("filter")) {
        case "likes":
          return query(collection(db, "userPosts"), orderBy("likes", "desc"));
        case "following":
          return query(
            collection(db, "userPosts"),
            orderBy('dateCreated', 'desc'),
            limit(10));
        default:
          return query(
            collection(db, "userPosts"),
            orderBy('dateCreated', 'desc'),
            limit(10)
          );
      }
    }

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
