import { useContext } from 'react';
import ContentBtn from '@components/ContentBtn';
import UserImage from '@components/UserImage';
import { contentDataContext } from '../context';
import shortenLikesValue from '../utils/shortenLikesValue';

export default function UserDetails() {
  const { doc } = useContext(contentDataContext);
  const {
    userImg, textContent, username, likes, // peopleLikes,
  } = doc;
  const likesValue = shortenLikesValue(likes);

  return (
    <div className="flex items-start space-x-3">
      <UserImage userImg={userImg} />
      <div>
        <h1 className="font-PS text-lg font-bold capitalize leading-none mb-1">{textContent}</h1>
        <h6 className="font-A text-base capitalize leading-none mb-2">{username}</h6>
        <div className="space-x-1">
          <ContentBtn text={`like (${likesValue})`} bg="bg-aqua-1" />
          <ContentBtn text="comment" />
        </div>
      </div>
    </div>
  );
}
