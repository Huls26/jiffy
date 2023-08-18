import {
  useContext,
} from 'react';
import { useLoaderData } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

import FilterNavBtn from '@components/FilterNavBtn';
import { dataContext } from '@context/dataContext';
import profileBannerBg from '@default';

import UserDetails from './UserDetails';

export default function Header() {
  const { userData, me } = useLoaderData();
  const [data] = useContext(dataContext);
  const details = me ? data.userData : userData;
  const { userBanner } = details;

  return (
    <header className="mb-8">
      <div className={`
        w-full h-36 ${profileBannerBg} 
        md:border md:border-gray
        md:rounded
      `}
      >
        <LazyLoadImage alt="banner" className="object-cover w-screen h-36  md:rounded" src={userBanner} effect="blur" />
      </div>

      <UserDetails
        details={details}
        isMe={me}
      />

      <FilterNavBtn />
    </header>

  );
}
