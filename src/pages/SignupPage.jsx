import signupPage from '@api/signupPageAPI';
import SignupForm from '@features/SignupForm';
import { useActionData } from 'react-router-dom';

export async function action({ request }) {
  const formData = await request.formData();
  const email = formData.get('email');
  const password = formData.get('password');
  const confirmPassword = formData.get('confirmPassword');
  const resMessage = '';

  if (password === confirmPassword && email) {
    const res = await signupPage(email, password);

    // console.log('check for user email address');
    // console.log('create user');
    // console.log(email);
    return res;
  }

  return {
    email,
    resMessage,
    isInvalid: true,
    error: { email: false, password: true, confirmPassword: true },
  };
}

export default function SignupPage() {
  const actionData = useActionData();

  console.log(actionData);
  return (
    <main>
      <SignupForm />
    </main>
  );
}
