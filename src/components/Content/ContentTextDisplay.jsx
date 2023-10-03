import PropTypes from 'prop-types';

export default function ContentTextDisplay({ textContent }) {
  return (
    <div className="w-full h-full px-11 flex items-center justify-center">
      <p className="text-dark-1 text-2xl font-bold font-PS text-center md:text-justify leading-tight opacity-90 text-ellipsis overflow-hidden break-words">
        {textContent}
      </p>
    </div>
  );
}

ContentTextDisplay.propTypes = {
  textContent: PropTypes.string.isRequired,
};
