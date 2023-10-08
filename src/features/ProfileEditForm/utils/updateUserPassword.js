import { updatePassword } from 'firebase/auth';
import { getCurrentUser } from '@api/onSnapUserAuth';

export default async function updateUserPassword(password, getKeyValue) {
  // validate and update password
  // requires recent login to change passcode
  try {
    const auth = await getCurrentUser();
    const user = auth;
    await updatePassword(user, password);

    return { error: false, updateFormDataValue: getKeyValue, update: 'password' };
  } catch (error) {
    // testing this code below
    // eslint-disable-next-line no-console
    console.clear();
    const errorMessage = error.code.replace('auth/', '').split('-').join(' ');
    return { error: true, errorM: `${errorMessage} updating password` };
  }
}
