import { doc, setDoc } from 'firebase/firestore';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import {
  db,
  storage,
} from '@api/FB';

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
) {
  await setDoc(doc(db, 'posts', newId), {
    ...docData,
    textContent: fileBody.textContent,
    title: fileBody.title,
  });
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
) {
  const { userId, newId } = ids;
  const pathStorage = `posts/${userId}/${fileBody.fileName}${newId}`;
  const ImageRef = ref(storage, pathStorage);
  await uploadBytes(ImageRef, fileBody.imgFile);
  const imageUrl = await getDownloadURL(ImageRef);
  await setDoc(doc(db, 'posts', newId), {
    ...docData,
    content: imageUrl,
    title: fileBody.title,
  });
  setData((postData) => ({
    ...postData,
    isLoading: false,
  }));
  navigate('/');
}
