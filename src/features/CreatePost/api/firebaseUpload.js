import {
  getDownloadURL, ref, uploadBytes,
} from 'firebase/storage';
import { storage } from '@api/FB';
import setPostData from './setPostData';

// create a url or a path name
// upload image
// get url of image in firestore storage
// set a document/object to firestore
// if content image is available set a url
// else store textContent
// redirect user to main page after post is created

export async function firebaseUploadTextContent(
  fileBody,
  newId,
  docData,
  setData,
  navigate,
  data,
) {
  const { userId, userData } = data;
  const setArguments = {
    newId,
    docData,
    userId,
    userData,
    keyContent: 'textContent',
    valueContent: fileBody.textContent,
    title: fileBody.title,
  };

  await setPostData(setArguments);
  setData((postData) => ({
    ...postData,
    isLoading: false,
  }));
  navigate('/');
}

export async function firebaseUploadImage(
  fileBody,
  ids,
  docData,
  setData,
  navigate,
  data,
) {
  const { userData } = data;
  const { userId, newId } = ids;
  const pathStorage = `posts/${userId}/${fileBody.fileName}${newId}`;
  const ImageRef = ref(storage, pathStorage);
  await uploadBytes(ImageRef, fileBody.imgFile);
  const imageUrl = await getDownloadURL(ImageRef);
  const setArguments = {
    newId,
    docData,
    userId,
    userData,
    keyContent: 'content',
    valueContent: imageUrl,
    title: fileBody.title,
  };
  await setPostData(setArguments);
  setData((postData) => ({
    ...postData,
    isLoading: false,
  }));
  navigate('/');
}
