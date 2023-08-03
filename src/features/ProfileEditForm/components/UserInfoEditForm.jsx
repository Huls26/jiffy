import { useContext } from 'react';
import PropTypes from 'prop-types';
import { Form } from 'react-router-dom';

import SignupFormInput from '@features/SignupForm/components/SignupFormInput';
import ContentBtn from '@components/Btn/ContentBtn';
import { dataContext } from '@context/dataContext';

export async function action({ request }) {
  const formData = await request.formData();
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

  console.log(setFormDataValue);

  // push the value to useActionData
  // merge the formDataValue to current userData
  // update the userData to firestore
  return { setFormDataValue };
}

export default function UserInfoEditForm({ handleButton }) {
  const [data] = useContext(dataContext);
  const { userData } = data;
  // const sample1 = { name: 'gerald', last: '', img: 123 };
  // const sample2 = { name: 'anderson', last: 'liam' };
  // const merge = { ...sample1, ...sample2 };

  console.log(userData);
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
