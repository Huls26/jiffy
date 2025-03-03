import { useSearchParams } from "react-router-dom";
import PropTypes from "prop-types";

/**
 * Custom React hook for handling the comment button action in a user post.
 * It uses the `react-router-dom` `useSearchParams` hook to manage query parameters.
 *
 * @param {Object} props - The props passed to the hook.
 * @param {Object} props.userPost - The user post object containing post details.
 * @param {string} props.userPost.postId - The unique identifier of the post.
 * @param {any} props.userPost.dateCreated - The date when the post was created.
 * @param {string} props.userPost.textContent - The text content of the post.
 * @param {string} props.userPost.content - The content of the post (may include HTML).
 * @param {string} props.userPost.username - The username of the user who posted.
 * @param {string} props.userPost.photoURL - The URL of the user's profile photo.
 * @param {string} props.userPost.email - The email of the user who posted.
 *
 * @returns {Object} - An object containing the current search parameters and a function to handle the comment button click.
 */
export default function useActionLikeComment(userPost) {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleCommentButton = () => {
    if (!searchParams.get('comment')) {
      setSearchParams({ comment: userPost.postId });
    } if (searchParams.get('comment') !== userPost.postId) {
      setSearchParams({ comment: userPost.postId });
    }
    else {
      setSearchParams({});
    }
  }
  return (
    { searchParams, handleCommentButton }
  )
}


useActionLikeComment.propTypes = {
  userPost: PropTypes.shape({
    postId: PropTypes.string.isRequired,
    dateCreated: PropTypes.any.isRequired,
    textContent: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    photoURL: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
  }).isRequired,
};