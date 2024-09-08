import { reducerContext } from "@/contexts/ReducerContextProvider";
import { useContext } from "react";
import { Link } from "react-router-dom";

export default function MainHeader() {
  const [globalStateContext] = useContext(reducerContext);

  // to do
  // active link
  // add logout button
  // login button when logged out
  // display username
  console.log(globalStateContext);

  return (
    <header className="bg-gray-900 text-white p-4">
      <div className="container mx-auto flex justify-between items-center md:max-w-5xl">
        <h1 className="text-2xl font-bold cursor-pointer">
          <Link to="/">JIFFY</Link>
        </h1>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link
                to="/"
                className="pb-1 border-gray-400 hover:text-gray-200 hover:border-b-2 transition"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/profile"
                className="pb-1 border-gray-400 hover:text-gray-200 hover:border-b-2 transition"
              >
                Profile
              </Link>
            </li>
            <li>
              <Link
                to="/login"
                className="pb-1 border-gray-400 hover:text-gray-200 hover:border-b-2 transition"
              >
                Login
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
