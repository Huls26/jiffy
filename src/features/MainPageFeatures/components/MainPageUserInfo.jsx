import useAuthListener from "@/hooks/useAuthListener";
import { NavLink } from "react-router-dom";

export default function MainPageUserInfo() {
  const { email, username, photoURL } = useAuthListener();

  return (
    // to decided add margin-auto or not...
    <section className="max-w-80 p-1 pl-2 flex">
      <div className="grid place-self-center mr-2">
        <img
          className="w-8 rounded-full"
          src={photoURL}
          alt={`${username} user profile`}
        />
      </div>
      <div className="text-left -space-y-1">
        <h2 className="text-sky-400 font-semibold">{username}</h2>
        <p className="font-mono text-xs text-gray-300">{email}</p>
      </div>
      <NavLink className="ml-auto">
        <button
          type="button"
          className="text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 active:opacity-70 font-bold rounded-lg text-sm px-2.5 py-0.5 text-center me-2"
        >
          Post
        </button>
      </NavLink>
    </section>
  );
}
