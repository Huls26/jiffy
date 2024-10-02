import UserProfile from "@/components/UserProfile";
import { GlobalContext } from "@/contexts/GlobalContextProvider";

import { useContext } from "react";
import { NavLink } from "react-router-dom";

export default function HeaderProfileButton() {
  const [globalContextState] = useContext(GlobalContext);
  const { userLogin, username, photoURL } = globalContextState;

  return (
    userLogin && (
      <NavLink
        to={`profile/${username}`}
        className={({ isActive }) =>
          isActive ? "text-green-400 font-bold" : ""
        }
      >
        <div className="h-full flex items-center space-x-1 hover:text-gray-400 transition">
          <h1 className="text-xs md:text-lg">{username}</h1>
          <UserProfile photoURL={photoURL} addedClassName={"w-5 h-5 md:w-7 md:h-7"} />
        </div>
      </NavLink>
    )
  );
}
