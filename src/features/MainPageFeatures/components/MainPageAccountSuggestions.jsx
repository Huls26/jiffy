import { GlobalContext } from "@/contexts/GlobalContextProvider";
import { db } from '@/lib/fb';
import { collection, getDocs, query, where } from "firebase/firestore";
import { useContext } from "react";

export default function MainPageAccountSuggestions() {
  // Display different users
  // fetch all users that the current user is not following
  // recommend at least 3-5 users
  // display 3-5 random users for know
  const [globalState] = useContext(GlobalContext);
  const { userId } = globalState;

  // fetch Data 
  async function fetchUsers() {
    const q = query(collection(db, 'users'), where('following', 'not-in', [userId]),);
    const querySnapshot = await getDocs(q);
    const filteredUsers = querySnapshot.docs.filter(doc => doc.data().userId !== userId);

    for (const doc of filteredUsers) {
      console.log(doc.data())
    }
  }

  fetchUsers()


  return <div>MainPageAccountSuggestions</div>;
}

MainPageAccountSuggestions.whyDidYouRender = true;