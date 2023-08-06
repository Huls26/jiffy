import updateUserEmailInfo from './updateUserEmailInfo';

export default async function setLoadingInfoState(
  actionData,
  data,
  setIsLoading,
  setUserUpdateInfo,
) {
  const getFormDataValue = actionData?.updateFormDataValue;
  const readyFormDataUpdate = getFormDataValue
  && Object.keys(getFormDataValue).length;
  const { userData, userId } = data;

  if (readyFormDataUpdate) {
    const formDataValueCopy = { ...getFormDataValue };
    const getEmailValue = formDataValueCopy?.email;
    delete formDataValueCopy.password;
    const updatedFormDataValue = { ...userData, ...formDataValueCopy };

    // set loading
    setIsLoading(() => true);

    const resEmail = await updateUserEmailInfo(
      getEmailValue,
      userId,
      updatedFormDataValue,
    );

    setUserUpdateInfo(() => ({ ...resEmail }));
    setIsLoading(() => false);
  }
}
