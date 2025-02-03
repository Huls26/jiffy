import MainPagePostCard from './MainPagePostCard';

import PropTypes from "prop-types";

export default function MainPagePostsFeed({ userPosts }) {
  if (userPosts?.length === 0) return null;

  return (
    <section className='pb-72 md:pb-52 grid place-items-center h-screen space-y-3 overflow-y-auto'>
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