import { doc, setDoc } from 'firebase/firestore';
import {
  getDownloadURL, ref, uploadBytes, // deleteObject,
} from 'firebase/storage';
import { v4 as uuidv4 } from 'uuid';

import {
  db,
  storage,
} from '@api/FB';
import deletePrevImage from './deletePrevImage';

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

export default async function handleSaveChanges(
  fileData,
  uId,
  userDataFile,
  setUData,
  setStatus,
) {
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
