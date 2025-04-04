import AuthNavLink from "./components/AuthNavLink";
import HeaderHomeButton from "./components/HeaderHomeButton";
import HeaderProfileButton from "./components/HeaderProfileButton";

import { Link } from "react-router-dom";

/**
 * MainHeader is a React functional component that renders the main header of the application.
 * It includes a logo, navigation links, and user authentication features.
 *
 * @returns {JSX.Element} - The JSX representation of the main header.
 */
export default function MainHeader() {
  return (
    <header className="bg-gray-900 text-gray-50 p-4 px-7">
      <div className="mx-auto flex justify-between items-center md:max-w-screen-xl">
        <h1 className="text-lg md:text-2xl font-bold cursor-pointer">
          <Link to="/" aria-label="jiffy simple logo">
            JIFFY
          </Link>
        </h1>
        <nav>
          <ul className="flex items-center space-x-2 md:space-x-4 select-none">
            <HeaderHomeButton />
            <HeaderProfileButton />
            <AuthNavLink />
          </ul>
        </nav>
      </div>
    </header>
  );
}
