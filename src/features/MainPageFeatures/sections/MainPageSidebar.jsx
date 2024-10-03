import { GlobalContext } from "@/contexts/GlobalContextProvider";
import { useContext } from "react";
import MainPageAccountSuggestions from "../components/MainPageAccountSuggestions";
import MainPageUserCard from "../components/MainPageUserCard";

export default function MainPageSidebar() {
  const [globalState] = useContext(GlobalContext);
  const { userLogin } = globalState;

  if (userLogin) {
    return (
      <section className="py-1 min-w-[280px] sm:border-gray-300 sm:border-2 sm:m-2 rounded-lg">
        <MainPageUserCard />
        <MainPageAccountSuggestions />
      </section>
    );
  }

  return null;
}
