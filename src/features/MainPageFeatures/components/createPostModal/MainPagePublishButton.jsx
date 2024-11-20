import { GlobalContext } from '@/contexts/GlobalContextProvider';
import publishBtnStyle from '../../styles/publishBtnStyle';
import postStoreRef from '../../utils/createPostModal/postStorageRef';
import uploadImageWithURL from '../../utils/createPostModal/uploadImageWithURL';
import { PostPortalModal } from "./MainPageCreatePortalModal";

import { useContext } from "react";

export default function MainPagePublishButton() {
  const [globalState] = useContext(GlobalContext);
  const [sidebarState, dispatch] = useContext(PostPortalModal);
  const { imageFile, postContentText } = sidebarState;

  // console.log("reset state after published content")
  // console.log("remove unuse mainPage sidebar state")
  const publishContent = async () => {

    if (!imageFile) {
      console.error("No image file to upload.");
      return; // Exit if there is no image
    }
    dispatch({ type: "UPDATE_POST_MODAL_LOADING", payload: true });
    const { postRef, storageRef } = postStoreRef(globalState);

    try {
      await uploadImageWithURL({ storageRef, postRef, sidebarState, userId: globalState.userId });
    } catch (error) {
      console.error("Error publishing post:", error);
    } finally {
      dispatch({ type: "UPDATE_POST_MODAL_LOADING", payload: false });
      dispatch({ type: "RESET_CONTENTTEXT" })
    }
  };

  return (
    <button
      type="button"
      className={publishBtnStyle(imageFile && postContentText)}
      onClick={publishContent}
      disabled={!imageFile || !postContentText}
    >
      Publish
    </button>
  )
}
