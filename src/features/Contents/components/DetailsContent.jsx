import { useContext } from 'react';
import { Link } from 'react-router-dom';

import { dataContext } from '@context/dataContext';
import ContentBtn from '@components/Btn/ContentBtn';
import UserDetails from './UserDetails';
import { contentDataContext } from '../context';

export default function DetailsContent() {
  const [userData] = useContext(dataContext);
  const { docData, contentId } = useContext(contentDataContext);
  const usersPost = docData.createdBy === userData.userId;

  console.log(userData);
  return (
    <section className="
        flex justify-between items-start
        w-full
        px-3 text-dark-2
      "
    >
      <UserDetails />
      <Link to="view" state={{ docData, contentId }}>
        {usersPost && <ContentBtn text="Update/Delete" />}
      </Link>
    </section>
  );
}
