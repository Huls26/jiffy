import useAuthListener from "@/hooks/useAuthListener";
import { NavLink } from "react-router-dom";
import DefaultUserProfile from "./DefaultUserProfile";

export default function HeaderProfileButton() {
  const { userLogin, username } = useAuthListener();

  // to do nav links highlight profile when clicked
  return (
    userLogin && (
      <NavLink
        to="profile"
        className={({ isActive }) =>
          isActive ? "text-green-400 font-bold" : ""
        }
      >
        <div className="h-full flex items-center space-x-1 hover:text-gray-400 transition">
          <h1 className="text-xs md:text-lg">{username}</h1>
          <DefaultUserProfile />
        </div>
      </NavLink>
    )
  );
}
