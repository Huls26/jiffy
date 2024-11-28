import { db } from '@/lib/fb';
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { useEffect, useState } from 'react';

export default function MainPageTimeline() {
  const [userPosts, setUserPostsSnapshot] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const querySnapshot = query(
        collection(db, "userPosts"),
        orderBy('dateCreated', 'desc')
      );
      const docsSnapshot = await getDocs(querySnapshot);
      setUserPostsSnapshot(() => docsSnapshot.docs);
    }

    fetchData();
  }, [])

  console.log(userPosts?.length && userPosts[0].data());

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
    </main>);
}
