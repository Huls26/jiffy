import { GlobalContext } from "@/contexts/GlobalContextProvider";
import LogoutButton from "./LogoutButton";
import NavLinkLI from "./NavLinkLI";

import { useContext } from "react";
/**
 * AuthNavLink is a React functional component that renders a navigation link based on the user's authentication status.
 * It uses the `useAuthListener` hook to listen for changes in the user's login status.
 *
 * @returns {JSX.Element} - A JSX element representing the navigation link.
 */
export default function AuthNavLink() {
  const [globalState] = useContext(GlobalContext);
  const { userLogin, isLoading } = globalState;

  if (isLoading) {
    return <h1>{"< ... />"}</h1>;
  }

  return !userLogin ? (
    <NavLinkLI text="<Login />" to="login" title="Login" />
  ) : (
    <LogoutButton />
  );
}
