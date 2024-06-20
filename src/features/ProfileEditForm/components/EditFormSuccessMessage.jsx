import PropTypes from 'prop-types';

export default function EditFormSuccessMessage({ actionData }) {
  return (
    actionData?.update && (
      <h1 className="font-bold text-xl text-green text-center capitalize break-words">
        success updating
        {' '}
        {actionData?.update}
      </h1>
    )
  );
}

EditFormSuccessMessage.propTypes = {
  // eslint-disable-next-line react/require-default-props
  actionData: PropTypes.shape({
    update: PropTypes.string,
  }),
};
