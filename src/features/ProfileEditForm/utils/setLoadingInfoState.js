import updateUserEmailInfo from './updateUserEmailInfo';

export default async function setLoadingInfoState(
  readyFormDataUpdate,
  getFormDataValue,
  userData,
  userId,
  setIsLoading,
  setUserUpdateInfo,
) {
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
