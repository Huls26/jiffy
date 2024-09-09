import useAuthListener from "@/hooks/useAuthListener";
import NavLinkLI from "./NavLinkLI";

export default function AuthNavLink() {
  const globalStateContext = useAuthListener();
  const { userLogin } = globalStateContext;

  console.log("add loading when checking userLogin");
  return !userLogin ? (
    <NavLinkLI text="<Login />" to="login" />
  ) : (
    <NavLinkLI text="<Logout />" to="logout" />
  );
}
