import useAuthListener from "@/hooks/useAuthListener";
import { NavLink } from "react-router-dom";
import HeaderUserProfile from "./HeaderUserProfile";

export default function HeaderProfileButton() {
  const { userLogin, username, photoURL } = useAuthListener();

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
