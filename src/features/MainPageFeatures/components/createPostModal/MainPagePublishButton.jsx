import { GlobalContext } from '@/contexts/GlobalContextProvider';
import { reducerContext } from "@/contexts/ReducerContextProvider";
import publishBtnStyle from '../../styles/publishBtnStyle';
import postStoreRef from '../../utils/createPostModal/postStorageRef';
import uploadImageWithURL from '../../utils/createPostModal/uploadImageWithURL';

import { useContext } from "react";

export default function MainPagePublishButton() {
  const [globalState] = useContext(GlobalContext);
  const [sidebarState, dispatch] = useContext(reducerContext);
  const { imageFile, postContentText } = sidebarState;

  console.log("create new context only for create post modal to prevent the sidebar context from updating context that may rerender the component")
  const publishContent = async () => {

    if (!imageFile) {
      console.error("No image file to upload.");
      return; // Exit if there is no image
    }

    dispatch({ type: "UPDATE_POST_MODAL_LOADING", payload: true });
    const { postRef, storageRef } = postStoreRef(globalState);

    try {
      uploadImageWithURL({ storageRef, postRef, sidebarState, userId: globalState.userId })
      dispatch({ type: "UPDATE_POST_MODAL_LOADING", payload: false });
    } catch (error) {
      console.error("Error publishing post:", error);
    }
  };

  return (
    <button
      type="button"
      className={publishBtnStyle(imageFile)}
      onClick={publishContent}
      disabled={!imageFile || !postContentText}
    >
      Publish
    </button>
  )
}
