import PropTypes from 'prop-types';
import { useNavigation } from 'react-router-dom';
import LoginForm from '../LoginForm';

export default function LoginLoadingComponent({ actionData }) {
  const { state } = useNavigation();
  const isLoading = state === 'idle'
    ? <LoginForm actionData={actionData} /> : <h1>...Loading</h1>;

  return (
    isLoading
  );
}

LoginForm.propTypes = {
  // eslint-disable-next-line react/require-default-props
  actionData: PropTypes.shape({
    resMessage: PropTypes.string.isRequired,
    isInvalid: PropTypes.bool.isRequired,
    // eslint-disable-next-line react/forbid-prop-types
    error: PropTypes.object,
  }),
};
