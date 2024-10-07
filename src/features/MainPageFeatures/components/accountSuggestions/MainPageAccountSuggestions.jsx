import { GlobalContext } from "@/contexts/GlobalContextProvider";
import { reducerContext } from "@/contexts/ReducerContextProvider";
import fetchRandomUsers from '../../utils/accountSuggestion/fetchRandomUsers';
import SuggestedUsersCloseBtn from "../buttons/SuggestedUsersCloseBtn";
import MainPageAccountSuggestionListDisplay from "./MainPageAccountSuggestionListDisplay";
import MainPageAccountSuggestionTitle from './MainPageAccountSuggestionTitle';
import MainPageNoSuggestedUsersMessage from './MainPageNoSuggestedUsersMessage';

import { useContext, } from 'react';

export default function MainPageAccountSuggestions() {
  const [globalState] = useContext(GlobalContext);
  const [sidebarState, dispatch] = useContext(reducerContext)
  const { userId } = globalState;
  const { suggestedUsersList } = sidebarState;

  async function fetchUserSuggestions() {
    dispatch({
      type: "UPDATE_LOADING",
      isLoading: true,
    });
    const suggestionUsers = await fetchRandomUsers(userId); // Waits for the fetch to complete

    dispatch({
      type: "UPDATE_LIST",
      suggestedUsersList: suggestedUsersList
        ? null : suggestionUsers,
    })

    dispatch({
      type: "UPDATE_LOADING",
      isLoading: false,
    });
  }

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
      />

      <SuggestedUsersCloseBtn
        onClick={fetchUserSuggestions}
        isDisplay={suggestedUsersList !== null}
      />
    </section >
  )
}

MainPageAccountSuggestions.whyDidYouRender = true;