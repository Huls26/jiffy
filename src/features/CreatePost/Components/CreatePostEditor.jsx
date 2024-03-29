import SpinnerCard from '@/components/Loading/SpinnerCard';
import CreatePostTitleInput from './CreatePostTitleInput';
import useHandleCreatePost from '../hooks/useHandleCreatePost';
import ErrorMessage from './ErrorMessage';
import CancelFileBtn from './CancelFileBtn';
import CreatePostBtn from './CreatePostBtn';
import CreatePostTextArea from './CreatePostTextArea';
import CreatePostInputFile from './CreatePostInputFile';

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
            <CreatePostBtn file={file} />
            <div className="flex pl-0 sm:pl-2">
              <CreatePostInputFile file={file} handleImageFile={handleImageFile} />
              <CancelFileBtn file={file} onClick={() => handleCancelFile()} />
            </div>
          </div>
        </div>
      </form>
    </>
  );
}
