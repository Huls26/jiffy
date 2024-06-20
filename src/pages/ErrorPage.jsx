/* eslint-disable no-console */
import { Link, useRouteError } from 'react-router-dom';
import { useEffect } from 'react';
import ContentBtn from '@/components/Btn/ContentBtn';

export default function ErrorPage() {
  const error = useRouteError();
  useEffect(() => {
    console.clear();
  });

  return (
    <div className="pt-10 text-center">
      <div className=" mb-3 font-A text-gray text-lg">
        <h1 className="font-bold text-2xl text-bRed">Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>Try again later.</p>
        <p>
          <i>{error.statusText || error.message}</i>
        </p>
      </div>
      <Link to="/">
        <ContentBtn text="home" bg="bg-purple" />
      </Link>
    </div>

  );
}
