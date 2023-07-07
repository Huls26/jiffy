import ContentBtn from '@components/ContentBtn';
import UserImage from '@components/UserImage';
import usePostDataState from '../hooks/usePostDataState';

export default function UserDetails() {
  const {
    dispatch, userImg, textContent, username,
    displayLikes, btnBg, userId, contentId, userState,
  } = usePostDataState();

  console.log(contentId);
  console.log(userState);
  return (
    <div className="flex items-start space-x-3">
      <UserImage userImg={userImg} />
      <div>
        <h1 className="font-PS text-lg font-bold capitalize leading-none mb-1">{textContent}</h1>
        <h6 className="font-A text-base capitalize leading-none mb-2">{username}</h6>
        <div className="space-x-1">
          <ContentBtn
            text={`like (${displayLikes})`}
            bg={btnBg}
            onClick={() => dispatch({ type: 'USER_LIKE', userId })}
          />
          <ContentBtn text="comment" />
        </div>
      </div>
    </div>
  );
}
