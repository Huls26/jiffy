import { useNavigation } from 'react-router-dom';
import SpinnerCard from '@components/Loading/SpinnerCard';
import SignupForm from '../SignupForm';

export default function SignupLoadingComponent() {
  const { state } = useNavigation();
  const isLoading = state !== 'idle';

  return (
    <section className="relative">
      <SignupForm />
      {isLoading && <SpinnerCard />}
    </section>
  );
}
