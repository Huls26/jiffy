import { GlobalContext } from '@/contexts/GlobalContextProvider';
import { reducerContext } from "@/contexts/ReducerContextProvider";

import { } from "firebase/firestore";
import { useContext } from "react";

export default function MainPagePostModalBtnSection() {
  const [globalState] = useContext(GlobalContext);
  const [sidebarState, dispatch] = useContext(reducerContext);
  const { imageName } = sidebarState;

  // const handlePublishPost = async () => {
  //   const postId = doc(db).id;
  //   const newPost = {
  //     postId,
  //     userId: globalState.userId,
  //     content: imageName,
  //     dateCreated: Timestamp.fromDate(new Date()), // Converts to Firestore Timestamp
  //     likes: 0,
  //     comments: []
  //   };
  //   await setDoc(doc(db, "userPosts", postId), newPost);
  // }

  const handleFileChange = (event) => {
    const file = event.target.files[0]; // Get the selected file

    dispatch({ type: "UPDATE_IMAGE_NAME", imageName: file.name });
  };

  function closeModalEvent() {
    // the state of display Portal modal
    // will be true when this component is opened
    // with this information we can use this to close this component modal
    // onClick={closeModalEvent}
    dispatch({ type: "UPDATE_DISPLAY_POST_MODAL" })
  }

  return (
    <div className="flex justify-between text-gray-200">
      <label
        htmlFor="postInputFile"
        className="block w-24 xs300:w-1/2 my-auto
        text-gray-400 text-xs sm:text-sm 
        hover:opacity-75 active:opacity-60 
        whitespace-nowrap overflow-hidden text-ellipsis
        "
      >
        <div className="inline-block mr-1 sm:ml-1 sm:mr-2 sm:mb-0 align-middle sm:scale-125">
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none">
            <path fillRule="evenodd" clipRule="evenodd" d="M7 7C5.34315 7 4 8.34315 4 10C4 11.6569 5.34315 13 7 13C8.65685 13 10 11.6569 10 10C10 8.34315 8.65685 7 7 7ZM6 10C6 9.44772 6.44772 9 7 9C7.55228 9 8 9.44772 8 10C8 10.5523 7.55228 11 7 11C6.44772 11 6 10.5523 6 10Z" fill="currentColor" />
            <path fillRule="evenodd" clipRule="evenodd" d="M3 3C1.34315 3 0 4.34315 0 6V18C0 19.6569 1.34315 21 3 21H21C22.6569 21 24 19.6569 24 18V6C24 4.34315 22.6569 3 21 3H3ZM21 5H3C2.44772 5 2 5.44772 2 6V18C2 18.5523 2.44772 19 3 19H7.31374L14.1924 12.1214C15.364 10.9498 17.2635 10.9498 18.435 12.1214L22 15.6863V6C22 5.44772 21.5523 5 21 5ZM21 19H10.1422L15.6066 13.5356C15.9971 13.145 16.6303 13.145 17.0208 13.5356L21.907 18.4217C21.7479 18.7633 21.4016 19 21 19Z" fill="currentColor" />
          </svg>
        </div>
        {imageName}
      </label>
      <input
        name="postInputFile"
        id="postInputFile"
        type="file"
        accept="image/*"
        className="hidden"
        onChange={handleFileChange}
      />
      <div className="space-x-1 sm:space-x-2 text-xs sm:text-base">
        <button
          type="button"
          className="font-semibold hover:text-red-500 active:text-red-400"
          onClick={closeModalEvent}
        >
          Cancel
        </button>
        <button
          type="button"
          className="px-2 py-0.5 bg-sky-950 font-semibold rounded-md hover:bg-sky-900 active:text-green-400"
          onClick={handlePublishPost}
        >
          Publish
        </button>
      </div>
    </div>
  )
}
