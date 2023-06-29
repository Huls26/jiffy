import LoginForm from '@features/LoginForm';

export async function action({ request }) {
  const formData = await request.formData();
  const username = formData.get('username');
  const password = formData.get('password');

  if (username && password) {
    console.log(username, password);
    console.log('Successful login');
  }

  return null;
}

export default function LoginPage() {
  return (
    <main
      className="flex justify-center pt-10"
    >
      <LoginForm />
    </main>
  );
}
