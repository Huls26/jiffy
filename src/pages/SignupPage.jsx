import { useActionData } from 'react-router-dom';
import { createUser } from '@api/signupPageAPI';
// import SignupForm from '@features/SignupForm';
import ErrorMessage from '@components/LoginPage/ErrorMessage';
import SuccessMessage from '@components/SignupPage/SuccessMessage';
import SignupLoadingComponent from '@features/SignupLoadingComponent';

export async function action({ request }) {
  const res = await createUser(request);

  return {
    ...res,
  };
}

export default function SignupPage() {
  const actionData = useActionData();

  return (
    <main className="flex flex-col items-center my-8">
      <SuccessMessage actionData={actionData} />
      <ErrorMessage actionData={actionData} />
      {/* <SignupForm /> */}
      <SignupLoadingComponent />
    </main>
  );
}
