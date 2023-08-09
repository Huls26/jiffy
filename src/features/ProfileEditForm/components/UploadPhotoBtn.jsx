import PropTypes from 'prop-types';

export default function UploadPhotoBtn({ name, id, onChangeImage }) {
  return (
    <>
      <label
        htmlFor={id}
        className="bg-aqua-2 px-3 py-1
    font-A font-bold text-sm
    grow-0 basis-0
    border-dark-2
    border border-b-2 border-r-2 rounded
    capitalize
    hover:opacity-80
    active:bg-green
    relative
    z-50
    "
      >
        Upload New Photo
      </label>
      <input onChange={onChangeImage} type="file" accept="image/*" name={name} id={id} hidden />
    </>
  );
}

UploadPhotoBtn.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  // eslint-disable-next-line react/require-default-props
  onChangeImage: PropTypes.func,
};
