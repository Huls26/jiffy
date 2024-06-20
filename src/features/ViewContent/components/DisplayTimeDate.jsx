import PropTypes from 'prop-types';
import modifyTimeDate from '../utils/modifyTimeDate';

export default function DisplayTimeDate({ docData }) {
  const timeDate = modifyTimeDate(docData);
  return (
    <p className="font-bold mb-4">{timeDate}</p>
  );
}

DisplayTimeDate.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  docData: PropTypes.object.isRequired,
};
