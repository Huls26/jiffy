import MainPageUserComment from "./MainPageUserComment";
import PropTypes from "prop-types";

export default function MainPageCommentList({ usersCommentList }) {
  return (
    <>
      {usersCommentList?.map(({ commentId, userId, content, createdAt }) => (
        <MainPageUserComment
          key={commentId}
          commentId={commentId}
          userId={userId}
          content={content}
          createdAt={createdAt}
        />
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