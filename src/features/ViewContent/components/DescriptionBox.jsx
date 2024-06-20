import PropTypes from 'prop-types';
import DisplayTimeDate from './DisplayTimeDate';
import DisplayDescriptionText from './DisplayDescriptionText';

export default function DescriptionBox({ docData }) {
  return (
    <section className="
                  border-dark-2 border border-b-2 border-r-2
                    p-3 pb-2
                    mx-3 mb-4
                    rounded-lg
                    leading-none
                    text-gray-dark font-A
                  "
    >
      <DisplayTimeDate docData={docData} />
      <DisplayDescriptionText docData={docData} />
    </section>
  );
}

DescriptionBox.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  docData: PropTypes.object.isRequired,
};
