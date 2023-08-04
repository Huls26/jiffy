import { useContext } from 'react';
import PropTypes from 'prop-types';
import { Form, useActionData } from 'react-router-dom';

import SignupFormInput from '@features/SignupForm/components/SignupFormInput';
import ContentBtn from '@components/Btn/ContentBtn';
import { dataContext } from '@context/dataContext';

export async function action({ request }) {
  const formData = await request.formData();
  const password = formData.get('password');
  const confirmPassword = formData.get('confirmPassword');

  // validate password
  if (password
    && ((password?.length < 6) || (password !== confirmPassword))) {
    return { error: true, errorM: 'Check Password' };
  }

  // get password with different object
  // update the password in firebase auth
  // i think i should update the password here in action function
  const formDataKey = ['firstname', 'lastname', 'username', 'email', 'description', 'password'];
  const setFormDataValue = formDataKey
    .reduce((formDataKeyValue, key) => {
      const value = formData.get(key);

      if (value) {
        const addValue = {
          ...formDataKeyValue,
          [key]: value,
        };

        return addValue;
      }

      return formDataKeyValue;
    }, {});

  // push the value to useActionData
  // merge the formDataValue to current userData
  // update the userData to firestore
  return { error: false, updateFormDataValue: setFormDataValue };
}

export default function UserInfoEditForm({ handleButton }) {
  // get FormData
  // check FormData ready for update
  // get the userData from dataContext
  const actionData = useActionData();
  const getFormDataValue = actionData?.updateFormDataValue;
  const readyFormDataUpdate = getFormDataValue
  && Object.keys(getFormDataValue).length;
  const [data] = useContext(dataContext);
  const { userData } = data;

  console.log(actionData);
  // get seperate email and password with different object
  // update the email and password in firebase auth
  if (readyFormDataUpdate) {
    const getPasswordValue = getFormDataValue.password;
    const getEmailValue = getFormDataValue.email;
    delete getFormDataValue.password;
    const updatedFormDataValue = { ...userData, ...getFormDataValue };
    console.log(updatedFormDataValue);
    console.log(getPasswordValue, getEmailValue);

    if (getPasswordValue) {
      console.log('update password to firebase');
    }

    if (getEmailValue) {
      console.log('update user email');
    }

    console.log('update userinfo');
  }

  return (
    <Form method="post" className="px-6 py-3 font-PS font-semibold text-base text-gray-dark">
      <fieldset>
        <SignupFormInput label="first name" name="firstname" placeholder="First name" required="false" />
        <SignupFormInput label="last name" name="lastname" placeholder="Last name(optional)" required="false" />
        <SignupFormInput label="username" name="username" placeholder="Username" required="false" />
        <SignupFormInput label="email" name="email" type="email" placeholder="Email" required="false" />

        <label htmlFor="description">Description</label>
        <div className="mb-3 p-1 bg-white border rounded-md">
          <textarea
            maxLength="252"
            name="description"
            id="description"
            rows="4"
            className="
            w-full
            text-lg font-A text-gray-dark
            bg-white
            rounded-md outline-none
          "
            placeholder="Update Description..."
            required={false}
          />
        </div>

        <div className="mb-3">
          <SignupFormInput label="password" name="password" type="password" placeholder="Update Password" required="false" />
          <SignupFormInput label="confirm password" name="confirmPassword" type="password" placeholder="Confirm Password" required="false" />
        </div>

        <div className="space-x-1">
          <ContentBtn text="update info" bg="bg-green" type="submit" />
          <ContentBtn text="Cancel" bg="bg-peach-1" onClick={() => handleButton('profile')} />
        </div>
      </fieldset>
    </Form>
  );
}

UserInfoEditForm.propTypes = {
  handleButton: PropTypes.func.isRequired,
};
