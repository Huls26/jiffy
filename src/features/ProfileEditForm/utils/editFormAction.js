import handlePasswordUpdateFormData from './handlePasswordUpdateFormData';

export default async function action({ request }) {
  // handle password change and updateFormDataValue
  const updateFormDataRes = await handlePasswordUpdateFormData(request);

  return updateFormDataRes;
}
