import { GlobalContext } from "@/contexts/GlobalContextProvider";
import ReducerContextProvider from "@/contexts/ReducerContextProvider";
import MainPageUserCard from "../components/userInfo/MainPageUserCard";
import reducerMethod, { INITIAL_STATE } from "../context/MainPageSidebarContextReducer";

import { lazy, useContext } from "react";
import MainPageCommentSection from "../components/timeline/commentSection/MainPageCommentSection";

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
        <section className="md:self-start py-1 min-w-[280px] sm:m-2 shadow-xl">
          <section className="border-gray-300 sm:border-2 rounded-lg">
            <MainPageUserCard />
            <MainPageAccountSuggestions />
          </section>

          {/* comment section */}
          <MainPageCommentSection />
        </section>
      </ReducerContextProvider>

    );
  }

  return null;
}