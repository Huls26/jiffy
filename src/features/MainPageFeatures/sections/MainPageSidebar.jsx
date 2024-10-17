import ReducerContextProvider from "@/contexts/ReducerContextProvider";
import MainPageAccountSuggestions from "../components/accountSuggestions/MainPageAccountSuggestions";
import MainPageUserCard from "../components/userInfo/MainPageUserCard";

import { GlobalContext } from "@/contexts/GlobalContextProvider";
import { useContext } from "react";
import reducerMethod, { INITIAL_STATE } from "../context/MainPageSidebarContextReducer";

export default function MainPageSidebar() {
  const [globalState] = useContext(GlobalContext);
  const { userLogin } = globalState;

  if (userLogin) {
    return (
      <ReducerContextProvider
        reducerMethod={reducerMethod}
        INITIAL_STATE={INITIAL_STATE}
      >
        <section className="py-1 min-w-[280px] border-gray-300 sm:border-2 sm:m-2 rounded-lg">
          <MainPageUserCard />
          <MainPageAccountSuggestions />
        </section>
      </ReducerContextProvider>

    );
  }

  return null;
}
