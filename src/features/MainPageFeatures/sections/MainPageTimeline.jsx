import { db } from '@/lib/fb';
import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from 'react';

export default function MainPageTimeline() {
  const [userPosts, setUserPostsSnapshot] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const querySnapshot = await getDocs(collection(db, "userPosts"));
      setUserPostsSnapshot(() => querySnapshot.docs);
    }

    fetchData();
  }, [])

  console.log(userPosts && userPosts[0].data());

  return (
    <div className="flex-1 border-white border-2">
      MainPageTimeline
      {userPosts?.map((u) => {
        const userPost = u.data();

        return (
          <div
            key={userPost.postId}
            className='border-2 border-black'
          >
            <h1>{userPost.textContent}</h1>
            <img src={userPost.content} alt={`users post text content ${userPost.textContent}`} />
          </div>);
      })}
    </div>);
}
