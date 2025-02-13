import MainPageUserComment from "./MainPageUserComment";
import { UserCommentContext } from "@/features/MainPageFeatures/context/MainPageUserCommentDataContext"
import PropTypes from "prop-types";

export default function MainPageCommentList({ usersCommentList }) {
  return (
    <>
      {usersCommentList?.map((commentData) => (
        <UserCommentContext.Provider
          key={commentData.id}
          value={commentData}>
          <MainPageUserComment />
        </UserCommentContext.Provider>
      ))}
    </>
  )
}

MainPageCommentList.propTypes = {
  usersCommentList: PropTypes.arrayOf(
    PropTypes.shape({
      commentId: PropTypes.string.isRequired,
      userId: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
      createdAt: PropTypes.any.isRequired
    })
  ),
};