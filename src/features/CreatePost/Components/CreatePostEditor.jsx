import SpinnerCard from '@/components/Loading/SpinnerCard';
import CreatePostTitleInput from './CreatePostTitleInput';
import useHandleCreatePost from '../hooks/useHandleCreatePost';
import ErrorMessage from './ErrorMessage';
import CancelFileBtn from './CancelFileBtn';
import CreatePostTextArea from './CreatePostTextArea';

/* eslint-disable max-len */
export default function CreatePostEditor() {
  const {
    file,
    disabledElement,
    handleChange,
    handleCancelFile,
    handleImageFile,
    handleSubmit,
  } = useHandleCreatePost();

  return (
    <>
      <ErrorMessage message={file.errorMessage} />
      <form onSubmit={handleSubmit} method="post" className={`${disabledElement} outline-none relative`}>
        {file.isLoading && <SpinnerCard />}

        <div className="w-full mb-4 border border-gray-200 rounded-lg bg-gray-50">
          <CreatePostTitleInput file={file} handleChange={handleChange} />
          <CreatePostTextArea file={file} handleChange={handleChange} />
          {
            // separate element create component for composable
          }
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
