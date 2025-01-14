import MainPagePostCard from './MainPagePostCard';

import PropTypes from "prop-types";

export default function MainPagePostsFeed({ userPosts }) {
  return (
    <section className='grid place-self-center space-y-3'>
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