import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { dataContext } from '@context/dataContext';
import { firebaseUploadImage, firebaseUploadTextContent } from '../api/firebaseUpload';
import modifyFilename from '../utils/modifyFilename';

export default function useHandleCreatePost() {
  const [data] = useContext(dataContext);
  const { userId, userData } = data;
  const {
    username, userImg, followers, peopleFollows,
  } = userData;

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
    followers,
    peopleFollows,
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
      const newFileName = modifyFilename(fileName);

      setFile((dataFile) => ({
        ...dataFile,
        fileName: newFileName,
        imgFile: fileName,
        imgFileValue: target.value,
        textContent: '',
        errorMessage: '',
      }));
    }
  }

  async function createPost(docData, fileBody, setData, uid) {
    const newId = uuidv4();
    // set page to loading
    setData((postData) => ({
      ...postData,
      isLoading: true,
    }));

    if (fileBody.imgFile) {
      firebaseUploadImage(
        fileBody,
        { userId: uid, newId },
        docData,
        setData,
        navigate,
      );
    } else if (fileBody.textContent) {
      firebaseUploadTextContent(
        fileBody,
        newId,
        docData,
        setData,
        navigate,
      );
    }
  }

  function handleSubmit(event) {
    event.preventDefault();

    // store to firebase if there is file
    if (file.imgFile || file.textContent) {
      createPost(docDataPost, file, setFile, userId);
    } else {
      setFile((dataFile) => ({
        ...dataFile,
        errorMessage: 'Oops nothing is created',
      }));
    }
  }

  return {
    file,
    disabledElement,
    handleChange,
    handleCancelFile,
    handleImageFile,
    handleSubmit,
  };
}
