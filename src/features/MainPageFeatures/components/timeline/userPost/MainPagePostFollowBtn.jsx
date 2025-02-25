import { GlobalContext } from "@/contexts/GlobalContextProvider";
import { useContext } from "react";
import { db } from "@/lib/fb";
import getUserData from "../../../utils/timeline/userPost/getUserData";
import isUserFollowing from "../../../utils/timeline/userPost/isUserFollowing";

import {
  arrayRemove,
  arrayUnion,
  doc,
  getDoc,
  increment,
  updateDoc,
} from "firebase/firestore";

export default function MainPagePostFollowBtn({ postData }) {
  const [globalState] = useContext(GlobalContext);

  isUserFollowing(globalState.userId, postData.userId).then((isFollowing) => {
    console.log(isFollowing);
  })

  async function handleFollowUser() {
    const currentUserRef = doc(db, "users", globalState.userId);
    const usersFollowingRef = doc(db, "users", postData.userId);

    try {
      // Fetch the current user's document
      const currentUserData = await getUserData(globalState.userId);
      const followingData = await getUserData(postData.userId);

      if (!currentUserData) {
        // Check if the document exists
        throw new Error(`User with ID ${globalState.userId} does not exist.`);
      }
      const currentFollowing = currentUserData.following || [];

      // Check if the current user is following the target user
      const isUserFollowed = currentFollowing.includes(postData.userId);

      if (!isUserFollowed) {
        // Add the user to the following list and increment followers count
        await updateDoc(currentUserRef, {
          following: arrayUnion(postData.userId),
        });
        await updateDoc(usersFollowingRef, {
          followers: arrayUnion(globalState.userId),
          followersCount: increment(1),
        });

      } else {
        // Remove the user from the following list and decrement followers count
        await updateDoc(currentUserRef, {
          following: arrayRemove(postData.userId),
        });
        await updateDoc(usersFollowingRef, {
          followers: arrayRemove(globalState.userId),
          followersCount: followingData.followersCount > 0 ? increment(-1) : 0,
        });
      }
    } catch (err) {
      console.error("Error following user:", err);
    }
  }

  if (postData.userId !== globalState.userId) {
    return (
      <button
        type="button"
        className="text-gray-200 font-semibold hover:text-gray-400"
        onClick={handleFollowUser}
      >
        Follow
      </button>
    );
  }

  return null;
}
