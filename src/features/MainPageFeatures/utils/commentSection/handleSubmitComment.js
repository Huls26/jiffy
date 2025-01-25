import { auth, db } from "@/lib/fb";

import { Timestamp, collection, doc, setDoc } from "firebase/firestore";

export default async function submitComment(
  setLoading,
  setCommentValue,
  postId,
  commentValue,
) {
  const userId = auth.currentUser.uid;

  setLoading(true);
  try {
    // Generate a document reference with an auto-generated ID
    const commentRef = doc(collection(db, "userPosts", postId, "comments"));

    // Get the auto-generated ID
    const commentId = commentRef.id;

    // Use the generated ID to create a new document
    await setDoc(commentRef, {
      commentId,
      content: commentValue,
      createdAt: Timestamp.fromDate(new Date()),
      userId,
    });
  } catch (error) {
    console.error("Error adding document: ", error);
  } finally {
    setLoading(false);
    setCommentValue("");
  }
}
