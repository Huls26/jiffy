import useAuthListener from "@/hooks/useAuthListener";
import MainPageAccountSuggestions from "../components/MainPageAccountSuggestions";
import MainPageUserInfo from "../components/MainPageUserInfo";

export default function MainPageSidebar() {
  const { userLogin } = useAuthListener();

  if (userLogin) {
    return (
      <section className="min-w-72 border-white border-2">
        <MainPageUserInfo />
        <MainPageAccountSuggestions />
      </section>
    );
  }

  return null;
}
