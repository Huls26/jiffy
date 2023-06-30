import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from './FB';

export default async function createUser(email, password) {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth, email, password,
    );
    const { user } = userCredential;
    return user;
  } catch (error) {
    return error.message;
  }
}
