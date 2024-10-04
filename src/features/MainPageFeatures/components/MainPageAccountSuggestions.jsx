import { GlobalContext } from "@/contexts/GlobalContextProvider";
import { db } from '@/lib/fb';
import { collection, getDocs, query, where } from "firebase/firestore";
import { useContext, useEffect, useState } from 'react';
import MainPageAccountSuggestionProfile from "./MainpageAccountSuggestionProfile";

export default function MainPageAccountSuggestions() {
  // Display different users
  // fetch all users that the current user is not following
  // recommend at least 3-5 users
  // display 3-5 random users for know
  const [globalState, dispatch] = useContext(GlobalContext);
  const { userId } = globalState;
  const [suggestedUsers, setSuggestedUsers] = useState(null);

  // fetch Data 
  // create a button new suggestion
  // For func fetchUsers() only triggers when user clear the button or during the first render.
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


  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    const loadUsers = async () => {
      dispatch({
        type: "UPDATE_LOADING",
        isLoading: true,
      });

      const suggestionUsers = await fetchUsers(); // Waits for the fetch to complete

      setSuggestedUsers(() => suggestionUsers);

      dispatch({
        type: "UPDATE_LOADING",
        isLoading: false,
      });
    };

    loadUsers();
  }, [])

  return (
    <section className="pt-2 text-gray-200">
      <h1 className="ml-2 sm:text-center text-left font-semibold text-lg text-cyan-200">Suggested acounts to follow</h1>
      {suggestedUsers?.map((user) => (
        <MainPageAccountSuggestionProfile key={user.userId} user={user} />
      ))}
    </section>
  )
}

MainPageAccountSuggestions.whyDidYouRender = true;