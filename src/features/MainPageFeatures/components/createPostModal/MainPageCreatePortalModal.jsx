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

  console.log("code split this component")
  return createPortal(
    <Suspense fallback={<div class='flex space-x-2 justify-center items-center bg-white h-screen dark:invert'>
      <span class='sr-only'>Loading...</span>
      <div clasName='h-8 w-8 bg-black rounded-full animate-bounce [animation-delay:-0.3s]' />
      <div className='h-8 w-8 bg-black rounded-full animate-bounce [animation-delay:-0.15s]' />
      <div className='h-8 w-8 bg-black rounded-full animate-bounce' />
    </div>}>
      <MainPagePostCreationModal />
    </Suspense>,
    document.getElementById('root')
  )
}