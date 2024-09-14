import { Link } from "react-router-dom";
import AuthNavLink from "./components/AuthNavLink";
import DefaultUserProfile from "./components/DefaultUserProfile";
import HeaderHomeButton from "./components/HeaderHomeButton";
import NavLinkLI from "./components/NavLinkLI";

/**
 * MainHeader is a React functional component that renders the main header of the application.
 * It includes a logo, navigation links, and user authentication features.
 *
 * @returns {JSX.Element} - The JSX representation of the main header.
 */
export default function MainHeader() {
  return (
    <header className="bg-gray-900 text-gray-50 p-4">
      <div className="container mx-auto flex justify-between items-center md:max-w-5xl">
        <h1 className="text-xl font-bold cursor-pointer">
          <Link to="/" aria-label="jiffy simple logo">
            JIFFY
          </Link>
        </h1>
        <nav>
          <ul className="flex space-x-2 md:space-x-4">
            {/* removed for now tobe decided on */}
            {/* <NavLinkLI text="Home" to="/" /> */}
            <HeaderHomeButton />
            <NavLinkLI text="Profile" to="profile" />
            <DefaultUserProfile />
            <AuthNavLink />
          </ul>
        </nav>
      </div>
    </header>
  );
}
