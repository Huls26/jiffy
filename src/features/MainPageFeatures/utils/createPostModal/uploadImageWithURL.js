import { Timestamp, setDoc } from "firebase/firestore";
import { getDownloadURL, uploadBytes } from "firebase/storage";

export default async function uploadImageWithURL({
  storageRef,
  postRef,
  sidebarState,
  userId,
}) {
  const { imageFile, postContentText } = sidebarState;
  await uploadBytes(storageRef, imageFile);
  // Get the download URL
  const downloadURL = await getDownloadURL(storageRef);

  const newPost = {
    postId: postRef.id,
    userId: userId,
    content: downloadURL, // Store the image URL
    textContent: postContentText, // Add any text content here if needed
    dateCreated: Timestamp.fromDate(new Date()), // Converts to Firestore Timestamp
    likes: 0,
    comments: [],
  };

  await setDoc(postRef, newPost);
}
