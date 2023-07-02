import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '@api/FB';

export default async function login(email, password) {
  const resMessage = 'Incorrect Email or Password Try again';
  // const responseLogin = { user: '', isInvalid: true, resMessage };

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
    console.clear();
    return { resMessage, isInvalid: true };
  }
}
