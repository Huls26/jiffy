import PropTypes from 'prop-types';

export default function FilterBtn({ text }) {
  return (
    <button type="button">{text}</button>
  );
}

FilterBtn.propTypes = {
  text: PropTypes.string.isRequired,
};
