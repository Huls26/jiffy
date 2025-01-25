import MainPageCommentBox from "./MainPageCommentBox";
import MainPageUserComment from "./MainPageUserComment";

import PropTypes from "prop-types";
import { useSearchParams } from "react-router-dom";

export default function MainPageCommentSection({ authUserPhoto }) {
  const [searchParams, setSearchParams] = useSearchParams();

  // If there is no comment query parameter, return null
  if (!searchParams.get('comment')) {
    return null;
  }

  console.log("code clean up")
  return (
    <section className='p-2 pb-4 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-11/12 bg-slate-950 rounded-lg z-50 text-gray-300 text-left md:block md:static md:-translate-x-0 md:translate-y-0 md:w-full md:max-w-md md:top-0 md:left-0 md:mt-5'>
      <div className="flex justify-between items-start">
        <h1 className="mb-2 text-gray-200 text-lg font-semibold">Comments [number of comments]</h1>
        <button
          type="button"
          className="text-red-500 hover:text-red-400 active:text-red-600"
          onClick={() => setSearchParams({})}
        >close</button>
      </div>

      <MainPageCommentBox authUserPhoto={authUserPhoto} />

      {/* Comment */}
      <MainPageUserComment authUserPhoto={authUserPhoto} />
      <MainPageUserComment authUserPhoto={authUserPhoto} />
      <MainPageUserComment authUserPhoto={authUserPhoto} />
    </section>
  )
}

MainPageCommentSection.propTypes = {
  authUserPhoto: PropTypes.string.isRequired,
  userId: PropTypes.string.isRequired,
}