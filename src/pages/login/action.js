import loginValidation from '@api/loginPageAPI';

export default async function action({ request }) {
  const isLoggingIn = loginValidation(request);

  return isLoggingIn;
}
