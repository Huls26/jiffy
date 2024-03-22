import { redirect } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '@/api/FB';

export async function login(email, password) {
  const resMessage = 'Incorrect Email or Password Try again';

  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password,
    );
    const { user } = userCredential;

    return { user, isInvalid: false };
  } catch (error) {
    // const errorCode = error.code;
    // const errorMessage = error.message;
    // eslint-disable-next-line no-console
    console.clear();

    return {
      email,
      resMessage,
      isInvalid: true,
      error: { email: true, password: true },
    };
  }
}

export default async function loginValidation(request) {
  const formData = await request.formData();
  const email = formData.get('email');
  const password = formData.get('password');
  const resMessage = !email ? 'Please Enter Email' : 'Please Enter Password';

  if (email && password) {
    const loginDetails = await login(email, password);

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
