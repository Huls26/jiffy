import {
  useContext, useEffect, useState, memo,
} from 'react';
import PropTypes from 'prop-types';
import { Form, useActionData } from 'react-router-dom';
// import {
//   updateEmail,
//   // updatePassword,
// } from 'firebase/auth';
// import { doc, updateDoc } from 'firebase/firestore';

// import { db } from '@api/FB';
// import { getCurrentUser } from '@api/onSnapUserAuth';
import SignupFormInput from '@features/SignupForm/components/SignupFormInput';
import ContentBtn from '@components/Btn/ContentBtn';
import { dataContext } from '@context/dataContext';
import useResetScrollView from '@hooks/useResetScrollView';

import EditFormRenderMessage from './EditFormRenderMessage';
import UpdatingFormLoading from './UpdatingFormLoading';
// import setFormDataValue from '../utils/setFormDataValue';
// import updateUserPassword from '../utils/updateUserPassword';
import handlePasswordUpdateFormData from '../utils/handlePasswordUpdateFormData';
// import updateUserEmailInfo from '../utils/updateUserEmailInfo';
import setLoadingInfoState from '../utils/setLoadingInfoState';

// code clean up
// test
export async function action({ request }) {
  // handle password change and updateFormDataValue
  const updateFormDataRes = await handlePasswordUpdateFormData(request);

  return updateFormDataRes;
}

// async function updateUserEmailInfo(newEmail, userId, newUserData) {
//   try {
//     if (newEmail) {
//       const auth = await getCurrentUser();
//       if (auth?.uid) {
//         await updateEmail(auth, newEmail);
//       }
//     }
//     const userRef = doc(db, 'users', userId);
//     await updateDoc(userRef, newUserData);

//     return { error: false, update: 'Info' };
//   } catch (error) {
//     const errorMessage = error?.code.replace
// ('auth/', '').split('-').join(' ');
//     return { error: true, errorM: errorMessage };
//   }
// }

function UserInfoEditForm({ handleButton }) {
  // get FormData
  // check FormData ready for update
  // get the userData from dataContext
  useResetScrollView();
  const actionData = useActionData();
  const getFormDataValue = actionData?.updateFormDataValue;
  const readyFormDataUpdate = getFormDataValue
  && Object.keys(getFormDataValue).length;
  const [data] = useContext(dataContext);
  const { userData, userId } = data;
  const [userUpdateInfo, setUserUpdateInfo] = useState(() => {});
  const [isLoading, setIsLoading] = useState(false);
  const loadingStyle = isLoading ? 'pointer-events-none animate-pulse' : '';
  const successStyle = userUpdateInfo?.update ? 'outline outline-4 outline-green' : '';
  const errorStyle = userUpdateInfo?.error ? 'outline outline-4 outline-bRed' : '';

  // create success message when updating user info
  console.log(userUpdateInfo);
  // console.log(actionData);
  useEffect(() => {
    setUserUpdateInfo(() => ({ ...actionData }));
  }, [actionData]);

  useEffect(() => {
    setLoadingInfoState(
      readyFormDataUpdate,
      getFormDataValue,
      userData,
      userId,
      setIsLoading,
      setUserUpdateInfo,
    );
  }, [getFormDataValue, readyFormDataUpdate, userData, userId]);

  return (
    <>
      <UpdatingFormLoading loading={isLoading} />
      <Form method="post" className={`relative px-6 py-3 font-PS font-semibold text-base text-gray-dark ${loadingStyle} ${successStyle} ${errorStyle} rounded-lg`}>

        {/* display success and error message */}
        <EditFormRenderMessage actionData={userUpdateInfo} />

        <fieldset>
          <SignupFormInput label="first name" name="firstname" placeholder={userData.firstname || 'Firstname'} required="false" />
          <SignupFormInput label="last name" name="lastname" placeholder={userData.lastname || 'Lastname'} required="false" />
          <SignupFormInput label="username" name="username" placeholder={userData.username || 'Username'} required="false" />
          <SignupFormInput label="email" name="email" type="email" placeholder={userData.email || 'Email'} required="false" />

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
              placeholder={userData.description || 'Add Description...'}
              required={false}
            />
          </div>

          <div className="mb-3">
            <SignupFormInput label="password" name="password" type="password" placeholder="Update Password" required="false" />
            <SignupFormInput label="confirm password" name="confirmPassword" type="password" placeholder="Confirm Password" required="false" />
          </div>

          <div className="space-x-1">
            <ContentBtn text="update info" bg="bg-green" type="submit" onClick={() => handleButton('profile', 'editInfo')} />
            <ContentBtn text="Cancel" bg="bg-peach-1" onClick={() => handleButton('profile')} />
          </div>
        </fieldset>
      </Form>
    </>
  );
}

UserInfoEditForm.propTypes = {
  handleButton: PropTypes.func.isRequired,
};

const memoUserInfoEditForm = memo(UserInfoEditForm);
export default memoUserInfoEditForm;
