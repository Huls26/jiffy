import { useContext, useState } from 'react';
import {
  collection, addDoc,
  // ref,
} from 'firebase/firestore';
import { dataContext } from '@context/dataContext';
import {
  db,
  // storage,
} from '@api/FB';
// import { Form } from 'react-router-dom';

/* eslint-disable max-len */
export default function CreatePostEditor() {
  // const imageValue = document.getElementById('imageFile');
  // console.log(imageValue);
  const [data] = useContext(dataContext);
  const { userId, userData } = data;
  const { username, userImg } = userData;
  const [file, setFile] = useState(() => null);
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
    fileName: '',
  };

  function handleImageFile(event) {
    const { target } = event;
    const [fileName] = target.files;

    if (fileName) {
      const maxLengthWord = 15;
      const isLong = fileName.name.length > maxLengthWord;
      const splitWord = fileName.name.split('').slice(0, maxLengthWord);
      const concatWord = [...splitWord, '...'].join('');
      const cutword = isLong ? concatWord : fileName.name;

      setFile(() => ({ fileName: cutword, imgFile: fileName }));
    }
  }

  async function createPost(docData) {
    const docRef = await addDoc(collection(db, 'posts'), {
      ...docData,
      fileName: file.fileName,
    });

    if (file.imgFile) {
      // const pathStorage = `posts/${docRef.id}/${file.fileName}${docRef.id}`;
      // const ImageRef = ref(storage, pathStorage);

    }
    console.log(docRef.id);
    return docRef.id;
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (file.imgFile) {
      console.log(file.imgFile);
      createPost(docDataPost);
    }
  }

  return (
    <form onSubmit={handleSubmit} method="post" className="outline-none">
      <div className="w-full mb-4 border border-gray-200 rounded-lg bg-gray-50">
        <div className="px-4 py-2 bg-primary-1 rounded-t-lg">
          <label htmlFor="comment" className="sr-only">Your comment</label>
          <textarea id="comment" rows="4" className="w-full px-0 text-lg font-A text-dark-1 bg-white border-0 dark:bg-primary-1 focus:ring-0 dark:placeholder-gray outline-none" placeholder="Write Something..." />
        </div>
        <div className="flex items-center justify-between px-3 py-2 border-t dark:border-gray-600">
          <button type="submit" className="inline-flex items-center py-2.5 px-4 text-xs font-PS font-bold text-center text-white bg-blue rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-aqua-1">
            Create Post
          </button>
          <div className="flex pl-0 space-x-1 sm:pl-2">
            <label htmlFor="imageFile" className="inline-flex justify-center items-center p-1 text-dark-1 rounded cursor-pointer hover:text-white hover:bg-gray active:bg-gray-dark">
              <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
              </svg>
              <span className="sr-only">Upload image</span>
              {file && <h1 className="text-gray-dark ml-1 opacity-75">{file.fileName}</h1>}
              <input onChange={handleImageFile} type="file" id="imageFile" accept="image/*" name="imageFile" hidden />
            </label>
          </div>
        </div>
      </div>
    </form>
  );
}
