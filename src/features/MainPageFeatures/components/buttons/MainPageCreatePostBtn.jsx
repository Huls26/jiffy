import { reducerContext } from "@/contexts/ReducerContextProvider";
import { useContext } from "react";

export default function MainPageCreatePostBtn() {
  const [, dispatch] = useContext(reducerContext)

  function displayPostModal() {
    dispatch({ type: "UPDATE_DISPLAY_POST_MODAL" })
  }
  return (
    <div className="ml-auto">
      <button
        type="button"
        className="text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:text-gray-600 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 active:opacity-70 font-bold rounded-lg text-sm px-2.5 py-0.5 text-center me-1"
        onClick={displayPostModal}
      >
        Post
      </button>
    </div>
  )
}