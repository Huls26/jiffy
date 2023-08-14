import { lazy } from 'react';
import {
  useActionData, useLoaderData,
} from 'react-router-dom';

import loginValidation from '@api/loginPageAPI';
import { getCurrentUser } from '@api/onSnapUserAuth';
import LoginLoadingComponent from '@features/LoginLoadingComponent';

const ErrorMessage = lazy(() => import('@components/LoginPage/ErrorMessage'));
const RedirectingCD = lazy(() => import('@components/LoginPage/RedirectingCD'));

export async function loader() {
  const user = await getCurrentUser();
  const userId = user?.uid;

  if (userId) {
    return {
      userId,
      resMessage: 'Oops! you need to logout before doing \n this action redirecting \n to profile page in: ',
      isInvalid: true,
      redirecting: true,
    };
  }

  return {
    resMessage: null,
    isInvalid: false,
    redirecting: false,
  };
}

export async function action({ request }) {
  const isLoggingIn = loginValidation(request);

  return isLoggingIn;
}

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
