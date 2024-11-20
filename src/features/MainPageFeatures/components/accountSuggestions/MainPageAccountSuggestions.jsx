import useFetchUserSuggestions from "../../hooks/useFetchUserSuggestions";
import SuggestedUsersCloseBtn from "../buttons/SuggestedUsersCloseBtn";
import MainPageAccountSuggestionListDisplay from "./MainPageAccountSuggestionListDisplay";
import MainPageAccountSuggestionTitle from './MainPageAccountSuggestionTitle';
import MainPageNoSuggestedUsersMessage from './MainPageNoSuggestedUsersMessage';

export default function MainPageAccountSuggestions() {
  const { suggestedUsersList, fetchUserSuggestions } = useFetchUserSuggestions()

  console.log("check why this re-render");
  console.log("Lazy load unecessary files during the first render");
  console.log("check inspect network");
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