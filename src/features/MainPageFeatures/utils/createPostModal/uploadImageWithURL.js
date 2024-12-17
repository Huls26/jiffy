import { Timestamp, setDoc } from "firebase/firestore";
import { getDownloadURL, uploadBytes } from "firebase/storage";

export default async function uploadImageWithURL({
  storageRef,
  postRef,
  sidebarState,
  userContext,
}) {
  const { imageFile, postContentText } = sidebarState;
  const { photoURL, email, username, userId } = userContext;
  await uploadBytes(storageRef, imageFile);
  // Get the download URL
  const downloadURL = await getDownloadURL(storageRef);

  const newPost = {
    postId: postRef.id,
    userId,
    content: downloadURL, // Store the image URL
    textContent: postContentText, // Add any text content here if needed
    dateCreated: Timestamp.fromDate(new Date()), // Converts to Firestore Timestamp
    likes: 0,
    likedUsers: [],
    comments: [],
    photoURL,
    username,
    email,
  };

  await setDoc(postRef, newPost);
}
