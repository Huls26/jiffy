import MainPageFilterQuery from '../components/timeline/MainPageFilterQuery';
import MainPageUserProfileLink from '../components/userInfo/MainPageUserProfileLink';

import { db } from '@/lib/fb';
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { useEffect, useState } from 'react';

export default function MainPageTimeline() {
  const [userPosts, setUserPostsSnapshot] = useState([]);

  useEffect(() => {
    // Create a query with constraints
    const myQuery = query(
      collection(db, "userPosts"),
      orderBy('dateCreated', 'desc')
    );
    // Listen for real-time updates using the query
    const unsubscribe = onSnapshot(myQuery, (snapshot) => {

      if (snapshot.empty) {
        console.log("No matching documents.");
        return;
      }

      setUserPostsSnapshot((prevDoc) => [...snapshot.docChanges(), ...prevDoc,]);
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
  }, []);

  return (
    <main className="mt-1 pt-3 flex-1">
      <MainPageFilterQuery />

      {userPosts?.map((u) => {
        const userPost = u.doc.data();
        console.log(userPost)
        return (
          <div
            key={userPost.postId}
            className='min-w-[270px] max-w-xl m-auto border-2 border-black'
          >
            <MainPageUserProfileLink />
            <h1 className='ml-1 text-left text-gray-100 sm:text-xl'>{userPost.textContent}</h1>
            <img
              src={userPost.content}
              alt={`users post text content ${userPost.textContent}`}
            />
          </div>);
      })}

      {
        userPosts?.length === 0
        &&
        <h1 className='mt-5 text-xl text-gray-50'>Sorry No Content Right Now!</h1>
      }
    </main>);
}

MainPageTimeline.whyDidYouRender = true;