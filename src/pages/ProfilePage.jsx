import usePageTitle from "@/hooks/usePageTitle";
import UserProfile from "@/components/UserProfile";
import { GlobalContext } from "@/contexts/GlobalContextProvider";
import { db } from "@/lib/fb";
import MainPagePostsFeed from "@/features/MainPageFeatures/components/timeline/userPost/MainPagePostsFeed";
import MainPageSidebar from "@/features/MainPageFeatures/sections/MainPageSidebar";

import { useContext } from "react";
import { collection, query, where, onSnapshot, doc, getDoc, orderBy } from "firebase/firestore";
import { useEffect, useState } from "react";

export default function ProfilePage() {
  const [globalState] = useContext(GlobalContext);
  usePageTitle(`${globalState.username} 👀`);
  const [userPosts, setUserPosts] = useState(null);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const citiesRef = collection(db, "userPosts");
    const q = query(citiesRef, where("userId", "==", globalState.userId), orderBy("dateCreated", "desc"));

    const unsubscribePosts = onSnapshot(q, (querySnapshot) => {
      const posts = querySnapshot.docs.map((doc) => doc.data());
      setUserPosts(posts);
    });

    (async () => {
      if (globalState.userId) {
        const userRef = doc(db, "users", globalState.userId);
        const userSnapshot = await getDoc(userRef);
        setUserData(userSnapshot.data());
      }
    })();

    return () => {
      unsubscribePosts();
    };
  }, [globalState.userId]);

  return (
    <main className="px-5 py-3 text-gray-50 max-w-6xl m-auto">
      <header className="mb-5 flex items-center space-x-3 cursor-pointer">
        <UserProfile
          photoURL={globalState?.photoURL}
          addedClassName={"w-15 h-15"}
        />
        <div className="space-y-1">
          <h1 className="text-xl text-sky-400 font-semibold">{globalState.username}</h1>
          <p className="text-sm text-gray-400 leading-3">{globalState.email}</p>
          <p className="font-semibold text-gray-300">{userData?.followersCount} Followers</p>
        </div>

        <button
          type="button"
          className="ml-auto font-semibold text-sky-400 text-lg hover:text-sky-600">
          Update Profile
        </button>
      </header>

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
