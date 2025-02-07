import UserProfile from "@/components/UserProfile";
import useFetchUserData from "../../../hooks/commentSection/useFetchUserData";
import MainPageCommentItem from "./MainPageCommentItem";

import PropTypes from "prop-types";

export default function MainPageUserComment({ userId, content, createdAt }) {
  const userInfo = useFetchUserData(userId)

  return (
    <div className="mb-4 flex items-center space-x-2">
      <UserProfile photoURL={userInfo.photoURL} addedClassName={'w-10 h-10 hover:scale-110 shrink-0'} />
      <MainPageCommentItem
        content={content}
        username={userInfo.username}
        createdAt={createdAt}
      />
    </div>
  )
}

MainPageUserComment.propTypes = {
  userId: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  createAt: PropTypes.any.isRequired,
}