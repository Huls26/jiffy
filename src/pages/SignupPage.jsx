import { lazy } from 'react';
import { useActionData } from 'react-router-dom';

import SuccessMessage from '@/components/SignupPage/SuccessMessage';
import SignupLoadingComponent from '@/features/SignupLoadingComponent';
import useResetScrollView from '@/hooks/useResetScrollView';

const ErrorMessage = lazy(() => import('@/components/LoginPage/ErrorMessage'));

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
