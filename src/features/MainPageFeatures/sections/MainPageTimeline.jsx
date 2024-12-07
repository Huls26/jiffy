import MainPageAuthFilterOptions from '../components/timeline/MainPageAuthFilterOptions';
import MainPageUserProfileLink from '../components/userInfo/MainPageUserProfileLink';
import formatRelativeTime from '../utils/timeline/formatRelativeTime';

import { db } from '@/lib/fb';
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { useEffect, useState } from 'react';

export default function MainPageTimeline() {
  const [userPosts, setUserPostsSnapshot] = useState([]);

  console.log('change flex-col to large width at least 700-750px');
  console.log("fix filter query should be align with user posts");
  console.log("fix mainpage content when user posts is not centered check when user is not login")
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
    <main className="mt-1 pt-3 flex-1 text-gray-100">
      <MainPageAuthFilterOptions isDisplay={userPosts} />

      {userPosts?.map((u) => {
        const userPost = u.doc.data();
        const a = formatRelativeTime(userPost.dateCreated);

        return (
          <div
            key={userPost.postId}
            className='m-auto my-3 sm:mx-3 space-y-2 bg-slate-950 text-start  min-w-[270px] max-w-xl sm:rounded-lg border-4 border-gray-950'
          >
            <div className='mx-2 m-1 flex justify-between'>
              <MainPageUserProfileLink
                to={`profile/${userPost.username}`}
                photoURL={userPost.photoURL}
                username={userPost.username}
                email={userPost.email}
              />
              <h1 className='font-semibold text-xs text-gray-400'>{a} ago</h1>
            </div>
            <h1 className='ml-2 sm:text-xl'>{userPost.textContent}</h1>
            <img
              src={userPost.content}
              alt={`users post text content ${userPost.textContent}`}
            />
          </div>);
      })}

      {
        userPosts?.length === 0
        &&
        <h1 className='mt-5 font-bold sm:text-xl text-cyan-500 text-pretty'>Sorry No Content Right Now! :(</h1>
      }
    </main>);
}

MainPageTimeline.whyDidYouRender = true;