import { GlobalContext } from '@/contexts/GlobalContextProvider';
import { PostPortalModal } from "@/features/MainPageFeatures/components/createPostModal/MainPageCreatePortalModal";
import postStoreRef from '../../utils/createPostModal/postStorageRef';
import uploadImageWithURL from '../../utils/createPostModal/uploadImageWithURL';

import { useContext } from "react";

export default function usePostUpload() {
  const [globalState] = useContext(GlobalContext);
  const [sidebarState, dispatch] = useContext(PostPortalModal);
  const { imageFile, postContentText } = sidebarState;

  const publishContent = async () => {
    if (!imageFile) {
      console.error("No image file to upload.");
      return; // Exit if there is no image
    }
    dispatch({ type: "UPDATE_POST_MODAL_LOADING", payload: true });
    const { postRef, storageRef } = postStoreRef(globalState);

    try {
      await uploadImageWithURL({ storageRef, postRef, sidebarState, userContext: globalState });
    } catch (error) {
      console.error("Error publishing post:", error);
    } finally {
      dispatch({ type: "UPDATE_POST_MODAL_LOADING", payload: false });
      dispatch({ type: "RESET_CONTENTTEXT" })
    }
  };
  return (
    { postContentText, imageFile, publishContent }
  )
}
