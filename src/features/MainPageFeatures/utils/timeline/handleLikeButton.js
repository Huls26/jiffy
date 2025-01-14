import { db } from "@/lib/fb";
import {
  arrayRemove,
  arrayUnion,
  doc,
  increment,
  updateDoc,
} from "firebase/firestore";

export default async function handleLikeButton(
  dispatch,
  userPost,
  buttonState,
  currentUserId,
) {
  dispatch({ type: "LIKE_POST" });
  const userPostRef = doc(db, "userPosts", userPost.postId);

  try {
    await updateDoc(userPostRef, {
      likedUsers: buttonState.likeButton
        ? arrayRemove(currentUserId)
        : arrayUnion(currentUserId),
      likes: buttonState.likeButton ? increment(-1) : increment(1),
    });
  } catch (error) {
    console.error("Error updating like status:", error);
    // Optional: Dispatch an error state or revert the state
  }
}
