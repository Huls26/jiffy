import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import FilterBtn from '@components/Btn/FilterBtn';
import UserDetails from './UserDetails';

export default function Header({ banner, userDetails }) {
  const { userImg, username } = userDetails;

  return (
    <header className="mb-8">
      <div className="w-full h-36 bg-aqua-2">
        <img src={banner} alt="banner" className="object-cover w-full h-full" />
      </div>

      <UserDetails userImg={userImg} username={username} />

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
