import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import {
  auth,
  db,
} from './FB';
import defaultUserData from './defaultUserData';

// check response data
export default async function createUser(email, password, formData) {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth, email, password,
    );
    const { user } = userCredential;

    if (user) {
      const setNewUser = defaultUserData(formData);
      await setDoc(doc(db, 'users', user.uid), setNewUser);
    }

    return { uid: user.uid, formData };
  } catch (error) {
    const errorMessage = error.code.replace('auth/', '').split('-').join(' ');
    const errorEmail = errorMessage.includes('email');
    const errorPassword = errorMessage.includes('password');

    return {
      email,
      resMessage: errorMessage,
      isInvalid: true,
      error: {
        email: errorEmail,
        password: errorPassword,
        confirmPassword: errorPassword,
      },
    };
  }
}

export async function creatingUserValidation(request) {
  const formData = await request.formData();
  const email = formData.get('email');
  const password = formData.get('password');
  const confirmPassword = formData.get('confirmPassword');

  if (password === confirmPassword) {
    console.log('check for user email address');
    console.log('create user');
    console.log(email);
  }
}
