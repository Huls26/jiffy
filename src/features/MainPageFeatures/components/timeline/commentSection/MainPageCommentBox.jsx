import LoadingDot from "@/components/LoadingSkeleton/components/LoadingDot";
import UserProfile from "@/components/UserProfile";
import handleSubmitComment from "../../../utils/commentSection/handleSubmitComment";

import { useState } from "react";
import { useSearchParams } from "react-router-dom";

export default function MainPageCommentBox({ authUserPhoto }) {
  const [searchParams] = useSearchParams();
  const [commentValue, setCommentValue] = useState('');
  const [isLoading, setLoading] = useState(false);

  return (
    <>
      {isLoading && <LoadingDot />}
      <label htmlFor="timeline-comment-input" className='mb-6 flex space-x-2'>
        <div>
          <UserProfile photoURL={authUserPhoto} addedClassName={'w-8 h-8 hover:scale-110'} />
        </div>
        <input
          name='timeline-comment-input'
          type="text"
          placeholder="Write a comment..."
          className="w-full px-3 py-1 font-medium text-gray-950 text-sm sm:text-base rounded-full border-gray-950 focus:outline-none focus:ring-2 focus:ring-slate-600"
          id='timeline-comment-input'
          value={commentValue}
          onChange={(e) => setCommentValue(e.target.value)}
          maxLength="150"
        />
        <button
          type="button"
          className="px-2 bg-blue-500 rounded-full text-gray-300"
          onClick={
            () => handleSubmitComment(
              setLoading, setCommentValue, searchParams.get('comment'), commentValue)
          }
          disabled={(commentValue.length === 0) || isLoading}
        >
          &#10149;
        </button>
      </label>
    </>
  )
}
