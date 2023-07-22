import ContentBtn from '@components/Btn/ContentBtn';
import UserImage from '@components/UserImage';
import usePostDataState from '../hooks/usePostDataState';

export default function UserDetails() {
  const {
    dispatch, userImg, title, username,
    displayLikes, btnBg, userId, // contentId, // userState,
  } = usePostDataState();
  const modifyTitle = title.length >= 27 ? title.slice(0, 27) : title;

  // console.log(contentId);
  // console.log(userState);
  console.log('Render userDetails');
  return (
    <div className="flex items-start space-x-3">
      <UserImage userImg={userImg} />
      <div>
        <h1 className="font-PS text-lg font-bold capitalize leading-none mb-1">{modifyTitle}</h1>
        <h6 className="font-A text-base font-medium capitalize leading-none mb-2 opacity-90">{username}</h6>
        <div className="space-x-1">
          <ContentBtn
            text={`like (${displayLikes})`}
            bg={btnBg}
            onClick={() => userId && dispatch({ type: 'USER_LIKE', userId })}
          />
          <ContentBtn text="comment" />
        </div>
      </div>
    </div>
  );
}
