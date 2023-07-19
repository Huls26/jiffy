import { useContext } from 'react';
import { dataContext } from '@context/dataContext';
import UserPhoto from '@components/Header/components/UserPhoto';

export default function UserProfile() {
  const [data] = useContext(dataContext);
  const { userData } = data;
  const { username } = userData;
  const defaultUserName = 'Username';

  return (
    <div className="flex items-center space-x-1 mb-3">
      <UserPhoto />
      <h1 className="font-A font-semibold text-dark-2 opacity-90 hover:text-purple hover:text-lg">
        {username || defaultUserName}
      </h1>
    </div>
  );
}
