import { useContext, useEffect, useState } from 'react';
import { useActionData, useNavigation } from 'react-router-dom';

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
  const navigation = useNavigation();

  // handle loading for action/password update
  useEffect(() => {
    setIsLoading(() => navigation.state !== 'idle');
  }, [navigation]);

  // handle change actionDate
  useEffect(() => {
    setUserUpdateInfo(() => ({ ...actionData }));
  }, [actionData]);

  // handle update user info and email
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
