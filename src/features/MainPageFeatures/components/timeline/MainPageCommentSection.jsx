import UserProfile from "@/components/UserProfile";
import MainPageUserComment from "./commentSection/MainPageUserComment";

import PropTypes from "prop-types";

export default function MainPageCommentSection({ authUserPhoto }) {
  return (
    <section className='p-2 pb-4 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-11/12 bg-slate-950 rounded-lg z-50 text-gray-300'>
      <h1 className="mb-2 text-gray-200 text-lg font-semibold">Comments [number of comments]</h1>

      {/* current user Comment input */}
      <label htmlFor="timeline-comment-input" className='mb-6 grid grid-cols-12 gap-2'>
        <UserProfile photoURL={authUserPhoto} addedClassName={'w-8 h-8 hover:scale-110'} />
        <input
          name='timeline-comment-input'
          type="text"
          placeholder="Write a comment..."
          className="col-start-2 col-end-13 row-end-auto w-full px-3 py-1 font-medium text-gray-950 text-sm sm:text-base rounded-full border-gray-950 focus:outline-none focus:ring-2 focus:ring-slate-600"
          id='timeline-comment-input'
        />
      </label>

      {/* Comment */}
      <MainPageUserComment authUserPhoto={authUserPhoto} />
      <MainPageUserComment authUserPhoto={authUserPhoto} />
      <MainPageUserComment authUserPhoto={authUserPhoto} />
    </section>
  )
}

MainPageCommentSection.propTypes = {
  authUserPhoto: PropTypes.string.isRequired,
}