import {
  useContext,
} from 'react';
import {
  Link, redirect, useLoaderData,
} from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

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

  return (
    <header className="mb-8">
      <div className={`w-full h-36 ${profileBannerBg}`}>
        <LazyLoadImage alt="banner" className="object-cover w-screen h-36" src={userBanner} effect="blur" />
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
