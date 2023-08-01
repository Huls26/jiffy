import { useContext } from 'react';
import PropTypes from 'prop-types';

import ContentBtn from '@components/Btn/ContentBtn';
import { dataContext } from '@context/dataContext';
import ProfilePhoto from '@features/UserProfile/components/ProfilePhoto';

export default function UserProfileBannerEditForm({ handleButton }) {
  const [data] = useContext(dataContext);
  const { userData } = data;
  const {
    firstname, lastname, username, userImg, userBanner,
  } = userData;

  // get the put to a state
  // set the input for image
  return (
    <section className="py-3 text-center">
      <h1 className="font-PS font-bold text-lg text-gray-dark">
        {firstname}
        {' '}
        {lastname}
      </h1>
      <button type="button" className="hover:font-bold">
        <h1 className="font-A text-gray ">
          @
          {username}
        </h1>
      </button>

      <div className="mb-2">
        <ContentBtn text="Edit Profile info" onClick={() => handleButton('profile', 'editInfo')} />
      </div>

      <div className="w-full h-24">
        <img src={userBanner} alt="" className="w-full h-full" />
      </div>
      <div className="text-left ml-1 -mt-6 mb-4">
        <ContentBtn text="upload new banner" bg="bg-aqua-2" />
      </div>

      <div className="flex justify-center mb-2 opacity-90">
        <ProfilePhoto userImg={userImg} />
      </div>

      <ContentBtn text="upload new photo" bg="bg-aqua-2" />

      <div className="mt-2 space-x-1">
        <ContentBtn text="Save changes" bg="bg-green" />
        <ContentBtn text="Cancel" bg="bg-peach-1" onClick={() => handleButton('profile')} />
      </div>

    </section>
  );
}

UserProfileBannerEditForm.propTypes = {
  handleButton: PropTypes.func.isRequired,
};
