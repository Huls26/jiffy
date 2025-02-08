import MainPageCommentBox from "./MainPageCommentBox";
import MainPageUserComment from "./MainPageUserComment";
import useComment from "../../../hooks/commentSection/useComment";

import PropTypes from "prop-types";
import { useSearchParams } from "react-router-dom";


export default function MainPageCommentSection({ authUserPhoto }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const { usersComment, commentSize } = useComment();

  if (!searchParams.get('comment')) {
    return null;
  }

  return (
    <section className='p-2 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-11/12 bg-slate-950 rounded-lg z-50 text-gray-300 text-left md:block md:static md:-translate-x-0 md:translate-y-0 md:w-full md:max-w-md md:top-0 md:left-0 md:mt-5'>
      <div className="flex justify-between items-start">
        <h1 className="mb-2 text-gray-200 text-lg font-semibold">Comments ({commentSize})</h1>
        <button
          type="button"
          className="text-red-500 hover:text-red-400 active:text-red-600"
          onClick={() => setSearchParams({})}
        >close</button>
      </div>

      <MainPageCommentBox authUserPhoto={authUserPhoto} />

      {/* Comment */}
      {usersComment.map((doc) => {
        const { commentId, userId, content, createdAt } = doc;

        return (<MainPageUserComment
          key={commentId}
          userId={userId}
          content={content}
          createdAt={createdAt}
        />)
      }
      )}
    </section>
  )
}

MainPageCommentSection.propTypes = {
  authUserPhoto: PropTypes.string.isRequired,
  userId: PropTypes.string.isRequired,
}