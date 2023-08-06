import {
  useContext, useEffect, useState, memo,
} from 'react';
import PropTypes from 'prop-types';
import { Form, useActionData } from 'react-router-dom';

import SignupFormInput from '@features/SignupForm/components/SignupFormInput';
import ContentBtn from '@components/Btn/ContentBtn';
import { dataContext } from '@context/dataContext';
import useResetScrollView from '@hooks/useResetScrollView';

import EditFormRenderMessage from './EditFormRenderMessage';
import UpdatingFormLoading from './UpdatingFormLoading';
import handleDynamicStyle from '../utils/handleDynamicStyle';
import handlePasswordUpdateFormData from '../utils/handlePasswordUpdateFormData';
import setLoadingInfoState from '../utils/setLoadingInfoState';

// code clean up
// test
export async function action({ request }) {
  // handle password change and updateFormDataValue
  const updateFormDataRes = await handlePasswordUpdateFormData(request);

  return updateFormDataRes;
}

function UserInfoEditForm({ handleButton }) {
  // get FormData
  // check FormData ready for update
  // get the userData from dataContext
  useResetScrollView();
  const actionData = useActionData();
  const [data] = useContext(dataContext);
  const { userData } = data;
  const [userUpdateInfo, setUserUpdateInfo] = useState(() => {});
  const [isLoading, setIsLoading] = useState(false);
  const handleUpdateStyle = handleDynamicStyle(isLoading, userUpdateInfo);

  useEffect(() => {
    setUserUpdateInfo(() => ({ ...actionData }));
  }, [actionData]);

  useEffect(() => {
    setLoadingInfoState(
      actionData,
      data,
      setIsLoading,
      setUserUpdateInfo,
    );
  }, [actionData, data]);

  return (
    <>
      <UpdatingFormLoading loading={isLoading} />
      <Form method="post" className={`relative px-6 py-3 font-PS font-semibold text-base text-gray-dark ${handleUpdateStyle} rounded-lg`}>

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
