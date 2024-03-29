import PropTypes from 'prop-types';

export default function CreatePostInputFile({ file, handleImageFile }) {
  return (
    <label htmlFor="imageFile" className="inline-flex justify-center items-center p-1 text-dark-1 rounded cursor-pointer hover:text-white hover:bg-gray active:bg-gray-dark">
      <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
        <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
      </svg>
      <span className="sr-only">Upload image</span>
      {file.fileName && <h1 className="text-gray-dark ml-1 opacity-75">{file.fileName}</h1>}
      <input onChange={handleImageFile} type="file" id="imageFile" accept="image/*" name="imageFile" disabled={file.isLoading} hidden />
    </label>
  );
}

CreatePostInputFile.propTypes = {
  file: PropTypes.shape({
    // eslint-disable-next-line react/forbid-prop-types
    fileName: PropTypes.any,
    isLoading: PropTypes.bool,
  }).isRequired,
  handleImageFile: PropTypes.string.isRequired,
};
