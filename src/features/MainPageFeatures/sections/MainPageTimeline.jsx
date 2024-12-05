import MainPageFilterQuery from '../components/timeline/MainPageFilterQuery';
import MainPageUserProfileLink from '../components/userInfo/MainPageUserProfileLink';

import { db } from '@/lib/fb';
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { useEffect, useState } from 'react';

export default function MainPageTimeline() {
  const [userPosts, setUserPostsSnapshot] = useState([]);

  console.log('change flex-col to large width at least 700-750px')
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

  function formatRelativeTime(timestamp) {
    // Convert Firestore _Timestamp to a JavaScript Date object
    const date = new Date(timestamp.seconds * 1000); // Convert seconds to milliseconds

    const now = new Date();
    const diffInSeconds = Math.floor((now - date) / 1000); // Difference in seconds

    // Define thresholds
    const secondsInMinute = 60;
    const secondsInHour = 60 * secondsInMinute;
    const secondsInDay = 24 * secondsInHour;
    const secondsInWeek = 7 * secondsInDay;
    const secondsInMonth = 30 * secondsInDay; // Approximate month
    const secondsInYear = 365 * secondsInDay; // Approximate year

    // Use switch with true
    switch (true) {
      case diffInSeconds < secondsInHour:
        return `${Math.floor(diffInSeconds / secondsInMinute)}m`; // Minutes
      case diffInSeconds < secondsInDay:
        return `${Math.floor(diffInSeconds / secondsInHour)}h`; // Hours
      case diffInSeconds < secondsInWeek:
        return `${Math.floor(diffInSeconds / secondsInDay)} days`; // Days
      case diffInSeconds < secondsInMonth:
        return `${Math.floor(diffInSeconds / secondsInWeek)} weeks`; // Weeks
      case diffInSeconds < secondsInYear:
        return `${Math.floor(diffInSeconds / secondsInMonth)} months`; // Months
      default: {
        const years = Math.floor(diffInSeconds / secondsInYear);
        return `${years} ${years === 1 ? "year" : "years"}`; // Years
      }
    }
  }

  return (
    <main className="mt-1 pt-3 flex-1">
      <MainPageFilterQuery />

      {userPosts?.map((u) => {
        const userPost = u.doc.data();
        const a = formatRelativeTime(userPost.dateCreated)

        return (
          <div
            key={userPost.postId}
            className='m-auto my-3 mr-3 space-y-2 bg-slate-950 text-start text-gray-100 min-w-[270px] max-w-xl  rounded-lg border-4 border-gray-950'
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
        <h1 className='mt-5 text-xl text-gray-50'>Sorry No Content Right Now!</h1>
      }
    </main>);
}

MainPageTimeline.whyDidYouRender = true;