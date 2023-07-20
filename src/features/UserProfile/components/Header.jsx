import { useContext } from 'react';
import { dataContext } from '@context/dataContext';
import { Link } from 'react-router-dom';

import FilterBtn from '@components/Btn/FilterBtn';

import UserDetails from './UserDetails';

export default function Header() {
  const [data] = useContext(dataContext);
  const details = data.userData;
  const { userBanner } = details;

  return (
    <header className="mb-8">
      <div className="w-full h-36 bg-aqua-2">
        <img src={userBanner} alt="banner" className="object-cover w-full h-full" />
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
