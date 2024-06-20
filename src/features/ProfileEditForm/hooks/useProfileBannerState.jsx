import { useContext, useState } from 'react';
import { dataContext } from '@/context/dataContext';

import handleSaveChanges from '../api/handleSaveChanges';

export default function useProfileBannerState() {
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

  const [status, setStatus] = useState(() => ({
    error: false,
    errorM: '',
  }));

  // handle upload img to firebase storage
  function saveChanges() {
    handleSaveChanges(uData, userId, userData, setUData, setStatus);
  }

  return (
    {
      userData, uData, status, setUData, saveChanges,
    }
  );
}
