import { GlobalContext } from "@/contexts/GlobalContextProvider";
import { db } from '@/lib/fb';
import { collection, getDocs, query, where } from "firebase/firestore";
import { useContext, useEffect, useState } from 'react';
import MainPageUserProfileLink from "./MainPageUserProfileLink";

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
    const q = query(collection(db, 'users'), where('following', 'not-in', [userId]),);
    const querySnapshot = await getDocs(q);
    const filteredUsers = querySnapshot.docs.filter(doc => doc.data().userId !== userId);
    console.log(filteredUsers)
    // randomly select users
    const randomIdx = Array.from({ length: filteredUsers.length }, (_, index) => index).sort(() => Math.random() - 0.5).slice(0, 3);
    const suggestionProfiles = randomIdx.map(idx => {
      const userProfile = filteredUsers[idx].data();

      return {
        userId: userProfile.userId,
        username: userProfile.username,
        email: userProfile.email,
        photoURL: userProfile.photoURL,
        followersCount: userProfile.followersCount,
      }
    });

    return suggestionProfiles;
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
    <section className="text-gray-200">
      <h1>Suggested acounts to follow</h1>
      {
        // list of suggested acounts to follow 
      }
      {suggestedUsers?.map((user) => (
        <div key={user.userId}>
          <MainPageUserProfileLink to={`profile/${user.userId}`} photoURL={user.photoURL} username={user.username} email={user.email} />
        </div>
      ))}
    </section>
  )
}

MainPageAccountSuggestions.whyDidYouRender = true;