import { db } from '@/lib/fb';
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { useEffect, useState } from 'react';

export default function MainPageTimeline() {
  const [userPosts, setUserPostsSnapshot] = useState([]);

  console.log(userPosts);

  useEffect(() => {
    // Create a query with constraints
    const myQuery = query(
      collection(db, "userPosts"),
      orderBy('dateCreated', 'desc')
    );
    // Listen for real-time updates using the query
    const unsubscribe = onSnapshot(myQuery, (snapshot) => {
      console.log("Snapshot triggered!");

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
      {/* filter query */}
      <section className='inline-flex'>
        <button
          type='button'
          className="bg-sky-500 bg-gray-900 hover:bg-gray-700 text-gray-200 font-bold py-1 px-3 rounded-l"
        >
          All
        </button>
        <button
          type='button'
          className="bg-gray-900 hover:bg-gray-700 active:bg-sky-500 text-gray-200 font-bold py-1 px-3"
        >
          Likes
        </button>
        <button
          type='button'
          className="bg-gray-900 hover:bg-gray-700 active:bg-sky-500 text-gray-200 font-bold py-1 px-3 rounded-r"
        >
          Following
        </button>
      </section>

      {userPosts?.map((u) => {
        const userPost = u.doc.data();

        return (
          <div
            key={userPost.postId}
            className='border-2 border-black'
          >
            <h1>{userPost.textContent}</h1>
            <img src={userPost.content} alt={`users post text content ${userPost.textContent}`} />
          </div>);
      })}
    </main>);
}

MainPageTimeline.whyDidYouRender = true;