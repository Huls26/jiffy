import usePageTitle from "@/hooks/usePageTitle";
import { GlobalContext } from "@/contexts/GlobalContextProvider";
import { db } from "@/lib/fb";
import MainPagePostsFeed from "@/features/MainPageFeatures/components/timeline/userPost/MainPagePostsFeed";
import MainPageSidebar from "@/features/MainPageFeatures/sections/MainPageSidebar";
import ProfilePageHeader from "@/features/ProfilePageFeatures/components/ProfilePageHeader";

import { useContext, useEffect, useState } from "react";
import { collection, query, where, onSnapshot, orderBy } from "firebase/firestore";
import { useParams } from "react-router-dom";

export default function ProfilePage() {
  const [globalState] = useContext(GlobalContext);
  usePageTitle(`${globalState.username} 👀`);
  const [userPosts, setUserPosts] = useState(null);
  const { username } = useParams();

  // Fetch user posts from Firestore
  useEffect(() => {
    let q = null;

    // check if the user is viewing their own profile or someone else's
    // if the user is viewing their own profile, use globalState.userId

    if (username === globalState.username) {
      const citiesRef = collection(db, "userPosts");
      q = query(
        citiesRef,
        where("userId", "==", globalState.userId),
        orderBy("dateCreated", "desc")
      );
    } else if (username) {
      const citiesRef = collection(db, "userPosts");
      q = query(
        citiesRef,
        where("userId", "==", username),
        orderBy("dateCreated", "desc")
      );
    }

    if (!q) return; // ⚠️ Prevent running onSnapshot with a null query

    const unsubscribePosts = onSnapshot(q, (querySnapshot) => {
      const posts = querySnapshot.docs.map((doc) => doc.data());
      setUserPosts(posts);
    });

    return () => {
      unsubscribePosts();
    };
  }, [globalState.userId, globalState.username, username]);


  return (
    <main className="px-5 py-3 text-gray-50 max-w-6xl m-auto">
      <ProfilePageHeader />

      <section className="
        pt-5 border-t-2 border-gray-400 text-center
        md:px-2 flex flex-col-reverse md:flex-row
      ">
        <div className="flex-1 mt-5">
          <MainPagePostsFeed userPosts={userPosts} />
        </div>

        <MainPageSidebar />
      </section>
    </main>);
}
