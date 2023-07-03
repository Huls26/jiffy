import {
  useActionData,
} from 'react-router-dom';

import loginValidation from '@api/loginPageAPI';
import LoginLoadingComponent from '@features/LoginLoadingComponent';
import ErrorMessage from '@components/LoginPage/ErrorMessage';

export async function action({ request }) {
  const isLoggingIn = loginValidation(request);

  return isLoggingIn;
}

export default function LoginPage() {
  const actionData = useActionData();

  return (
    <main
      className="flex flex-col items-center pt-10"
    >
      <ErrorMessage actionData={actionData} />
      <LoginLoadingComponent actionData={actionData} />
    </main>
  );
}
