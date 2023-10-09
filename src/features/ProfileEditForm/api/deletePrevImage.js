import { ref, deleteObject } from 'firebase/storage';
import { storage } from '@api/FB';

export default async function deletePrevImage(prevImgUrl) {
  const getImageURL = new URL(prevImgUrl);
  const urlPathname = getImageURL.pathname;
  const [splitUrl] = urlPathname.split('/').slice(-1);
  const userImgURL = splitUrl.replaceAll('%2F', '/');

  try {
    const delImgRef = ref(storage, userImgURL);
    // Delete the file
    await deleteObject(delImgRef);
  } catch (error) {
    // do nothing
    // eslint-disable-next-line no-console
    console.clear();
  }
}
