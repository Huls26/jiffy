import signupPage from '@api/signupPage';
import SignupForm from '@features/SignupForm';

export async function action({ request }) {
  const formData = await request.formData();
  const email = formData.get('email');
  const password = formData.get('password');

  if (email && password) {
    const res = await signupPage(email, password);
    console.log(res);
  }
  return null;
}

export default function SignupPage() {
  return (
    <main>
      <SignupForm />
    </main>
  );
}
