import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '@api/FB';

export default async function login(email, password) {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password,
    );
    const { user } = userCredential;

    return user;
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;

    return { errorCode, errorMessage };
  }
}
