/* eslint-disable react/jsx-no-bind */
// import { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import ContentBtn from '@components/Btn/ContentBtn';
// import { dataContext } from '@context/dataContext';
import bgColor from '@default/bgColor';
import ProfilePhoto from '@features/UserProfile/components/ProfilePhoto';
import useResetScrollView from '@hooks/useResetScrollView';

import EditFormErrorMessage from './EditFormErrorMessage';
import RenderName from './RenderName';
import UploadPhotoBtn from './UploadPhotoBtn';
import UpdatingFormLoading from './UpdatingFormLoading';
// import handleSaveChanges from '../api/handleSaveChanges';
import useProfileBannerState from '../hooks/useProfileBannerState';
import handleImageUpdate from '../utils/UserProfileBannerEditForm/handleImageUpdate';

// code clean up
export default function UserProfileBannerEditForm({ handleButton }) {
  useResetScrollView();
  // const [data] = useContext(dataContext);
  // const { userData, userId } = data;
  // const [uData, setUData] = useState(() => ({
  //   ...userData,
  //   userBannerFile: null,
  //   userBannerPrev: userData.userBanner,
  //   userImgFile: null,
  //   userImgPrev: userData.userImg,
  //   isLoading: false,
  // }));
  // const {
  //   userImg,
  //   userBanner, isLoading,
  // } = uData;
  // const [status, setStatus] = useState(() => ({
  //   error: false,
  //   errorM: '',
  // }));
  const {
    userData, uData, status, setUData, saveChanges,
  } = useProfileBannerState();
  const loadingComponent = uData?.isLoading ? 'pointer-events-none animate-pulse relative' : '';

  // // update uData
  // useEffect(() => {
  //   setUData((prevValue) => ({
  //     ...prevValue,
  //     ...userData,
  //   }));
  // }, [userData]);

  // // handle upload img to firebase storage
  // function saveChanges() {
  //   handleSaveChanges(uData, userId, userData, setUData, setStatus);
  // }

  return (
    <section className={`py-3 text-center ${loadingComponent}`}>
      <UpdatingFormLoading loading={uData?.isLoading} />
      <EditFormErrorMessage actionData={status} />
      <RenderName userData={userData} />

      <div className="mb-2">
        <ContentBtn text="Edit Profile info" onClick={() => handleButton('profile', 'editInfo')} />
      </div>

      <LazyLoadImage alt="banner" className={`w-screen h-24 ${bgColor}`} src={uData?.userBanner} effect="blur" />

      <div className="text-left ml-1 -mt-6 mb-4">
        <UploadPhotoBtn
          name="userBanner"
          id="uploadBanner"
          onChangeImage={(event) => handleImageUpdate(event, setUData)}
        />
      </div>

      <div className="flex justify-center mb-2 opacity-90 rounded-full">
        <ProfilePhoto userImg={uData?.userImg} />
      </div>

      <UploadPhotoBtn
        name="userImg"
        id="uploadPhoto"
        onChangeImage={(event) => handleImageUpdate(event, setUData)}
      />

      <div className="mt-2 space-x-1">
        { (uData.userBannerFile || uData.userImgFile) && <ContentBtn text="Save changes" bg="bg-green" onClick={saveChanges} />}
        <ContentBtn text="Cancel" bg="bg-peach-1" onClick={() => handleButton('profile')} />
      </div>

    </section>
  );
}

UserProfileBannerEditForm.propTypes = {
  handleButton: PropTypes.func.isRequired,
};
