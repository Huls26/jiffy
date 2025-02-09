import { GlobalContext } from "@/contexts/GlobalContextProvider";

import PropTypes from "prop-types";
import { useContext } from "react";
import { useSearchParams } from "react-router-dom";

export default function MainPageAuthFilterOptions({ isDisplay = [] }) {
  const [globalState] = useContext(GlobalContext);
  const [searchParams, setSearchParams] = useSearchParams();
  const activeStyle = "bg-sky-500 hover:bg-gray-700 text-gray-200 font-bold py-1 px-3 first:rounded-l last:rounded-r";
  const inactiveStyle = "bg-gray-900 hover:bg-gray-700 active:bg-sky-500 text-gray-200 font-bold py-1 px-3 first:rounded-l last:rounded-r"

  if (!globalState.userLogin) {
    return (
      <h1 className="mb-5 px-4 font-semibold text-sm sm:text-lg text-gray-100 leading-5">
        Welcome! Create an account or log in to explore the app and share your
        posts.
      </h1>);
  }

  if (isDisplay?.length === 0 || !globalState?.userLogin) {
    return null;
  }

  return (
    <section className='text-sm sm:text-base mb-3 inline-flex'>
      <button
        type='button'
        className={!searchParams.get("filter") ? activeStyle : inactiveStyle}
        aria-label="Show All Posts"
        onClick={() => setSearchParams({})}
      >
        All
      </button>
      <button
        type='button'
        className={searchParams.get("filter") === "likes" ? activeStyle : inactiveStyle}
        aria-label="Show Liked Posts"
        onClick={() => setSearchParams({ filter: "likes" })}
      >
        Likes
      </button>
      <button
        type='button'
        className={searchParams.get("filter") === "following" ? activeStyle : inactiveStyle}
        aria-label="Show Following Posts"
        onClick={() => setSearchParams({ filter: "following" })}
      >
        Following
      </button>
    </section >
  )
}

MainPageAuthFilterOptions.propTypes = {
  isDisplay: PropTypes.array,
};
