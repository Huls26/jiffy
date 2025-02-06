import UserProfile from "@/components/UserProfile";
import { db } from "@/lib/fb";
import formatRelativeTime from "../../../utils/timeline/formatRelativeTime";

import { doc, getDoc } from "firebase/firestore";
import PropTypes from "prop-types";
import { useEffect, useRef, useState } from "react";
import MainPageReadMoreBtn from "./MainPageReadMoreBtn";

export default function MainPageUserComment({ userId, content, createdAt }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const paragraphRef = useRef(null); // Create a reference to the paragraph element
  const [isMultiLine, setIsMultiLine] = useState(false);// State to track if the comment is multiline
  const [userInfo, setUserInfo] = useState({});
  const relativeTime = formatRelativeTime(createdAt);

  useEffect(() => {
    if (!userId) return; // Prevent fetching if userId is missing

    async function fetchUserData() {
      try {
        const docRef = doc(db, "users", userId); // Create a reference to the user document in the database
        const docSnap = await getDoc(docRef); // Fetch the document snapshot

        // Check if the document exists
        if (docSnap.exists()) {
          // If it exists, set the user info state with the document data
          setUserInfo(docSnap.data());
        } else {
          // If it doesn't exist, log an error and set the user info state to an empty object
          console.error("No such document!");
          setUserInfo({});
        }
      } catch (error) {
        // Catch and log any errors that occur during the fetch operation
        console.error("Error fetching user data:", error);
        // Set the user info state to an empty object in case of an error
        setUserInfo({});
      }
    }

    // Call the fetchUserData function to fetch the user data
    fetchUserData();
  }, [userId]); // Runs when userId changes

  // Effect to make the feature responsive
  useEffect(() => {
    const checkMultiline = () => {
      if (paragraphRef.current) {
        const paragraph = paragraphRef.current;

        // Check if the element is truncated
        const isElementTruncated =
          paragraph.scrollHeight > paragraph.clientHeight ||
          paragraph.scrollWidth > paragraph.clientWidth;

        // Update state based on truncation check
        setIsMultiLine(isElementTruncated);
      }
    };

    // Run on mount
    checkMultiline();

    // Attach resize listener
    window.addEventListener("resize", checkMultiline);

    // Cleanup listener on unmount
    return () => window.removeEventListener("resize", checkMultiline);
  }, []);

  return (
    <div className="mb-4 flex items-center space-x-2">
      <UserProfile photoURL={userInfo.photoURL} addedClassName={'w-10 h-10 hover:scale-110 shrink-0'} />
      <div className="w-full">
        <h1 className="mb-1 flex items-center justify-between font-semibold text-sky-400 leading-4">{userInfo.username} <span className="text-gray-300 text-xs leading-3">{relativeTime}</span></h1>
        <p ref={paragraphRef} className={`text-sm font-mono leading-4 ${isExpanded ? '' : 'truncate-multiline'}`}>
          {content}
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
  content: PropTypes.string.isRequired,
  createAt: PropTypes.any.isRequired,
}