import usePageTitle from "@/hooks/usePageTitle";
import { GlobalContext } from "@/contexts/GlobalContextProvider";
import { db } from "@/lib/fb";
import MainPagePostsFeed from "@/features/MainPageFeatures/components/timeline/userPost/MainPagePostsFeed";
import MainPageSidebar from "@/features/MainPageFeatures/sections/MainPageSidebar";
import ProfilePageHeader from "@/features/ProfilePageFeatures/components/ProfilePageHeader";

import { useContext } from "react";
import { collection, query, where, onSnapshot, orderBy } from "firebase/firestore";
import { useEffect, useState } from "react";

export default function ProfilePage() {
  const [globalState] = useContext(GlobalContext);
  usePageTitle(`${globalState.username} 👀`);
  const [userPosts, setUserPosts] = useState(null);

  useEffect(() => {
    // Get all posts for the user from Firestore
    const citiesRef = collection(db, "userPosts");
    const q = query(citiesRef,
      where("userId", "==", globalState.userId),
      orderBy("dateCreated", "desc")
    );
    const unsubscribePosts = onSnapshot(q, (querySnapshot) => {
      const posts = querySnapshot.docs.map((doc) => doc.data());
      setUserPosts(posts);
    });

    return () => {
      unsubscribePosts();
    };
  }, [globalState.userId]);

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
