import UserProfile from "@/components/UserProfile";
import { useState } from "react";

import PropTypes from "prop-types";

export default function MainPageUserComment({ authUserPhoto }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = (event) => {
    event.stopPropagation();
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="mb-4 flex items-center space-x-2">
      {console.log("change photoURL to the user's who is commenting")}
      <UserProfile photoURL={authUserPhoto} addedClassName={'w-10 h-10 hover:scale-110 shrink-0'} />
      <div className="w-full">
        <h1 className="mb-1 flex items-center justify-between font-semibold text-sky-400 leading-4">Username || email {<span className="text-gray-300 text-xs leading-3">date created</span>}</h1>
        <p className={`text-sm font-mono leading-4 ${isExpanded ? '' : 'truncate-multiline'}`}>The harmonic notes are flying and I'm happy with it. sample text right random words added more words sample text testing is this correct.</p>
        <button type="button" onClick={toggleExpand} className="text-blue-500 text-xs">
          {isExpanded ? 'Read Less' : 'Read More'}
        </button>
      </div>
    </div>
  )
}

MainPageUserComment.propTypes = {
  authUserPhoto: PropTypes.string.isRequired,
}