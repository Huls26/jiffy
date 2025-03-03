import MainPageUserPostCard from './MainPageUserPostCard';
import "../style/MainPagePostCard.css";
import MainPagePostCardBtnSection from './MainPagePostCardBtnSection';

import PropTypes from "prop-types";

/**
 * MainPagePostCard component renders a user's post on the main page timeline.
 * It includes the user's profile, post content, and interaction buttons (like and comment).
 *
 * @param {Object} props - The component props.
 * @param {Object} props.userPost - The user post data.
 * @param {string} props.userPost.postId - The unique identifier for the post.
 * @param {string} props.userPost.textContent - The text content of the post.
 * @param {string} props.userPost.content - The image content of the post.
 *
 * @returns {JSX.Element} The rendered component.
 */
export default function MainPagePostCard({ userPost }) {
  return (
    <section
      className='space-y-2 bg-slate-950 text-start min-w-[270px] max-w-xl sm:rounded-lg border-4 border-gray-950 cursor-pointer'
    >
      {/* User profile link and relative time */}
      <MainPageUserPostCard userPost={userPost} />

      {/* button section */}
      {/* Container for the buttons */}
      <MainPagePostCardBtnSection userPost={userPost} />
    </section>);
}

MainPagePostCard.propTypes = {
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