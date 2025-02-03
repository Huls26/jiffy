import MainPagePostCard from './MainPagePostCard';
import './style/MainPagePostsFeed.css'

import PropTypes from "prop-types";

export default function MainPagePostsFeed({ userPosts }) {
  if (userPosts?.length === 0) return null;

  return (
    <section className='pb-72 md:pb-52 grid place-items-center h-screen space-y-7 overflow-y-auto timeline-scroll'>
      {userPosts?.map((userPost) => {
        return (
          <MainPagePostCard
            key={userPost.postId}
            userPost={userPost}
          />
        );
      })}
    </section>
  )
}

MainPagePostsFeed.propTypes = {
  userPosts: PropTypes.arrayOf(PropTypes.object),
};