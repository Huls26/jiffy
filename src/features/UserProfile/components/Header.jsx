import {
  useContext,
} from 'react';
import {
  redirect, useLoaderData, useSearchParams,
} from 'react-router-dom';
import {
  collection, query, where, getDocs,
} from 'firebase/firestore';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

import { db } from '@api/FB';
import getUsersData from '@api/getUser';
import { getCurrentUser } from '@api/onSnapUserAuth';

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

  // fetch user posts data
  const q = query(collection(db, 'posts'), where('createdBy', '==', urlId));
  const querySnapshot = await getDocs(q);

  return { me, querySnapshot };
}

export default function Header() {
  const userData = useLoaderData();
  const [data] = useContext(dataContext);
  const [searchParams, setSearchParams] = useSearchParams();
  const details = userData.me ? data.userData : userData;
  const { userBanner } = details;

  console.log(searchParams);

  function handleProfileHeaderNav(key, value) {
    setSearchParams((prevParams) => {
      if (!value) {
        prevParams.delete(key);
      } else {
        prevParams.set(key, value);
      }

      return prevParams;
    });
  }

  return (
    <header className="mb-8">
      <div className={`w-full h-36 ${profileBannerBg}`}>
        <LazyLoadImage alt="banner" className="object-cover w-screen h-36" src={userBanner} effect="blur" />
      </div>

      <UserDetails
        details={details}
      />

      <nav className="px-4 pb-3 space-x-2 shadow">
        <FilterBtn text="All" onClick={() => handleProfileHeaderNav('f')} />
        <FilterBtn text="photo" onClick={() => handleProfileHeaderNav('f', 'photo')} />
        <FilterBtn text="text" onClick={() => handleProfileHeaderNav('f', 'text')} />
      </nav>
    </header>

  );
}
