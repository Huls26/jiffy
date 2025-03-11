import usePageTitle from "@/hooks/usePageTitle";
import UserProfile from "@/components/UserProfile";
import { GlobalContext } from "@/contexts/GlobalContextProvider";
import { db } from "@/lib/fb";
import MainPagePostsFeed from "../features/MainPageFeatures/components/timeline/userPost/MainPagePostsFeed";

import { useContext } from "react";
import { collection, query, where, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";

export default function ProfilePage() {
  const [globalState] = useContext(GlobalContext);
  usePageTitle(`${globalState.username} 👀`);
  const [userPosts, setUserPosts] = useState(null);

  async function fetchUserPosts() {
    const citiesRef = collection(db, "userPosts");

    const q = query(citiesRef, where("userId", "==", globalState.userId));
    const querySnapshot = await getDocs(q);

    const mapQ = querySnapshot.docs.map((doc) => doc.data());

    setUserPosts(mapQ);
  }

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    fetchUserPosts();
  }, [userPosts?.length]);

  // add user followers number
  return (
    <main className="px-5 py-3 text-gray-50">
      <header className="mb-5 flex items-center space-x-3">
        <UserProfile
          photoURL={globalState?.photoURL}
          addedClassName={"w-15 h-15"}
        />
        <div>
          <h1 className="text-xl text-sky-400 font-semibold">{globalState.username}</h1>
          <p className="text-base text-gray-300 leading-3">{globalState.email}</p>
        </div>
      </header>
      <section className="pt-5 border-t-2 border-gray-400">
        <MainPagePostsFeed userPosts={userPosts} />
      </section>
    </main>);
}
