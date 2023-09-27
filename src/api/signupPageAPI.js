import {
  createUserWithEmailAndPassword, deleteUser, getAuth, signOut,
} from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import {
  auth,
  db,
} from './FB';
import defaultUserData from './defaultUserData';

// check response data
export default async function creatingUserValidation(
  email,
  password,
  formData,
) {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password,
    );
    const { user } = userCredential;
    const authSignOut = getAuth();
    let resMessage = '';
    let isInvalid = false;

    if (user) {
      const setNewUser = defaultUserData(formData);
      await setDoc(doc(db, 'users', user.uid), setNewUser).then(() => {
        resMessage = 'User Created';
      }).catch((error) => {
        deleteUser(user).then(() => {
          resMessage = 'Try Again Something Went Wrong';
          isInvalid = true;
        })
          .catch(() => {
            console.log(error.message);
          });
      });
      await signOut(authSignOut);
    }

    return { isInvalid, resMessage };
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

export async function createUser(request) {
  const formData = await request.formData();
  const email = formData.get('email');
  const password = formData.get('password');
  const confirmPassword = formData.get('confirmPassword');
  const resMessage = 'Check Password';

  if (password === confirmPassword && email) {
    const res = await creatingUserValidation(email, password, formData);
    return res;
  }

  return {
    resMessage,
    isInvalid: true,
    error: { email: false, password: true, confirmPassword: true },
  };
}
