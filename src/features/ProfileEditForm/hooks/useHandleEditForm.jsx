import { useContext, useEffect, useState } from 'react';
import { useActionData } from 'react-router-dom';

import { dataContext } from '@context/dataContext';
import handleDynamicStyle from '../utils/handleDynamicStyle';
import setLoadingInfoState from '../utils/setLoadingInfoState';

export default function useHandleEditForm() {
  // get FormData
  // check FormData ready for update
  // get the userData from dataContext
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
    {
      handleUpdateStyle, isLoading, userData, userUpdateInfo,
    }
  );
}
