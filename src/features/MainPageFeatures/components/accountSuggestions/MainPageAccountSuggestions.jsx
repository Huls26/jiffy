import { GlobalContext } from "@/contexts/GlobalContextProvider";
import { reducerContext } from "@/contexts/ReducerContextProvider";
import fetchRandomUsers from '../../utils/accountSuggestion/fetchRandomUsers';
import DiscoverUsersBtn from '../buttons/DiscoverUsersBtn';
import SuggestedUsersCloseBtn from "../buttons/SuggestedUsersCloseBtn";
import MainPageAccountSuggestionTitle from './MainPageAccountSuggestionTitle';
import MainPageAccountSuggestionUserList from './MainPageAccountSuggestionUserList'
import MainPageNoSuggestedUsersMessage from './MainPageNoSuggestedUsersMessage';

import { } from "firebase/firestore";
import { useContext, useState } from 'react';

export default function MainPageAccountSuggestions() {
  const [globalState] = useContext(GlobalContext);
  const [, dispatch] = useContext(reducerContext)
  const { userId } = globalState;
  const [suggestedUsers, setSuggestedUsers] = useState(null);

  async function fetchUserSuggestions() {
    dispatch({
      type: "UPDATE_LOADING",
      isLoading: true,
    });
    const suggestionUsers = await fetchRandomUsers(userId); // Waits for the fetch to complete

    setSuggestedUsers((prevValue) => {
      if (!prevValue) {
        return suggestionUsers;
      }

      return null;
    });

    dispatch({
      type: "UPDATE_LOADING",
      isLoading: false,
    });
  }

  return (
    <section className="pt-2 pb-2 text-gray-200">
      <MainPageAccountSuggestionTitle
        isDisplay={suggestedUsers !== null}
      />

      <MainPageNoSuggestedUsersMessage isDisplay={suggestedUsers?.length === 0} />

      {suggestedUsers !== null ? (
        <MainPageAccountSuggestionUserList list={suggestedUsers} />
      ) : (
        <DiscoverUsersBtn onClick={fetchUserSuggestions} />
      )
      }

      <SuggestedUsersCloseBtn
        onClick={fetchUserSuggestions}
        isDisplay={suggestedUsers !== null}
      />
    </section >
  )
}

MainPageAccountSuggestions.whyDidYouRender = true;