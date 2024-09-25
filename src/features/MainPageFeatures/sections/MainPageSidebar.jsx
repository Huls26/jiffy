import { reducerContext } from "@/contexts/ReducerContextProvider";
import { useContext } from "react";
import MainPageAccountSuggestions from "../components/MainPageAccountSuggestions";
import MainPageUserInfo from "../components/MainPageUserInfo";

export default function MainPageSidebar() {
  const [globalState] = useContext(reducerContext);
  const { userLogin } = globalState;

  if (userLogin) {
    return (
      <section className="py-1 min-w-[280px] sm:border-gray-300 sm:border-2 m-2 rounded-lg">
        <MainPageUserInfo />
        <MainPageAccountSuggestions />
      </section>
    );
  }

  return null;
}
