import { reducerContext } from "@/contexts/ReducerContextProvider";
import { useContext } from "react";
import { Link } from "react-router-dom";

export default function MainHeader() {
  const [globalStateContext] = useContext(reducerContext);

  // to do
  // add navigation
  // add logout button
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
              <Link to="/" className="hover:text-gray-200">
                Home
              </Link>
            </li>
            <li>
              <Link to="/profile" className="hover:text-gray-200">
                Profile
              </Link>
            </li>
            <li>
              <Link to="/login" className="hover:text-gray-200">
                Login
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
