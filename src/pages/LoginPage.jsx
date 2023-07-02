import {
  useActionData,
  // defer,
} from 'react-router-dom';

import loginPage from '@api/loginPageAPI';
import LoginForm from '@features/LoginForm';
import ErrorMessage from '@components/LoginPage/ErrorMessage';

// to do
// add a defer, await, suspense and add a loading just a loading text for now
// if user is success logging in
// direct/navigate to mainPage if there is no previous path
// clean up code

export async function action({ request }) {
  const formData = await request.formData();
  const email = formData.get('email');
  const password = formData.get('password');
  const resMessage = !email ? 'Please Enter Email' : 'Please Enter Password';

  if (email && password) {
    const loginDetails = await loginPage(email, password);
    // console.log('redirect to mainpage
    // if the search params url path is missing');

    return { ...loginDetails };
  }

  return {
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

  console.log(actionData);
  return (
    <main
      className="flex flex-col items-center pt-10"
    >
      <ErrorMessage actionData={actionData} />
      <LoginForm actionData={actionData} />
    </main>
  );
}
