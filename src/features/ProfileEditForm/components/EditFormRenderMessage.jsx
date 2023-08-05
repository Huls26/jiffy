import PropTypes from 'prop-types';

import EditFormSuccessMessage from './EditFormSuccessMessage';
import EditFormErrorMessage from './EditFormErrorMessage';

export default function EditFormRenderMessage({ actionData }) {
  return (
    <>
      <EditFormSuccessMessage actionData={actionData} />
      <EditFormErrorMessage actionData={actionData} />
    </>
  );
}

EditFormRenderMessage.propTypes = {
  // eslint-disable-next-line react/require-default-props
  actionData: PropTypes.shape({
    update: PropTypes.string,
    error: PropTypes.bool,
    errorM: PropTypes.string,
  }),
};
