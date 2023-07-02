import {
  useActionData,
  useNavigation,
  useSearchParams,
} from 'react-router-dom';

import loginPage from '@api/loginPageAPI';
import LoginForm from '@features/LoginForm';
import ErrorMessage from '@components/LoginPage/ErrorMessage';

// to do
// add loading state and save email when logging in
// if user is success logging in
// direct/navigate to mainPage if there is no previous path
// clean up code

export async function action({ request }) {
  const formData = await request.formData();
  const email = formData.get('email');
  const password = formData.get('password');
  const resMessage = !email ? 'Please Enter Email' : 'Please Enter Password';
  const url = new URL(request.url);
  const params = new URLSearchParams(url.search);

  // const params = new URLSearchParams();

  if (email && password) {
    const loginDetails = await loginPage(email, password);
    params.set('e', email);
    const setNewParams = params.toString();
    window.location.search = setNewParams;
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
  const { state } = useNavigation();
  const [searchParams] = useSearchParams();
  const isLoading = state === 'idle' ? <LoginForm actionData={actionData} /> : <h1>...Loading</h1>;
  console.log(searchParams.get('e'));

  return (
    <main
      className="flex flex-col items-center pt-10"
    >
      <ErrorMessage actionData={actionData} />
      {/* <LoginForm actionData={actionData} /> */}
      { isLoading }
    </main>
  );
}
