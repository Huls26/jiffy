import PropTypes from 'prop-types';
import ContentBtn from '@components/Btn/ContentBtn';
import ProfilePhoto from './ProfilePhoto';

export default function UserDetails({ userImg, username }) {
  return (
    <section className="px-6 py-5 mb-3">
      <section className="flex space-x-3">
        <ProfilePhoto userImg={userImg} />

        <section className="font-LM leading-none text-justify text-dark-2">
          <h1 className="font-bold text-lg">{username}</h1>
          <div className="text-sm space-y-1 opacity-80 leading-none mb-3">
            <h3>@emailaddress</h3>
            <h3>(100) followers</h3>
            <h3>69 posts</h3>
          </div>
          {/* add description nav */}
          <h3 className="text-sm opacity-80 text-left">
            Lorem ipsum dolor sit amet consectetur adipisicing.
          </h3>
        </section>

        <div>
          <ContentBtn text="follow" bg="bg-purple" />
        </div>
      </section>
    </section>
  );
}

UserDetails.propTypes = {
  userImg: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
};
