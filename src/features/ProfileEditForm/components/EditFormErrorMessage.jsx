import PropTypes from 'prop-types';

export default function EditFormErrorMessage({ actionData }) {
  return (
    actionData?.error && <h1 className="font-bold text-xl text-red text-center capitalize">{actionData?.errorM}</h1>
  );
}

EditFormErrorMessage.propTypes = {
  // eslint-disable-next-line react/require-default-props
  actionData: PropTypes.shape({
    error: PropTypes.bool,
    errorM: PropTypes.string,
  }),
};
