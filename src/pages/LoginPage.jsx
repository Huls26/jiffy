import { useActionData } from 'react-router-dom';

import loginPage from '@api/loginPageAPI';
import LoginForm from '@features/LoginForm';
import ErrorMessage from '@components/LoginPage/ErrorMessage';

export async function action({ request }) {
  const formData = await request.formData();
  const email = formData.get('email');
  const password = formData.get('password');
  const invalidMessage = 'Incorrect Email or Password Try again';

  if (email && password) {
    const loginDetails = await loginPage(email, password);
    // console.log('redirect to mainpage
    // if the search params url path is missing');

    return { ...loginDetails };
  }

  return { invalidMessage, isInvalid: true };
}

export default function LoginPage() {
  const actionData = useActionData();

  return (
    <main
      className="flex flex-col items-center pt-10"
    >
      <ErrorMessage actionData={actionData} />
      <LoginForm />
    </main>
  );
}
