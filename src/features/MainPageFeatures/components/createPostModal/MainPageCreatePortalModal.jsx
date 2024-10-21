import { reducerContext } from "@/contexts/ReducerContextProvider";
// import MainPagePostCreationModal from "./MainPagePostCreationModal";

import { Suspense, lazy, useContext } from "react";
import { createPortal } from "react-dom";

// const MainPagePostCreationModal = lazy(() => import("./MainPagePostCreationModal"));

const MainPagePostCreationModal = lazy(() =>
  new Promise((resolve) => {
    setTimeout(() => resolve(import('./MainPagePostCreationModal')), 10000); // Delay of 10 seconds
  })
);

export default function MainPageCreatePortalModal() {
  const [sidebarContext] = useContext(reducerContext)
  const { isDisplayPostModalOpen } = sidebarContext

  if (!isDisplayPostModalOpen) return null;

  return createPortal(
    <Suspense fallback={<div className='fixed top-20 sm:top-32 left-1/2 -translate-x-1/2 flex space-x-2 justify-center items-center bg-none'>
      <div className='h-3 w-3 bg-red-400 rounded-full animate-bounce [animation-delay:-0.3s]' />
      <div className='h-3 w-3 bg-red-400 rounded-full animate-bounce [animation-delay:-0.15s]' />
      <div className='h-3 w-3 bg-red-400 rounded-full animate-bounce' />
      <span class='sr-only'>Loading...</span>
    </div>}>
      <MainPagePostCreationModal />
    </Suspense>,
    document.getElementById('root')
  )
}