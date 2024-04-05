import PropTypes from 'prop-types';
import CreatePostUploadBtn from './CreatePostUploadBtn';
import CreatePostInputFile from './CreatePostInputFile';
import CancelFileBtn from './CancelFileBtn';

export default function CreatePostBtnSection({
  file,
  handleImageFile,
  handleCancelFile,
}) {
  return (
    <div className="flex items-center justify-between px-3 py-2 border-t dark:border-gray-600">
      <CreatePostUploadBtn file={file} />
      <div className="flex pl-0 sm:pl-2">
        <CreatePostInputFile file={file} handleImageFile={handleImageFile} />
        <CancelFileBtn file={file} onClick={() => handleCancelFile()} />
      </div>
    </div>
  );
}

CreatePostBtnSection.propTypes = {
  file: PropTypes.shape({
    isLoading: PropTypes.bool,
  }).isRequired,
  handleImageFile: PropTypes.func.isRequired,
  handleCancelFile: PropTypes.func.isRequired,
};
