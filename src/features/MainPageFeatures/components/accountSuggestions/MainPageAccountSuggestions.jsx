import { GlobalContext } from "@/contexts/GlobalContextProvider";
import { reducerContext } from "@/contexts/ReducerContextProvider";
import { db } from '@/lib/fb';
import DiscoverUsersBtn from '../buttons/DiscoverUsersBtn';
import SuggestedUsersCloseBtn from "../buttons/SuggestedUsersCloseBtn";
import MainPageAccountSuggestionTitle from './MainPageAccountSuggestionTitle';
import MainPageAccountSuggestionUserList from './MainPageAccountSuggestionUserList'
import MainPageNoSuggestedUsersMessage from './MainPageNoSuggestedUsersMessage';

import { collection, getDocs, query, where } from "firebase/firestore";
import { useContext, useState } from 'react';

export default function MainPageAccountSuggestions() {
  const [globalState] = useContext(GlobalContext);
  const [, dispatch] = useContext(reducerContext)
  const { userId } = globalState;
  const [suggestedUsers, setSuggestedUsers] = useState(null);

  console.log("create own sidebar loading state");
  async function fetchUsers() {
    try {
      const q = query(
        collection(db, 'users'),
        where('following', 'not-in', [userId])
      );

      const querySnapshot = await getDocs(q);

      // Filter out the current user's own profile
      const filteredUsers = querySnapshot.docs.filter(doc => doc.data().userId !== userId);

      if (filteredUsers.length === 0) {
        return []; // Return an empty array if no suggestions available
      }

      // Randomly select up to 3 users
      const randomUsers = filteredUsers
        .sort(() => Math.random() - 0.5) // Shuffle array
        .slice(0, 3)                     // Select first 3 users from shuffled list
        .map(doc => {
          const userProfile = doc.data();
          return {
            userId: userProfile.userId,
            username: userProfile.username,
            email: userProfile.email,
            photoURL: userProfile.photoURL,
            followersCount: userProfile.followersCount,
          };
        });

      return randomUsers;

    } catch (error) {
      console.error('Error fetching user suggestions:', error);
      return [];
    }
  }

  async function fetchUserSuggestions() {
    dispatch({
      type: "UPDATE_LOADING",
      isLoading: true,
    });
    const suggestionUsers = await fetchUsers(); // Waits for the fetch to complete

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