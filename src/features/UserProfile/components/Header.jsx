import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import ContentBtn from '@components/ContentBtn';
import ProfilePhoto from './ProfilePhoto';

export default function Header({ banner, userDetails }) {
  const { userImg, username, textDetails } = userDetails;

  console.log(username, textDetails);
  return (
    <header>
      <div className="w-full h-36 bg-aqua-2">
        <img src={banner} alt="banner" className="object-cover w-full h-full" />
      </div>

      <section className="px-6 py-5">
        <section>
          <ProfilePhoto userImg={userImg} />

          <section>
            <h1>{username}</h1>
            <div>
              <h3>@emailaddress</h3>
              <h3>(100) followers</h3>
              <h3>69 posts</h3>
            </div>
            <h3>
              User details Lorem ipsum dolor sit,
              amet consectetur adipisicing elit. Voluptatibus, a!
            </h3>
          </section>

          <ContentBtn text="follow" bg="bg-purple" />
        </section>
      </section>

      <nav>
        <Link to=".." relative="path">post</Link>
        <Link to="photo" relative="path">photo</Link>
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
