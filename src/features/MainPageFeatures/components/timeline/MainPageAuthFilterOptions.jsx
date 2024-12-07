import { GlobalContext } from "@/contexts/GlobalContextProvider";

import PropTypes from "prop-types";
import { useContext } from "react";

export default function MainPageAuthFilterOptions({ isDisplay }) {
  const [globalState] = useContext(GlobalContext);

  if (!globalState.userLogin) {
    return (
      <h1 className="font-semibold text-sm sm:text-lg text-gray-100 leading-5">
        Welcome! Create an account or log in to explore the app and share your
        posts.
      </h1>);
  }

  if (isDisplay.length === 0 || !globalState.userLogin) {
    return null;
  }

  return (
    <section className='inline-flex' >
      <button
        type='button'
        className="bg-sky-500 bg-gray-900 hover:bg-gray-700 text-gray-200 font-bold py-1 px-3 rounded-l"
      >
        All
      </button>
      <button
        type='button'
        className="bg-gray-900 hover:bg-gray-700 active:bg-sky-500 text-gray-200 font-bold py-1 px-3"
      >
        Likes
      </button>
      <button
        type='button'
        className="bg-gray-900 hover:bg-gray-700 active:bg-sky-500 text-gray-200 font-bold py-1 px-3 rounded-r"
      >
        Following
      </button>
    </section >
  )
}

MainPageAuthFilterOptions.propTypes = {
  isDisplay: PropTypes.array,
};

MainPageAuthFilterOptions.whyDidYouRender = true;