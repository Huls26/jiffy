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
        <section className="md:w-2/6 md:self-start py-1 min-w-[280px] sm:m-2">
          <section className="border-gray-300 sm:border-2 rounded-lg shadow-xl">
            <MainPageUserCard />
            <MainPageAccountSuggestions />
          </section>

          {/* comment section */}
          <MainPageCommentSection authUserPhoto={globalState.photoURL} />
        </section>
      </ReducerContextProvider>

    );
  }

  return null;
}