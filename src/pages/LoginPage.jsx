import loginPage from '@api/loginPage';
import LoginForm from '@features/LoginForm';

export async function action({ request }) {
  const formData = await request.formData();
  const email = formData.get('email');
  const password = formData.get('password');

  if (email && password) {
    const isLogin = await loginPage(email, password);
    console.log(isLogin);
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
