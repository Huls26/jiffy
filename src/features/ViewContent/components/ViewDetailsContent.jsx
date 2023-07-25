import ContentBtn from '@components/Btn/ContentBtn';
import UserImage from '@components/UserImage';
import useViewContentHooks from '../hooks/useViewContentHooks';

export default function ViewDetailsContent() {
  const {
    dispatch, title, userImg, username,
    followers, likes, btnBg, userId, // peopleLikes,
  } = useViewContentHooks();

  return (
    <section className="
        w-full
        px-3 text-dark-2
        mb-4
      "
    >
      <h1 className="font-PS text-xl font-bold capitalize leading-none mb-3 block">{title}</h1>
      <div className="flex items-start justify-between">
        <div className="flex space-x-2">
          <UserImage userImg={userImg} />
          <div className="flex items-start space-x-3">
            <div className="inline">
              <h6 className="font-A text-lg font-medium capitalize leading-none">{username}</h6>
              <h6 className="text-gray-dark opacity-75">
                {followers || 0}
                {' '}
                followers
              </h6>
            </div>
            <ContentBtn text="follow" bg="bg-purple" />
          </div>
        </div>

        <div className="space-x-1">
          <ContentBtn
            text={`likes (${likes})`}
            bg={btnBg}
            onClick={() => userId && dispatch({ type: 'USER_LIKE', userId })}
          />
          <ContentBtn text="comment" />
        </div>
      </div>
    </section>
  );
}
