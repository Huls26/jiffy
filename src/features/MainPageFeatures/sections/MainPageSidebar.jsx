import { GlobalContext } from "@/contexts/GlobalContextProvider";
import ReducerContextProvider from "@/contexts/ReducerContextProvider";
import MainPageUserCard from "../components/userInfo/MainPageUserCard";
import reducerMethod, { INITIAL_STATE } from "../context/MainPageSidebarContextReducer";

import { lazy, useContext } from "react";

const MainPageAccountSuggestions = lazy(() => import("../components/accountSuggestions/MainPageAccountSuggestions"))

export default function MainPageSidebar() {
  const [globalState] = useContext(GlobalContext);
  const { userLogin } = globalState;

  if (userLogin) {
    return (
      <ReducerContextProvider
        reducerMethod={reducerMethod}
        INITIAL_STATE={INITIAL_STATE}
      >
        <section className="md:self-start py-1 min-w-[280px] shadow-xl border-gray-300 sm:border-2 sm:m-2 rounded-lg">
          <MainPageUserCard />
          <MainPageAccountSuggestions />
        </section>
      </ReducerContextProvider>

    );
  }

  return null;
}

MainPageSidebar.whyDidYouRender = true;