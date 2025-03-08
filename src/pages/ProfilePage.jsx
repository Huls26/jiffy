import usePageTitle from "@/hooks/usePageTitle";
import UserProfile from "@/components/UserProfile";
import { GlobalContext } from "@/contexts/GlobalContextProvider";

import { useContext } from "react";

export default function ProfilePage() {
  const [globalState] = useContext(GlobalContext);
  usePageTitle(`${globalState.username} 👀`);

  console.log(globalState)
  return (
    <main className="px-5 py-3 text-gray-50">
      <header className="mb-5 flex items-center space-x-3">
        <UserProfile
          photoURL={globalState.photoURL}
          addedClassName={"w-15 h-15"}
        />
        <div>
          <h1 className="text-xl text-sky-400 font-semibold">{globalState.username}</h1>
          <p className="text-base text-gray-300 leading-3">{globalState.email}</p>
        </div>
      </header>
      <section className="border-t-2">
        user post
      </section>
    </main>);
}
