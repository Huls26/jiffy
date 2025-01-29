import UserProfile from "@/components/UserProfile";
import { db } from "@/lib/fb";

import { doc, getDoc } from "firebase/firestore";
import PropTypes from "prop-types";
import { useEffect, useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";
import MainPageReadMoreBtn from "./MainPageReadMoreBtn";

export default function MainPageUserComment({ userId, commentData }) {
  const [isExpanded, setIsExpanded] = useState(false);
  // Hook to get search parameters from the URL
  const [searchParams] = useSearchParams();
  const commentId = searchParams.get("comment"); // Get the comment ID from the URL

  const paragraphRef = useRef(null); // Create a reference to the paragraph element
  const [isMultiLine, setIsMultiLine] = useState(false);// State to track if the comment is multiline

  // Function to fetch user data from the database
  async function fetchUserData() {
    const docRef = doc(db, "userPosts", commentId, "comments", userId); // Reference to the document in the database
    const docSnap = await getDoc(docRef); // Fetch the document

    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
    } else {
      // docSnap.data() will be undefined in this case
      console.log("No such document!");
    }
  }

  // make this feature responsive
  // Effect to make the feature responsive
  useEffect(() => {
    if (paragraphRef.current) {
      const paragraph = paragraphRef.current; // Get the current paragraph element

      // Check if the element is truncated
      const isElementTruncated = paragraph.scrollHeight > paragraph.clientHeight ||
        paragraph.scrollWidth > paragraph.clientWidth;

      // Check if the paragraph is multiline
      setIsMultiLine(isElementTruncated);
    }
  }, []);

  return (
    <div className="mb-4 flex items-center space-x-2">
      {console.log("change photoURL to the user's who is commenting")}
      <UserProfile photoURL={''} addedClassName={'w-10 h-10 hover:scale-110 shrink-0'} />
      <div className="w-full">
        <h1 className="mb-1 flex items-center justify-between font-semibold text-sky-400 leading-4">Username || email {<span className="text-gray-300 text-xs leading-3">date created</span>}</h1>
        <p ref={paragraphRef} className={`text-sm font-mono leading-4 ${isExpanded ? '' : 'truncate-multiline'}`}>
          {commentData}
        </p>

        <MainPageReadMoreBtn
          isMultiLine={isMultiLine}
          isExpanded={isExpanded}
          setIsExpanded={setIsExpanded}
        />
      </div>
    </div>
  )
}

MainPageUserComment.propTypes = {
  userId: PropTypes.string.isRequired,
  commentData: PropTypes.string.isRequired,
}