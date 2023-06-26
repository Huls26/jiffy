import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import ContentBtn from '@components/ContentBtn';
import FilterBtn from '@components/FilterBtn';
import ProfilePhoto from './ProfilePhoto';

export default function Header({ banner, userDetails }) {
  const { userImg, username, textDetails } = userDetails;

  console.log(username, textDetails);
  return (
    <header className="mb-3">
      <div className="w-full h-36 bg-aqua-2">
        <img src={banner} alt="banner" className="object-cover w-full h-full" />
      </div>

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

      <nav className="px-4 pb-3 space-x-2 shadow">
        <Link to=".." relative="path"><FilterBtn text="post" /></Link>
        <Link to="photo" relative="path"><FilterBtn text="photo" /></Link>
        <Link to="description" relative="path"><FilterBtn text="description" /></Link>
      </nav>
    </header>
  );
}

Header.propTypes = {
  banner: PropTypes.string.isRequired,
  userDetails: PropTypes.shape({
    userImg: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    textDetails: PropTypes.string.isRequired,
  }).isRequired,
};
