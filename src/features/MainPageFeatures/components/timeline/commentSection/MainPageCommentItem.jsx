import useCheckMultiline from '../../../hooks/commentSection/useCheckMultiline';
import MainPageReadMoreBtn from './MainPageReadMoreBtn';
import formatRelativeTime from "../../../utils/formatRelativeTime";

import PropTypes from 'prop-types';
import { useState } from 'react';

export default function MainPageCommentItem({ username, content, createdAt }) {
  const { paragraphRef, isMultiLine, } = useCheckMultiline()
  const [isExpanded, setIsExpanded] = useState(false);
  const relativeTime = formatRelativeTime(createdAt);

  return (
    <div className="w-full">
      <h1 className="mb-1 flex items-center justify-between font-semibold text-sky-400 leading-4">{username} <span className="text-gray-300 text-xs leading-3">{relativeTime}</span></h1>
      <p ref={paragraphRef} className={`text-sm font-mono leading-4 ${isExpanded ? '' : 'truncate-multiline'}`}>
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
  content: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  createdAt: PropTypes.any.isRequired,
};