import { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import { doc, setDoc } from 'firebase/firestore';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';

import {
  db,
  storage,
} from '@api/FB';
import ContentBtn from '@components/Btn/ContentBtn';
import { dataContext } from '@context/dataContext';
import bgColor from '@default/bgColor';
import ProfilePhoto from '@features/UserProfile/components/ProfilePhoto';
import useResetScrollView from '@hooks/useResetScrollView';

import UpdatingFormLoading from './UpdatingFormLoading';

// add save changes functionality
// code clean up
export default function UserProfileBannerEditForm({ handleButton }) {
  useResetScrollView();
  const [data] = useContext(dataContext);
  const { userData, userId } = data;
  const [uData, setUData] = useState(() => ({
    ...userData,
    userBannerFile: null,
    userImgFile: null,
    isLoading: false,
  }));
  const {
    firstname, lastname, username, userImg,
    userBanner,
  } = uData;
  const loadingComponent = uData.isLoading ? 'pointer-events-none animate-pulse relative' : '';

  function handleImageUpdate(event) {
    const { target } = event;
    const { name, files } = target;
    const [imageData] = files;
    // get the name key and add File at the end
    const updateFile = `${name}File`;

    const setLocalUrl = URL.createObjectURL(imageData);

    setUData((prevData) => ({
      ...prevData,
      [name]: setLocalUrl,
      [updateFile]: imageData,
    }));
  }

  async function UploadUserImage(uId, ImgFile, imageBannerProfile, newId) {
    // create url path
    // upload image to firebase storage
    // get url
    if (ImgFile) {
      const imgFilePath = (
        `users/${uId}/${imageBannerProfile}/${ImgFile.name}${newId}`
      );
      const profileImageRef = ref(storage, imgFilePath);
      await uploadBytes(profileImageRef, ImgFile);
      const ImageURL = await getDownloadURL(profileImageRef);

      return ImageURL;
    }

    return null;
  }

  async function handleSaveChanges(fileData, uId, userDataFile) {
    const newData = { ...fileData };
    const { userBannerFile, userImgFile } = newData;
    const newId = uuidv4();

    if (!userBannerFile && !userImgFile) {
      console.log('no update');
      return;
    }

    setUData((prevData) => ({
      ...prevData,
      isLoading: true,
    }));

    // add lazy loading for images: banner, profile photo
    const userBannerNewURL = await UploadUserImage(
      uId,
      userBannerFile,
      'userBanner',
      newId,
    );
    const userImgNewURL = await UploadUserImage(
      uId,
      userImgFile,
      'userImg',
      newId,
    );

    await setDoc(doc(db, 'users', uId), {
      ...userDataFile,
      userImg: userImgNewURL || userDataFile.userImg,
      userBanner: userBannerNewURL || userDataFile.userBanner,
    });

    setUData((prevData) => ({
      ...prevData,
      isLoading: false,
      userBannerFile: null,
      userImgFile: null,
    }));

    console.log('update form');
  }

  return (
    <section className={`py-3 text-center ${loadingComponent}`}>
      <UpdatingFormLoading loading={uData.isLoading} />
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

      <div className={`w-full h-24 ${bgColor}`}>
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

      <div className="flex justify-center mb-2 opacity-90 rounded-full">
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
        { (uData.userBannerFile || uData.userImgFile) && <ContentBtn text="Save changes" bg="bg-green" onClick={() => handleSaveChanges(uData, userId, userData)} />}
        <ContentBtn text="Cancel" bg="bg-peach-1" onClick={() => handleButton('profile')} />
      </div>

    </section>
  );
}

UserProfileBannerEditForm.propTypes = {
  handleButton: PropTypes.func.isRequired,
};
