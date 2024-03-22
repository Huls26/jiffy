import { lazy } from 'react';
import { useActionData, useLoaderData } from 'react-router-dom';

import LoginLoadingComponent from '@/features/LoginLoadingComponent';

const ErrorMessage = lazy(() => import('@/components/LoginPage/ErrorMessage'));
const RedirectingCD = lazy(() => import('@/components/LoginPage/RedirectingCD'));

export default function LoginPage() {
  const loaderData = useLoaderData();
  const actionData = useActionData();
  const preventEvent = loaderData?.redirecting ? 'pointer-events-none' : '';

  return (
    <main
      className={`flex flex-col items-center pt-10 ${preventEvent}`}
    >
      <ErrorMessage actionData={actionData || loaderData} />
      <RedirectingCD loaderData={loaderData} />
      <LoginLoadingComponent actionData={actionData} />
    </main>
  );
}
