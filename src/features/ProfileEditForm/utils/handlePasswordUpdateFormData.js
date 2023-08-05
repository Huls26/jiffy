import setFormDataValue from './setFormDataValue';
import updateUserPassword from './updateUserPassword';

export default async function handlePasswordUpdateFormData(request) {
  const formData = await request.formData();
  const password = formData.get('password');
  const confirmPassword = formData.get('confirmPassword');
  const validPassword = (password?.length >= 6)
    && (password === confirmPassword);

  // validate password
  if (password
    && (!validPassword)) {
    return { error: true, errorM: 'Check Password' };
  }

  const getKeyValue = setFormDataValue(formData);

  // validate and update password
  // requires recent login to change passcode
  if (validPassword) {
    const updatePasswordRes = updateUserPassword(password, getKeyValue);

    return updatePasswordRes;
  }

  return { error: false, updateFormDataValue: getKeyValue };
}
