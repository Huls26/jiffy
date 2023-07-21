import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { doc, setDoc } from 'firebase/firestore';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { dataContext } from '@context/dataContext';
import { v4 as uuidv4 } from 'uuid';
import {
  db,
  storage,
} from '@api/FB';
import ErrorMessage from './ErrorMessage';
import CancelFileBtn from './CancelFileBtn';
// import { Form } from 'react-router-dom';

// clean up CreatePostEditor
/* eslint-disable max-len */
export default function CreatePostEditor() {
  const [data] = useContext(dataContext);
  const { userId, userData } = data;
  const { username, userImg } = userData;
  const navigate = useNavigate();
  const [file, setFile] = useState(() => ({
    title: '', textContent: '', errorMessage: '', isLoading: false,
  }));
  const docDataPost = {
    content: '',
    textContent: '',
    createdBy: userId,
    username,
    description: '',
    likes: 0,
    peopleLikes: [],
    date: new Date(),
    title: '',
    userImg,
    comments: [],
  };
  const disabledElement = file.isLoading ? 'opacity-50' : '';

  function handleChange(event) {
    const { target } = event;
    const { value, name } = target;

    if (name === 'title') {
      setFile((fileData) => ({
        ...fileData,
        [name]: value,
      }));
    } else if (name === 'textContent') {
      // reset value of input type="file"
      // reset value
      document.getElementById('imageFile').value = null;
      setFile((fileData) => ({
        ...fileData,
        [name]: value,
        fileName: '',
        imgFile: '',
        imgFileValue: '',
        errorMessage: '',
      }));
    }
  }

  function handleCancelFile() {
    // reset value of input type="file"
    // reset value
    document.getElementById('imageFile').value = null;
    setFile((fileData) => ({
      ...fileData,
      fileName: '',
      imgFile: '',
      imgFileValue: '',
      errorMessage: '',
    }));
  }

  function handleImageFile(event) {
    const { target } = event;
    const [fileName] = target.files;

    if (fileName) {
      // cut the length of the word
      const maxLengthWord = 15;
      const isLong = fileName.name.length > maxLengthWord;
      const splitWord = fileName.name.split('').slice(0, maxLengthWord);
      const concatWord = [...splitWord, '...'].join('');
      const cutword = isLong ? concatWord : fileName.name;

      setFile((dataFile) => ({
        ...dataFile,
        fileName: cutword,
        imgFile: fileName,
        imgFileValue: target.value,
        textContent: '',
        errorMessage: '',
      }));
    }
  }

  async function createPost(docData, fileBody, setData) {
    const newId = uuidv4();
    setData((postData) => ({
      ...postData,
      isLoading: true,
    }));

    if (fileBody.imgFile) {
      // create a url or a path name
      // upload image
      // get url of image in firestore storage
      // set a document/object to firestore
      // if content image is available set a url
      // else store textContent
      // redirect user to main page after post is created
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
    } else if (fileBody.textContent) {
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
  }

  function handleSubmit(event) {
    event.preventDefault();

    // store to firebase if there is file
    if (file.imgFile || file.textContent) {
      createPost(docDataPost, file, setFile);
    } else {
      setFile((dataFile) => ({
        ...dataFile,
        errorMessage: 'Oops nothing is created',
      }));
    }
  }

  return (
    <>
      <ErrorMessage message={file.errorMessage} />
      {file.isLoading && <h1>...Loading</h1>}
      <form onSubmit={handleSubmit} method="post" className={`${disabledElement} outline-none`}>
        <div className="w-full mb-4 border border-gray-200 rounded-lg bg-gray-50">
          <div className="px-4 py-2 bg-primary-1 rounded-t-lg">
            <label htmlFor="title" className="sr-only">Your comment</label>
            <input value={file.title} onChange={handleChange} type="text" id="title" name="title" className="w-full px-1 text-xl font-A text-dark-1 bg-white border border-primary-1 focus:border-gray rounded-md dark:bg-primary-1 focus:ring-0 dark:placeholder-gray outline-none" placeholder="Write Title (optional)" maxLength="27" disabled={file.isLoading} />
          </div>
          <div className="px-4 py-2 bg-primary-1 rounded-t-lg">
            <label htmlFor="textContent" className="sr-only">Your comment</label>
            <textarea value={file.textContent} onChange={handleChange} name="textContent" id="textContent" rows="4" className="w-full px-1 text-lg font-A text-dark-1 bg-white border border-primary-1 focus:border-gray rounded-md dark:bg-primary-1 focus:ring-0 dark:placeholder-gray outline-none" placeholder={file.imgFile ? `${file.imgFileValue} \n- Post Image` : 'Write Something...'} disabled={file.isLoading} />
          </div>
          <div className="flex items-center justify-between px-3 py-2 border-t dark:border-gray-600">
            <button type="submit" className="inline-flex items-center py-2.5 px-4 text-xs font-PS font-bold text-center text-white bg-blue rounded-lg active:opacity-80 active:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-aqua-1" disabled={file.isLoading}>
              Create Post
            </button>
            <div className="flex pl-0 sm:pl-2">
              <label htmlFor="imageFile" className="inline-flex justify-center items-center p-1 text-dark-1 rounded cursor-pointer hover:text-white hover:bg-gray active:bg-gray-dark">
                <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                  <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
                </svg>
                <span className="sr-only">Upload image</span>
                {file.fileName && <h1 className="text-gray-dark ml-1 opacity-75">{file.fileName}</h1>}
                <input onChange={handleImageFile} type="file" id="imageFile" accept="image/*" name="imageFile" disabled={file.isLoading} hidden />
              </label>
              {file.fileName && <CancelFileBtn onClick={() => handleCancelFile()} />}
            </div>
          </div>
        </div>
      </form>
    </>
  );
}
