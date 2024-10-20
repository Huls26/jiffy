import { reducerContext } from "@/contexts/ReducerContextProvider";
import { useContext } from "react";
import { createPortal } from "react-dom";
import MainPagePostCreationModal from "./MainPagePostCreationModal";

export default function MainPageCreatePortalModal() {
  const [sidebarContext] = useContext(reducerContext)
  const { isDisplayPostModalOpen } = sidebarContext

  if (!isDisplayPostModalOpen) return null;

  return createPortal(
    <MainPagePostCreationModal />,
    document.getElementById('root')
  )
}