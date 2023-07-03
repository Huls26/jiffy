import {
  redirect,
  useActionData,
} from 'react-router-dom';

import loginPage from '@api/loginPageAPI';
import LoginLoadingComponent from '@features/LoginLoadingComponent';
import ErrorMessage from '@components/LoginPage/ErrorMessage';

// to do
// clean up code

export async function action({ request }) {
  const formData = await request.formData();
  const email = formData.get('email');
  const password = formData.get('password');
  const resMessage = !email ? 'Please Enter Email' : 'Please Enter Password';

  if (email && password) {
    const loginDetails = await loginPage(email, password);

    if (loginDetails.user) {
      return redirect('..');
    }

    return { ...loginDetails };
  }

  return {
    email,
    resMessage,
    isInvalid: true,
    error: {
      email: !email,
      password: !password,
    },
  };
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
