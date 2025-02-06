import { db } from "@/lib/fb";
import MainPageCommentBox from "./MainPageCommentBox";
import MainPageUserComment from "./MainPageUserComment";

import { collection, onSnapshot, query, orderBy } from "firebase/firestore";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

export default function MainPageCommentSection({ authUserPhoto }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const [usersComment, setUsersComment] = useState([]);
  const [commentSize, setCommentSize] = useState("");
  const commentId = searchParams.get('comment');

  function fetchUserData(queryRef) {
    if (!commentId) return;

    // queryRef will use to make it customable later
    // const q = query(collection(db, "userPosts"), where("postId", "==", commentId), collection(db, "userPosts", commentId, "comments"));

    // add query order by createdAt
    const q = query(collection(db, "userPosts", commentId, "comments"), orderBy("createdAt", "desc"));

    // Subscribe to real-time updates
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      setUsersComment(querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
      setCommentSize(querySnapshot.size)
    });

    return unsubscribe; // Return the unsubscribe function to clean up
  }

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    const unsubscribe = fetchUserData();

    return () => {
      if (unsubscribe) unsubscribe(); // Cleanup listener on unmount
    };
  }, [commentId]);

  // If there is no comment query parameter, return null
  if (!searchParams.get('comment')) {
    return null;
  }

  console.log("code clean up")
  return (
    <section className='p-2 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-11/12 bg-slate-950 rounded-lg z-50 text-gray-300 text-left md:block md:static md:-translate-x-0 md:translate-y-0 md:w-full md:max-w-md md:top-0 md:left-0 md:mt-5'>
      <div className="flex justify-between items-start">
        <h1 className="mb-2 text-gray-200 text-lg font-semibold">Comments ({commentSize})</h1>
        <button
          type="button"
          className="text-red-500 hover:text-red-400 active:text-red-600"
          onClick={() => setSearchParams({})}
        >close</button>
      </div>

      <MainPageCommentBox authUserPhoto={authUserPhoto} />

      {/* Comment */}
      {usersComment.map((doc) => {
        const { commentId, userId, content } = doc;

        return (<MainPageUserComment
          key={commentId}
          userId={userId}
          content={content}
        />)
      }
      )}
    </section>
  )
}

MainPageCommentSection.propTypes = {
  authUserPhoto: PropTypes.string.isRequired,
  userId: PropTypes.string.isRequired,
}