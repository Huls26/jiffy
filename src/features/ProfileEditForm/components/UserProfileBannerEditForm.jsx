import { useContext, useState } from 'react';
import PropTypes from 'prop-types';

import ContentBtn from '@components/Btn/ContentBtn';
import { dataContext } from '@context/dataContext';
import ProfilePhoto from '@features/UserProfile/components/ProfilePhoto';

export default function UserProfileBannerEditForm({ handleButton }) {
  const [data] = useContext(dataContext);
  const { userData } = data;
  const [uData, setUData] = useState(() => ({
    ...userData,
    userBannerFile: null,
    userImgFile: null,
  }));
  const {
    firstname, lastname, username, userImg,
    userBanner,
  } = uData;

  function handleImageUpdate(event) {
    const { target } = event;
    const { name, files } = target;
    const [imageData] = files;
    const updateFile = `${name}File`;

    const setLocalUrl = URL.createObjectURL(imageData);

    setUData((prevData) => ({
      ...prevData,
      [name]: setLocalUrl,
      [updateFile]: files,
    }));
  }

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
        <label
          htmlFor="uploadBanner"
          className="bg-aqua-2 px-3 py-1
          font-A font-bold text-sm
          grow-0 basis-0
          border-dark-2
          border border-b-2 border-r-2 rounded
          capitalize
          hover:opacity-80
          active:bg-green
        "
        >
          Upload New Photo
        </label>
        <input onChange={handleImageUpdate} type="file" accept="image/*" name="userBanner" id="uploadBanner" hidden />
      </div>

      <div className="flex justify-center mb-2 opacity-90">
        <ProfilePhoto userImg={userImg} />
      </div>

      <label
        htmlFor="uploadPhoto"
        className="bg-aqua-2 px-3 py-1
        font-A font-bold text-sm
        grow-0 basis-0
        border-dark-2
        border border-b-2 border-r-2 rounded
        capitalize
        hover:opacity-80
        active:bg-green"
      >
        Upload New Photo
      </label>
      <input onChange={handleImageUpdate} type="file" accept="image/*" name="userImg" id="uploadPhoto" hidden />

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
