import PropTypes from 'prop-types';

export default function CreatePostTextArea({ file, handleChange }) {
  return (
    <section className="px-4 py-2 bg-primary-1 rounded-t-lg">
      <textarea maxLength="252" value={file.textContent} onChange={handleChange} name="textContent" id="textContent" rows="4" className="w-full px-1 text-lg font-A text-dark-1 bg-white border border-primary-1 focus:border-gray rounded-md dark:bg-primary-1 focus:ring-0 dark:placeholder-gray outline-none" placeholder={file.imgFile ? `${file.imgFileValue} \n- Post Image` : 'Write Something...'} disabled={file.isLoading} />
    </section>
  );
}

CreatePostTextArea.propTypes = {
  file: PropTypes.shape({
    textContent: PropTypes.string,
    // eslint-disable-next-line react/forbid-prop-types
    imgFile: PropTypes.any,
    imgFileValue: PropTypes.string,
    isLoading: PropTypes.bool,

  }).isRequired,
  handleChange: PropTypes.func.isRequired,
};
