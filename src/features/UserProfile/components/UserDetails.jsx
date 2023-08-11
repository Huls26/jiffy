import PropTypes from 'prop-types';

import ContentBtn from '@components/Btn/ContentBtn';
import CreatePostBtn from '@components/Header/components/CreatePostBtn';
import { message as defaultDescription } from '@default';
import useViewContentHooks from '@features/ViewContent/hooks/useViewContentHooks';
import useCheckId from '@hooks/useCheckId';

import ProfilePhoto from './ProfilePhoto';

export default function UserDetails({ details }) {
  const {
    dispatch, followers, btnBgFollow, userId,
  } = useViewContentHooks();
  const {
    userImg, username, email, posts, description,
  } = details;
  const isOwnProfile = useCheckId();
  const FollowBtn = isOwnProfile
    ? <CreatePostBtn />
    : (
      <ContentBtn
        text="follow"
        bg={btnBgFollow}
        onClick={() => dispatch({ type: 'USER_FOLLOW', userId })}
      />
    );

  return (
    <section className="px-6 py-5 mb-3">
      <section className="w-full flex items-center">
        <ProfilePhoto userImg={userImg} />

        <section className="ml-3 font-LM leading-none text-justify text-dark-2">
          <h1 className="mb-2 font-bold font-A text-3xl">{username || 'username' }</h1>
          <div className="text-sm space-y-1 opacity-80 leading-none mb-3">
            <h3>{email || 'email'}</h3>
            <div className="flex space-x-2">
              <h3>
                (
                { followers !== undefined ? `${followers}` : '9999'}
                ) followers
              </h3>
              <h3>
                (
                { posts ? `${posts.length}` : '0'}
                )
                {' '}
                posts
              </h3>
            </div>
          </div>
          {/* add description nav */}
          <h3 className="font-PS text-sm tracking-wide opacity-80 text-left">
            {description || defaultDescription}
          </h3>
        </section>

        <div className="ml-auto self-start">
          {FollowBtn}
        </div>
      </section>
    </section>
  );
}

UserDetails.propTypes = {
  // eslint-disable-next-line max-len
  // eslint-disable-next-line react/forbid-prop-types, react/require-default-props
  details: PropTypes.any,
};
