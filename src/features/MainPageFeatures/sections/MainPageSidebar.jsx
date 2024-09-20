import MainPageAccountSuggestions from "../components/MainPageAccountSuggestions";
import MainPageUserInfo from "../components/MainPageUserInfo";

export default function MainPageSidebar() {
  return (
    <section className="min-w-72 border-white border-2">
      <MainPageUserInfo />
      <MainPageAccountSuggestions />
    </section>
  );
}
