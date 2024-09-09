import { Link } from "react-router-dom";
import AuthNavLink from "./components/AuthNavLink";
import NavLinkLI from "./components/NavLinkLI";

export default function MainHeader() {
  // to do
  // add logout button
  // login button when logged out
  // display username

  return (
    <header className="bg-gray-900 text-gray-50 p-4">
      <div className="container mx-auto flex justify-between items-center md:max-w-5xl">
        <h1 className="text-2xl font-bold cursor-pointer">
          <Link to="/">JIFFY</Link>
        </h1>
        <nav>
          <ul className="flex space-x-4">
            <NavLinkLI text="Home" to="/" />
            <NavLinkLI text="Profile" to="profile" />
            <AuthNavLink />
          </ul>
        </nav>
      </div>
    </header>
  );
}
