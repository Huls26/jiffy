import { GlobalContext } from "@/contexts/GlobalContextProvider";
import HeaderUserProfile from "./HeaderUserProfile";

import { useContext } from "react";
import { NavLink } from "react-router-dom";

export default function HeaderProfileButton() {
  // use GlobalContext for now
  // but the problem is when it refresh the page it will also refresh the context
  const [globalContextState] = useContext(GlobalContext);
  const { userLogin, username, photoURL } = globalContextState;

  // to do nav links highlight profile when clicked
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
          <HeaderUserProfile photoURL={photoURL} />
        </div>
      </NavLink>
    )
  );
}
