// import MainPagePostCreationModal from "./MainPagePostCreationModal";
import LoadingDot from "@/components/LoadingSkeleton/components/LoadingDot";
import { reducerContext } from "@/contexts/ReducerContextProvider";

import { Suspense, lazy, useContext } from "react";
import { createPortal } from "react-dom";

const MainPagePostCreationModal = lazy(() => import("./MainPagePostCreationModal"));

// testing
// const MainPagePostCreationModal = lazy(() =>
//   new Promise((resolve) => {
//     setTimeout(() => resolve(import('./MainPagePostCreationModal')), 10000); // Delay of 10 seconds
//   })
// );

export default function MainPageCreatePortalModal() {
  const [sidebarContext] = useContext(reducerContext)
  const { isDisplayPostModalOpen, postContentLoading } = sidebarContext

  if (!isDisplayPostModalOpen) return null;

  if (postContentLoading) return <LoadingDot />

  return createPortal(
    <Suspense fallback={<LoadingDot />}>
      <MainPagePostCreationModal />
    </Suspense>,
    document.getElementById('root')
  )
}