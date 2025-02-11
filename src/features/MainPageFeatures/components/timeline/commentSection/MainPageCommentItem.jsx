import useCheckMultiline from '../../../hooks/commentSection/useCheckMultiline';
import MainPageReadMoreBtn from './MainPageReadMoreBtn';
import formatRelativeTime from "../../../utils/formatRelativeTime";

import PropTypes from 'prop-types';
import { useState } from 'react';

export default function MainPageCommentItem({ username, content, createdAt, commentId }) {
  const { paragraphRef, isMultiLine, } = useCheckMultiline()
  const [isExpanded, setIsExpanded] = useState(false);
  const relativeTime = formatRelativeTime(createdAt);
  const truncatedStyle = "text-sm font-mono leading-4 truncate-multiline";
  const defaultStyle = "text-sm font-mono leading-4";
  const isTruncatedStyle = isExpanded ? defaultStyle : truncatedStyle;

  console.log(commentId);
  return (
    <div className="w-full">
      <div className="flex items-center justify-between">
        <h1 className='font-semibold text-sky-400 leading-4'>
          {username}
          <span className="ml-2 text-gray-500 text-xs leading-3">{relativeTime}</span>
        </h1>

        <button type="button" className='text-sm text-red-600 hover:text-red-500'>remove</button>
      </div>

      <p ref={paragraphRef} className={isTruncatedStyle}>
        {content}
      </p>

      <MainPageReadMoreBtn
        isMultiLine={isMultiLine}
        isExpanded={isExpanded}
        setIsExpanded={setIsExpanded}
      />
    </div>
  )
}

MainPageCommentItem.propTypes = {
  commentId: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  createdAt: PropTypes.any.isRequired,
};