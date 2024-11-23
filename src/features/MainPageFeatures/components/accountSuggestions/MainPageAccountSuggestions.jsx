import { reducerContext } from "@/contexts/ReducerContextProvider";
import useFetchUserSuggestions from "../../hooks/useFetchUserSuggestions";
import SuggestedUsersCloseBtn from "../buttons/SuggestedUsersCloseBtn";
import MainPageAccountSuggestionListDisplay from "./MainPageAccountSuggestionListDisplay";
import MainPageAccountSuggestionTitle from './MainPageAccountSuggestionTitle';
import MainPageNoSuggestedUsersMessage from './MainPageNoSuggestedUsersMessage';

import { useContext } from "react";

export default function MainPageAccountSuggestions() {
  const [sidebarState, dispatch] = useContext(reducerContext);
  const { suggestedUsersList, isLoading } = sidebarState
  const { fetchUserSuggestions } = useFetchUserSuggestions(dispatch);

  return (
    <section className="pt-2 pb-2 text-gray-200">
      <MainPageAccountSuggestionTitle
        isDisplay={suggestedUsersList !== null}
      />

      <MainPageNoSuggestedUsersMessage
        isDisplay={suggestedUsersList?.length === 0}
      />

      <MainPageAccountSuggestionListDisplay
        suggestedUsersList={suggestedUsersList}
        onClick={fetchUserSuggestions}
        sidebarIsLoading={isLoading}
      />

      <SuggestedUsersCloseBtn
        dispatch={dispatch}
        isDisplay={suggestedUsersList !== null}
      />
    </section >
  )
}

MainPageAccountSuggestions.whyDidYouRender = true;