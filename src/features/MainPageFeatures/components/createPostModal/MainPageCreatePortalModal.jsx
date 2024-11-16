import LoadingDot from "@/components/LoadingSkeleton/components/LoadingDot";
import { reducerContext } from "@/contexts/ReducerContextProvider";
import { INITIAL_STATE, reducerMethod } from "../../context/MainPageModalContextReducer";

import { Suspense, createContext, lazy, useContext, useReducer } from "react";
import { createPortal } from "react-dom";

const MainPagePostCreationModal = lazy(() => import("./MainPagePostCreationModal"));

// testing
// const MainPagePostCreationModal = lazy(() =>
//   new Promise((resolve) => {
//     setTimeout(() => resolve(import('./MainPagePostCreationModal')), 10000); // Delay of 10 seconds
//   })
// );

const PostPortalModal = createContext();
export { PostPortalModal };

export default function MainPageCreatePortalModal() {
  const [sidebarContext] = useContext(reducerContext);
  const { isDisplayPostModalOpen } = sidebarContext;
  const [modalContext, dispatch] = useReducer(reducerMethod, INITIAL_STATE);
  const { postContentLoading } = modalContext;

  if (!isDisplayPostModalOpen) return null;

  if (postContentLoading) return <LoadingDot />

  return createPortal(
    <Suspense fallback={<LoadingDot />}>
      <PostPortalModal.Provider value={[modalContext, dispatch]}>
        <MainPagePostCreationModal />
      </PostPortalModal.Provider>
    </Suspense>,
    document.getElementById('root')
  )
}