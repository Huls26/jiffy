import { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import { doc, setDoc } from 'firebase/firestore';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import {
  getDownloadURL, ref, uploadBytes, // deleteObject,
} from 'firebase/storage';

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
import EditFormErrorMessage from './EditFormErrorMessage';
import deletePrevImage from '../api/deletePrevImage';

// code clean up
export default function UserProfileBannerEditForm({ handleButton }) {
  useResetScrollView();
  const [data] = useContext(dataContext);
  const { userData, userId } = data;
  const [uData, setUData] = useState(() => ({
    ...userData,
    userBannerFile: null,
    userBannerPrev: userData.userBanner,
    userImgFile: null,
    userImgPrev: userData.userImg,
    isLoading: false,
  }));
  const {
    firstname, lastname, username, userImg,
    userBanner,
  } = uData;
  const [status, setStatus] = useState(() => ({
    error: false,
    errorM: '',
  }));
  const loadingComponent = uData.isLoading ? 'pointer-events-none animate-pulse relative' : '';

  // update uData
  useEffect(() => {
    setUData((prevValue) => ({
      ...prevValue,
      ...userData,
    }));
  }, [userData]);

  // async function deletePrevImage(prevImgUrl) {
  //   const getImageURL = new URL(prevImgUrl);
  //   const urlPathname = getImageURL.pathname;
  //   const [splitUrl] = urlPathname.split('/').slice(-1);
  //   const userImgURL = splitUrl.replaceAll('%2F', '/');

  //   try {
  //     const delImgRef = ref(storage, userImgURL);
  //     // Delete the file
  //     await deleteObject(delImgRef);
  //   } catch (error) {
  //     // do nothing
  //     console.clear();
  //   }
  // }

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

  async function UploadUserImage(
    uId,
    ImgFile,
    imageBannerProfile,
    newId,
    prevImgUrl,
    setS,
  ) {
    // create url path
    // upload image to firebase storage
    // get url
    if (ImgFile && prevImgUrl) {
      try {
        const removeSpaceName = ImgFile.name.replaceAll(' ', '');
        const imgFilePath = (
          `users/${uId}/${imageBannerProfile}/${removeSpaceName}${newId}`
        );
        const profileImageRef = ref(storage, imgFilePath);
        await uploadBytes(profileImageRef, ImgFile);
        const ImageURL = await getDownloadURL(profileImageRef);
        // save the prev image
        await deletePrevImage(prevImgUrl);

        return ImageURL;
      } catch (e) {
        console.clear();
        setS((prevStatus) => ({
          ...prevStatus,
          error: true,
          errorM: 'Oops! Something went wrong',
        }));
      }
    }

    return null;
  }

  async function handleSaveChanges(fileData, uId, userDataFile) {
    const newData = { ...fileData };
    const {
      userBannerFile, userImgFile, userImgPrev, userBannerPrev,
    } = newData;
    const newId = uuidv4();

    if (!userBannerFile && !userImgFile) {
      return;
    }

    setUData((prevData) => ({
      ...prevData,
      isLoading: true,
    }));

    // upload image to firebase storage
    const userBannerNewURL = await UploadUserImage(
      uId,
      userBannerFile,
      'userBanner',
      newId,
      userBannerPrev,
      setStatus,
    );
    const userImgNewURL = await UploadUserImage(
      uId,
      userImgFile,
      'userImg',
      newId,
      userImgPrev,
      setStatus,
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
      userBannerPrev: '',
      userImgFile: null,
      userImgPrev: '',
    }));
  }

  return (
    <section className={`py-3 text-center ${loadingComponent}`}>
      <UpdatingFormLoading loading={uData.isLoading} />
      <EditFormErrorMessage actionData={status} />
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

      <LazyLoadImage alt="banner" className={`w-screen h-24 ${bgColor}`} src={userBanner} effect="blur" />

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
          relative
          z-50
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
