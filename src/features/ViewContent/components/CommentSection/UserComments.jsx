import PropTypes from 'prop-types';
import UserImage from '@components/UserImage';
import ContentBtn from '@components/Btn/ContentBtn';

export default function UserComments({ commentsDetail }) {
  const {
    userImg, username, date, userComments,
  } = commentsDetail;

  return (
    <article className="text-dark-2 font-PS mb-5 flex space-x-3">
      <UserImage userImg={userImg} />
      <section>
        <div className="flex space-x-2 items-center leading-none">
          <h1 className="font-extrabold text-lg">{username}</h1>
          <p className="text-sm text-gray-dark opacity-80">{date}</p>
        </div>
        <p className="leading-none font-medium mb-3">{userComments}</p>
        <ContentBtn text="like (3)" bg="bg-aqua-1" />
      </section>
    </article>
  );
}

UserComments.propTypes = {
  commentsDetail: PropTypes.shape({
    userImg: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    userComments: PropTypes.string.isRequired,
  }).isRequired,
};
