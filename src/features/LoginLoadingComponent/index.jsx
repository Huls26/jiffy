import PropTypes from 'prop-types';
import { useNavigation } from 'react-router-dom';
import SpinnerCard from '@/components/Loading/SpinnerCard';
import LoginForm from '../LoginForm';

export default function LoginLoadingComponent({ actionData }) {
  const { state } = useNavigation();
  const isLoading = state !== 'idle';

  return (
    <section className="relative">
      <LoginForm actionData={actionData} />
      {isLoading && <SpinnerCard />}
    </section>
  );
}

LoginLoadingComponent.propTypes = {
  // eslint-disable-next-line react/require-default-props
  actionData: PropTypes.shape({
    resMessage: PropTypes.string,
    isInvalid: PropTypes.bool.isRequired,
    // eslint-disable-next-line react/forbid-prop-types
    error: PropTypes.object,
  }),
};
