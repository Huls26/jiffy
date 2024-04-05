import SpinnerCard from '@/components/Loading/SpinnerCard';

import ErrorMessage from './ErrorMessage';
import CreatePostTitleInput from './CreatePostTitleInput';
import CreatePostTextArea from './CreatePostTextArea';
import CreatePostBtnSection from './CreatePostBtnSection';

import useHandleCreatePost from '../hooks/useHandleCreatePost';

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
          <CreatePostBtnSection
            file={file}
            handleImageFile={handleImageFile}
            handleCancelFile={handleCancelFile}
          />
        </div>
      </form>
    </>
  );
}
