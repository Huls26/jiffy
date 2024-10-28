import { GlobalContext } from "@/contexts/GlobalContextProvider";
import { reducerContext } from "@/contexts/ReducerContextProvider";
import MainPageUserProfileLink from '../../components/userInfo/MainPageUserProfileLink';
import MainPagePostModalBtnSection from './MainPagePostModalBtnSection';

import { useContext, } from "react";

export default function MainPagePostCreationModal() {
  const [globalState] = useContext(GlobalContext);
  const { username, photoURL } = globalState;
  const [sidebarState, dispatch] = useContext(reducerContext)

  console.log(sidebarState.postContentText);
  // Rest of the modal content goes here...
  return (
    <div className="
      fixed top-24 left-2/4 -translate-x-1/2 
      px-3 py-2
      w-10/12 max-w-3xl
    bg-slate-950
      border-2 border-gray-300 rounded-lg
      space-y-2
    ">
      <div className="flex">
        <MainPageUserProfileLink
          to={`profile/${username}`}
          photoURL={photoURL}
          username={username}
          email={''}
        />
      </div>
      <input
        type="text"
        className="w-full bg-slate-950 outline-none 
        font-semibold text-gray-400 text-sm sm:text-base"
        placeholder="Publish a Post"
        maxLength="100"
        onChange={(e) =>
          dispatch({ type: 'SET_POST_CONTENTTEXT', payload: e.target.value })}
        value={sidebarState.postContentText}
      />
      <MainPagePostModalBtnSection />
    </div>
  )
}
