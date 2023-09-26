import { doc, deleteDoc } from 'firebase/firestore';
import {
  getDownloadURL, ref, uploadBytes, deleteObject,
} from 'firebase/storage';
import { db, storage } from '@api/FB';
import setPostData from './setPostData';

// create a url or a path name
// upload image
// get url of image in firestore storage
// set a document/object to firestore
// if content image is available set a url
// else store textContent
// redirect user to main page after post is created

// this should be good right now
// ready for code improvement
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
  try {
    await setPostData(setArguments);

    setData((postData) => ({
      ...postData,
      isLoading: false,
    }));
    navigate('/');
  } catch (error) {
    await deleteDoc(doc(db, 'posts', newId));
    // await deleteDoc(doc(db, 'users', userId));

    setData((postData) => ({
      ...postData,
      isLoading: false,
      errorMessage: 'Sorry, something went wrong. Try refreshing the page.',
    }));
  }
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

  try {
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
  } catch (error) {
    await deleteDoc(doc(db, 'posts', newId));
    // await deleteDoc(doc(db, 'users', userId));

    deleteObject(ImageRef).catch(() => {
      console.clear();
    });

    setData((postData) => ({
      ...postData,
      isLoading: false,
      errorMessage: 'Sorry, something went wrong. Try refreshing the page.',
    }));
  }
}
