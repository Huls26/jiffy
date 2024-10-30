import { GlobalContext } from '@/contexts/GlobalContextProvider';
import { reducerContext } from "@/contexts/ReducerContextProvider";
import { db, storage } from '@/lib/fb';

import { Timestamp, collection, doc, setDoc } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { useContext } from "react";

export default function MainPagePublishButton() {
  const [globalState] = useContext(GlobalContext);
  const [sidebarState, dispatch] = useContext(reducerContext);
  const { imageFile, postContentText } = sidebarState;

  const defaultPublishStyle = ("px-2 py-0.5 bg-sky-950 font-semibold rounded-md opacity-70");
  const activePublishStyle = ("px-2 py-0.5 bg-sky-950 font-semibold rounded-md hover:bg-sky-900 active:text-green-400");
  const publishBtnStyle = imageFile ? activePublishStyle : defaultPublishStyle;

  const publishContent = async () => {
    if (!imageFile) {
      console.error("No image file to upload.");
      return; // Exit if there is no image
    }

    dispatch({ type: "UPDATE_POST_MODAL_LOADING", payload: true });
    const postRef = doc(collection(db, "userPosts"));
    const storageRef = ref(storage, `contentImages/${globalState.userId}/${postRef.id}`);

    try {
      // Upload the image file
      await uploadBytes(storageRef, imageFile);
      // Get the download URL
      const downloadURL = await getDownloadURL(storageRef);

      const newPost = {
        postId: postRef.id,
        userId: globalState.userId,
        content: downloadURL, // Store the image URL
        textContent: postContentText, // Add any text content here if needed
        dateCreated: Timestamp.fromDate(new Date()), // Converts to Firestore Timestamp
        likes: 0,
        comments: []
      };

      // Set the document in Firestore
      await setDoc(postRef, newPost);
      dispatch({ type: "UPDATE_POST_MODAL_LOADING", payload: false });
    } catch (error) {
      console.error("Error publishing post:", error);
    }
  };

  return (
    <button
      type="button"
      className={publishBtnStyle}
      onClick={publishContent}
      disabled={!imageFile || !postContentText}
    >
      Publish
    </button>
  )
}
