import useAuthListener from "@/hooks/useAuthListener";
import { NavLink } from "react-router-dom";
import DefaultUserProfile from "./DefaultUserProfile";

export default function HeaderProfileButton() {
  const { userLogin, username } = useAuthListener();

  // to do nav links highlight profile when clicked
  return (
    userLogin && (
      <NavLink>
        <div className="h-full flex items-center space-x-1">
          <h1 className="text-xs">{username}</h1>
          <DefaultUserProfile />
        </div>
      </NavLink>
    )
  );
}
