import {
  useContext,
} from 'react';
import { Link, redirect, useLoaderData } from 'react-router-dom';

import { getCurrentUser } from '@api/onSnapUserAuth';
import getUsersData from '@api/getUser';

import FilterBtn from '@components/Btn/FilterBtn';
import { dataContext } from '@context/dataContext';
import profileBannerBg from '@default';

import UserDetails from './UserDetails';

export async function loader({ params }) {
  const urlId = params.id;
  const user = await getCurrentUser();
  const me = urlId === user?.uid;

  if (!user?.uid) {
    return redirect('/');
  } if (!me) {
    const userData = await getUsersData(urlId);
    return userData;
  }

  return { me };
}

export default function Header() {
  const userData = useLoaderData();
  const [data] = useContext(dataContext);
  const details = userData.me ? data.userData : userData;
  const { userBanner } = details;

  // figure out where to put searchParam value
  // and the component for ProfileEditForm
  console.log(userData.readyForEdit);
  // bg-aqua-2
  return (
    <header className="mb-8">
      <div className={`w-full h-36 ${profileBannerBg}`}>
        <img src={userBanner} alt="" className="object-cover w-full h-full" />
      </div>

      <UserDetails
        details={details}
      />

      <nav className="px-4 pb-3 space-x-2 shadow">
        <Link to=".." relative="path"><FilterBtn text="post" /></Link>
        <Link to="photo" relative="path"><FilterBtn text="photo" /></Link>
        <Link to="description" relative="path"><FilterBtn text="description" /></Link>
      </nav>
    </header>

  );
}
