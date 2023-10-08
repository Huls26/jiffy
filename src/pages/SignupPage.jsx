import { useActionData } from 'react-router-dom';

import ErrorMessage from '@components/LoginPage/ErrorMessage';
import SuccessMessage from '@components/SignupPage/SuccessMessage';
import SignupLoadingComponent from '@features/SignupLoadingComponent';
import useResetScrollView from '@hooks/useResetScrollView';

export default function SignupPage() {
  useResetScrollView();
  const actionData = useActionData();

  return (
    <main className="flex flex-col items-center my-8">
      <SuccessMessage actionData={actionData} />
      <ErrorMessage actionData={actionData} />
      <SignupLoadingComponent />
    </main>
  );
}
