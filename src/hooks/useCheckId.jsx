import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { dataContext } from '@/context/dataContext';

export default function useCheckId() {
  const [userData] = useContext(dataContext);
  const { userId } = userData;
  const { id } = useParams();
  const isOwnProfile = userId === id;
  return (
    isOwnProfile
  );
}
